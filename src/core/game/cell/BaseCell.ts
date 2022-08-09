import { Game } from '../game/Game.js';
import { Scene } from '../game/scene/Scene.js';
import { GameElement } from '../game/scene/scene_element/GameElement.js';
import { AnyCellData, CellMaterial } from '../typings/cell.js';

export interface BaseCellData {
	height: number;
	material: CellMaterial;
}

export abstract class BaseCell {
	private height: number;
	private material: CellMaterial;
	protected readonly game: Game;
	protected readonly scene: Scene;

	constructor(data: BaseCellData, game: Game, scene: Scene) {
		this.height = data.height;
		this.material = data.material;
		this.game = game;
		this.scene = scene;
	}

	public getMaterial(): CellMaterial {
		return this.material;
	}

	public getHeight(): number {
		return this.height;
	}

	public onEnter(element: GameElement): boolean { return false; }

	public onLeave(element: GameElement): boolean { return false; }

	public abstract get data(): AnyCellData;
}
