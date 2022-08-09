import { Vec2 } from '../../../vector/Vec2.js';
import { GameElementInteraction } from './decorators/interaction.js';
import { GameElement } from './GameElement.js';

export abstract class Pawn extends GameElement {
	public static readonly interactions: ((elem: GameElement) => GameElementInteraction)[] = [];

	public checkedMove(delta: Vec2, n = 1): void {
		const grid = this.scene.getGrid();

		while (n > 0) {
			const pos = this.pos.add(delta);

			if (!grid.inBounds(pos)) {
				break;
			}

			const oldCell = grid.get(this.pos);
			const newCell = grid.get(pos);
			const heightDif = Math.abs(oldCell.getHeight() - newCell.getHeight());
			
			if (heightDif > 1.1) {
				break;
			}
			
			let stop = false;

			stop = oldCell.onLeave(this) || stop;
			this.pos = pos;
			stop = newCell.onEnter(this) || stop;

			if (stop) {
				break;
			}

			n--;
		}
	}

	public isPawn(): this is Pawn { return true; }
}