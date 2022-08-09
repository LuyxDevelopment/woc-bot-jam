import { Game } from '../game/Game.js';
import { Scene } from '../game/scene/Scene.js';
import { AnyCellData } from '../typings/cell.js';
import { BaseCell } from './BaseCell.js';
import { Cell } from './cells/Cell.js';
import { TeleporterCell } from './cells/TeleporterCell.js';

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
