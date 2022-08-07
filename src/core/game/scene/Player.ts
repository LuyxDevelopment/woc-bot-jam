import { Game } from '../game/Game.js';
import { Renderer } from '../renderer/Renderer.js';
import { Scene } from './Scene.js';
import { SceneElement } from './SceneElement.js';

export class Player extends SceneElement {
	public readonly id: string;
	private readonly skin: string = '👾';

	constructor(id: string, game: Game, scene: Scene) {
		super(game, scene);

		this.id = id;
	}

	public close() {
		super.close();

		this.game.removePlayer(this);
	}

	public render(renderer: Renderer) {
		renderer.setPixelRaw(this.pos, this.skin);
	}
}