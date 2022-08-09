import { BaseCell } from '../cell/BaseCell.js';
import { Game } from '../game/Game.js';
import { Renderable } from '../renderer/Renderable.js';
import { Renderer } from '../renderer/Renderer.js';
import { Scene } from '../game/scene/Scene.js';
import { Vec2 } from '../vector/Vec2.js';
import { AnyCellData } from '../typings/cell.js';
import { CellFactory } from '../cell/CellFactory.js';

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

	public getHeight(): number {
		return this.height;
	}

	public getWidth(): number {
		return this.width;
	}

	public inBounds(loc: Vec2): boolean {
		return loc.x >= 0 && loc.x < this.width && loc.y >= 0 && loc.y < this.height;
	}

	public init(def: AnyCellData): void {
		const factory = new CellFactory(this.game, this.scene);
		const loc = Vec2.zero();

		for (loc.y = 0; loc.y < this.height; loc.y++) {
			for (loc.x = 0; loc.x < this.width; loc.x++) {
				this.set(loc, factory.create(def));
			}
		}
	}

	public load(cells: AnyCellData[]): void {
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

	public set(loc: Vec2, cell: BaseCell): void {
		this.grid[loc.y * this.width + loc.x] = cell;
	}

	public render(renderer: Renderer): void {
		const loc = Vec2.zero();

		for (loc.y = 0; loc.y < this.height; loc.y++) {
			for (loc.x = 0; loc.x < this.width; loc.x++) {
				const cell = this.get(loc);

				renderer.setPixel(loc, cell.getMaterial());
			}
		}
	}

	public get data(): AnyCellData[] {
		const cells: AnyCellData[] = [];

		const loc = Vec2.zero();

		for (loc.y = 0; loc.y < this.height; loc.y++) {
			for (loc.x = 0; loc.x < this.width; loc.x++) {
				const cell = this.get(loc);

				cells.push(cell.data);
			}
		}

		return cells;
	}
}