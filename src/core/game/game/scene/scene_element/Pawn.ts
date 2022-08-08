import { Vec2 } from '../../../vector/Vector2.js';
import { GameElement } from './GameElement.js';

export abstract class Pawn extends GameElement {
	public checkedMove(delta: Vec2, n = 1): void {
		const grid = this.scene.getGrid();

		while (n > 0) {
			const pos = this.pos.add(delta);
			const oldCell = grid.get(this.pos);
			const newCell = grid.get(pos);
			const heightDif = Math.abs(oldCell.getHeight() - newCell.getHeight());

			if (heightDif <= 1.1) {
				oldCell.onLeave(this);
				this.pos = pos;
				newCell.onEnter(this);
			}

			n--;
		}
	}

	public isPawn(): this is Pawn { return true; }
}