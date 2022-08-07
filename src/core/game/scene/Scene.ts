import { Game } from '../game/Game.js';
import { Grid } from '../grid/Grid.js';
import { Renderer } from '../renderer/Renderer.js';
import { TextureMap } from '../renderer/TextureMap.js';
import { CellMaterial } from '../typings/cell.js';
import { SceneElement } from './SceneElement.js';

export class Scene {
	public readonly name: string;
	private readonly grid: Grid;
	private readonly elements: SceneElement[];
	private readonly textures: TextureMap;
	private readonly renderer: Renderer;
	private readonly game: Game;

	constructor(name: string, width: number, height: number, textures: TextureMap, game: Game) {
		this.name = name;
		this.grid = new Grid(width, height, game, this);
		this.elements = [];
		this.textures = textures.clone();
		this.renderer = new Renderer(width, height, this.textures);
		this.game = game;
	}

	public addElement(element: SceneElement) {
		this.elements.push(element);
	}

	public removeElement(element: SceneElement) {
		const i = this.elements.indexOf(element);

		if (i !== -1) {
			this.elements.splice(i, 1);
		}
	}

	public getGrid(): Grid {
		return this.grid;
	}

	public getPlayers(): readonly SceneElement[] {
		return this.elements;
	}

	public render(): string {
		this.renderer.clear();

		this.renderer.render(this.grid);
		for (let element of this.elements) this.renderer.render(element);

		return this.renderer.output();
	}
}