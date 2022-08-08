import { Game } from '../Game.js';
import { Grid } from '../../grid/Grid.js';
import { Renderer } from '../../renderer/Renderer.js';
import { TextureMap } from '../../renderer/TextureMap.js';
import { Vec2 } from '../../vector/Vector2.js';
import { Vec3 } from '../../vector/Vector3.js';
import { GameElement } from './scene_element/GameElement.js';

export class Scene {
	public readonly name: string;
	private startPos: Vec2;
	private readonly grid: Grid;
	private readonly elements: GameElement[];
	private readonly textures: TextureMap;
	private readonly renderer: Renderer;
	private readonly game: Game;

	constructor(name: string, width: number, height: number, textures: TextureMap, game: Game) {
		this.name = name;
		this.startPos = Vec2.zero();
		this.grid = new Grid(width, height, game, this);
		this.elements = [];
		this.textures = textures.clone();
		this.renderer = new Renderer(width, height, this.textures);
		this.game = game;
	}

	public addElement(element: GameElement): void {
		this.elements.push(element);
	}

	public removeElement(element: GameElement): void {
		const i = this.elements.indexOf(element);

		if (i !== -1) {
			this.elements.splice(i, 1);
		}
	}

	public getStartPos(): Vec3 {
		return new Vec3(this.startPos.x, this.startPos.y, this.grid.get(this.startPos).getHeight());
	}

	public setStartPos(pos: Vec2): void {
		this.startPos = pos.clone();
	}

	public getGrid(): Grid {
		return this.grid;
	}

	public getElements(): readonly GameElement[] {
		return this.elements;
	}

	public render(): string {
		this.renderer.clear();

		this.renderer.render(this.grid);
		for (const element of this.elements) {
			this.renderer.render(element);
		}

		return this.renderer.output();
	}
}