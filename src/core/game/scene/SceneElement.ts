import { Game } from '../game/Game.js';
import { Renderable } from '../renderer/Renderable.js';
import { Renderer } from '../renderer/Renderer.js';
import { Vec2 } from '../vector/Vector2.js';
import { Vec3 } from '../vector/Vector3.js';
import { Scene } from './Scene.js';

export abstract class SceneElement implements Renderable {
	protected pos: Vec2;
	protected readonly game: Game;
	protected scene: Scene;

	constructor(game: Game, scene: Scene) {
		this.pos = Vec2.zero();
		this.game = game;
		this.scene = scene;
	}

	public getGame(): Game {
		return this.game;
	}

	public getScene(): Scene {
		return this.scene;
	}

	public setScene(scene: Scene) {
		this.scene.removeElement(this);

		this.scene = scene;

		this.scene.addElement(this);
	}

	public getPos(): Vec3 {
		return new Vec3(this.pos.x, this.pos.y, this.scene.getGrid().get(this.pos).getHeight());
	}

	public setPos(pos: Vec2) {
		this.pos = pos.clone();
	}

	public checkedMove(delta: Vec2, n = 1) {
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

	public close() {
		this.scene.removeElement(this);
	}

	public abstract render(renderer: Renderer): void;
}