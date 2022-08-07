import { Game } from '../game/Game.js';
import { Scene } from '../scene/Scene.js';
import { SceneElement } from '../scene/SceneElement.js';
import { CellMaterial } from '../typings/cell.js';

export interface BaseCellData {
	height: number;
}

export abstract class BaseCell {
	private height: number;
	protected abstract material: CellMaterial;
	protected readonly game: Game;
	protected readonly scene: Scene;

	constructor(data: BaseCellData, game: Game, scene: Scene) {
		this.height = data.height;
		this.game = game;
		this.scene = scene;
	}

	public getMaterial(): CellMaterial {
		return this.material;
	}

	public getHeight(): number {
		return this.height;
	}

	public abstract onEnter(element: SceneElement): void;

	public abstract onLeave(element: SceneElement): void;
}
