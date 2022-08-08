import { Game } from '../../game/Game.js';
import { Scene } from '../../game/scene/Scene.js';
import { CellMaterial } from '../../typings/cell.js';
import { BaseCell, BaseCellData } from '../BaseCell.js';

export interface CellData extends BaseCellData {
	type: 'cell';
	material: CellMaterial;
}

export class Cell extends BaseCell {
	protected material: CellMaterial;

	constructor(data: CellData, game: Game, scene: Scene) {
		super(data, game, scene);

		this.material = data.material;
	}

	public onEnter() { }

	public onLeave() { }
}