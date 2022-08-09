import { Awaitable } from 'discord.js';
import { GameElementInteraction } from './decorators/interaction.js';
import { GameElement } from './GameElement.js';
import { Pawn } from './Pawn.js';

export class NPC extends Pawn {
	public static readonly interactions: ((elem: GameElement) => GameElementInteraction)[] = [];

	public isNPC(): this is NPC { return true; }

	public getInteractions(): readonly GameElementInteraction[] {
		return NPC.interactions.map((inter) => inter(this));
	}
}