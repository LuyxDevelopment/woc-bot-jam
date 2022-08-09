import { GameElementInteraction } from './decorators/interaction.js';
import { GameElement } from './GameElement.js';
import { Pawn } from './Pawn.js';

export class Player extends Pawn {
	public static readonly interactions: ((elem: GameElement) => GameElementInteraction)[] = [];

	public isPlayer(): this is Player { return true; }

	public getInteractions(): readonly GameElementInteraction[] {
		return Player.interactions.map((inter) => inter(this));
	}
}
