import { BaseCell } from '../cell/BaseCell.js';
import { CellData } from '../cell/cells/Cell.js';
import { AnyCellData, CellFactory } from '../cell/cells/index.js';
import { Game } from '../game/Game.js';
import { Renderable } from '../renderer/Renderable.js';
import { Renderer } from '../renderer/Renderer.js';
import { Scene } from '../scene/Scene.js';
import { Vec2 } from '../vector/Vector2.js';

export class Grid implements Renderable {
	private readonly width: number;
	private readonly height: number;
	private readonly grid: BaseCell[];
	private readonly game: Game;
	private readonly scene: Scene;

	constructor(width: number, height: number, game: Game, scene: Scene) {
		this.width = width;
		this.height = height;
		this.grid = new Array(width * height);
		this.game = game;
		this.scene = scene;
	}

	public init(def: (loc: Vec2) => BaseCell) {
		const loc = Vec2.zero();

		for (loc.y = 0; loc.y < this.height; loc.y++) {
			for (loc.x = 0; loc.x < this.width; loc.x++) {
				this.set(loc, def(loc));
			}
		}
	}

	public load(cells: AnyCellData[]) {
		if (cells.length !== this.grid.length) {
			throw new Error('Grid size mismatch');
		}

		const factory = new CellFactory(this.game, this.scene);

		const loc = Vec2.zero();

		for (loc.y = 0; loc.y < this.height; loc.y++) {
			for (loc.x = 0; loc.x < this.width; loc.x++) {
				const cellData = cells[loc.y * this.width + loc.x]!;

				this.set(loc, factory.create(cellData));
			}
		}
	}

	public get(loc: Vec2): BaseCell {
		return this.grid[loc.y * this.width + loc.x]!;
	}

	public set(loc: Vec2, cell: BaseCell) {
		this.grid[loc.y * this.width + loc.x] = cell;
	}

	public render(renderer: Renderer) {
		const loc = Vec2.zero();

		for (loc.y = 0; loc.y < this.height; loc.y++) {
			for (loc.x = 0; loc.x < this.width; loc.x++) {
				const cell = this.get(loc);

				renderer.setPixel(loc, cell.getMaterial());
			}
		}
	}
}