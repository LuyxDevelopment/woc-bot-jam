import { TextureMap } from '../renderer/TextureMap.js';
import { Player } from '../scene/Player.js';
import { Scene } from '../scene/Scene.js';
import { CellMaterial } from '../typings/cell.js';

export class Game {
	private readonly scenes: Map<string, Scene>;
	private readonly players: Map<string, Player>;
	private readonly textures: TextureMap;

	constructor(textures: Record<CellMaterial, string>) {
		this.scenes = new Map();
		this.players = new Map();
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

	public addPlayer(id: string): Player {
		const player = new Player(id, this, this.getMainScene());

		this.players.set(id, player);

		return player;
	}

	public getPlayer(id: string): Player {
		return this.players.get(id)!;
	}

	public removePlayer(player: Player) {
		this.players.delete(player.id);
	}
}