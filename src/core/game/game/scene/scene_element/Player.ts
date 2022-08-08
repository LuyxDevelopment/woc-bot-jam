import { Pawn } from './Pawn.js';

export class Player extends Pawn {
	public isPlayer(): this is Player { return true; }
}
