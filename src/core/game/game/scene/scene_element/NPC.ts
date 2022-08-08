import { Pawn } from './Pawn.js';

export class NPC extends Pawn {
	public isNPC(): this is NPC { return true; }
}