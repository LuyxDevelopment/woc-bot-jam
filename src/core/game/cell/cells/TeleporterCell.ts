import { Game } from '../../game/Game.js';
import { Scene } from '../../scene/Scene.js';
import { SceneElement } from '../../scene/SceneElement.js';
import { CellMaterial } from '../../typings/cell.js';
import { Vec2, Vec2Data } from '../../vector/Vector2.js';
import { BaseCell, BaseCellData } from '../BaseCell.js';

export interface TeleporterCellData extends BaseCellData {
	targetScene: string;
	targetPos: Vec2Data;
	type: 'teleporter'
}

export class TeleporterCell extends BaseCell {
	protected material = CellMaterial.Teleporter;
	private readonly targetScene: string;
	private readonly targetPosition: Vec2;

	constructor(data: TeleporterCellData, game: Game, scene: Scene) {
		super(data, game, scene);

		this.targetScene = data.targetScene;
		this.targetPosition = new Vec2(data.targetPos.x, data.targetPos.y)
	}

	public onEnter(element: SceneElement) {
		element.setScene(this.game.getScene(this.targetScene));
		element.setPos(this.targetPosition);
	}

	public onLeave() { }
}
