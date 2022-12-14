import { TextureMap } from '../renderer/TextureMap.js';
import { Scene } from './scene/Scene.js';
import { CellMaterial } from '../typings/cell.js';
import { GameElement } from './scene/scene_element/GameElement.js';
import { RandomEngine } from 'better-random.js';

type ExtractGameElementLastArgs<GE extends typeof GameElement> = GE extends { new(game: Game, scene: Scene, ...args: infer T): GE['prototype'] } ? T : never;

export class Game {
	public readonly rng: RandomEngine = new RandomEngine();
	private readonly scenes: Map<string, Scene>;
	private readonly elements: Map<string, GameElement>;
	private readonly textures: TextureMap;

	constructor(textures: Record<CellMaterial, string>) {
		this.scenes = new Map();
		this.elements = new Map();
		this.textures = new TextureMap(textures);
	}

	public getMainScene(): Scene {
		return this.scenes.get('Main')!;
	}

	public addScene(name: string, width: number, height: number): Scene {
		const scene = new Scene(name, width, height, this.textures, this);

		this.scenes.set(name, scene);

		return scene;
	}

	public getScene(name: string): Scene {
		return this.scenes.get(name)!;
	}

	public addElement<GE extends typeof GameElement, Args extends ExtractGameElementLastArgs<GE>>(Element: GE, ...args: Args): GE['prototype'] {
		const mainScene = this.getMainScene();
		const element = new (Element as unknown as { new(game: Game, scene: Scene, ...args: Args): GE['prototype'] })(this, mainScene, ...args);

		this.elements.set(element.id, element);
		element.setScene(mainScene);

		return element;
	}

	public getElement(id: string): GameElement {
		return this.elements.get(id)!;
	}

	public removeElement(element: GameElement): void {
		this.elements.delete(element.id);
	}

	public renderAll(): Record<string, string> {
		const res: Record<string, string> = {};

		for (const scene of this.scenes.values()) {
			res[scene.name] = scene.render();
		}

		return res;
	}
}
