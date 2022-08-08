import { Game } from '../../game/Game.js';
import { Scene } from '../../game/scene/Scene.js';
import { BaseCell } from '../BaseCell.js';
import { Cell, CellData } from './Cell.js';
import { TeleporterCell, TeleporterCellData } from './TeleporterCell.js';

export type AnyCellData = CellData | TeleporterCellData;

export class CellFactory {
	private readonly game: Game;
	private readonly scene: Scene;

	constructor(game: Game, scene: Scene) {
		this.game = game;
		this.scene = scene;
	}

	public create(data: AnyCellData): BaseCell {
		switch (data.type) {
			case 'cell':
				return new Cell(data, this.game, this.scene);
			case 'teleporter':
				return new TeleporterCell(data, this.game, this.scene);
		}
	}
}
