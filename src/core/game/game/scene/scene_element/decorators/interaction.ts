import { Awaitable, ButtonInteraction, Client } from 'discord.js';
import { GameElement } from '../GameElement.js';

export interface GameElementInteraction {
	label: string;
	emoji: string;
	customId: string;
}

export function interaction<E extends typeof GameElement>(Element: E, label: string, emoji: string) {
	return function (target: E['prototype'], propertyKey: string, descriptor: TypedPropertyDescriptor<(interaction: ButtonInteraction, other: GameElement) => Promise<void>>): void {
		Element.interactions.push((elem: E['prototype']) => ({
			label,
			emoji,
			customId: `gei__${elem.id}__${propertyKey}`,
		}));

		const visits = new Map<string, number>();
		const original = descriptor.value;

		descriptor.value = async function (this: GameElement, interaction: ButtonInteraction, other: GameElement): Promise<void> {
			if (Date.now() - (visits.get(other.id) ?? 0) > 5000) {
				visits.set(other.id, Date.now());

				await original?.call(this, interaction, other);
			}
		};
	};
}
