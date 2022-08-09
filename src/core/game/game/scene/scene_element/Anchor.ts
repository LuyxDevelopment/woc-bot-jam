import { GameElement } from './GameElement.js';

export abstract class Anchor extends GameElement {
	public isAnchor(): this is Anchor { return true; }
}