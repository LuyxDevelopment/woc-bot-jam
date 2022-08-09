import { Awaitable } from 'discord.js';
import { GameElementInteraction } from './decorators/interaction.js';
import { GameElement } from './GameElement.js';

export class Anchor extends GameElement {
	public static readonly interactions: ((elem: GameElement) => GameElementInteraction)[] = [];

	public isAnchor(): this is Anchor { return true; }

	public getInteractions(): readonly GameElementInteraction[] {
		return Anchor.interactions.map((inter) => inter(this));
	}
}