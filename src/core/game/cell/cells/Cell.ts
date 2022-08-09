import { Game } from '../../game/Game.js';
import { Scene } from '../../game/scene/Scene.js';
import { BaseCell, BaseCellData } from '../BaseCell.js';

export interface CellData extends BaseCellData {
	type: 'cell';
}

export class Cell extends BaseCell {
	constructor(data: CellData, game: Game, scene: Scene) {
		super(data, game, scene);
	}

	public get data(): CellData {
		return {
			type: 'cell',
			height: this.getHeight(),
			material: this.getMaterial(),
		};
	}
}