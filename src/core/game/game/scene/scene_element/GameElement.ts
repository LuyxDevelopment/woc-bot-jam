import { Game } from '../../Game.js';
import { Renderable } from '../../../renderer/Renderable.js';
import { Renderer } from '../../../renderer/Renderer.js';
import { Vec2 } from '../../../vector/Vector2.js';
import { Vec3 } from '../../../vector/Vector3.js';
import { Scene } from '../Scene.js';
import { Pawn } from './Pawn.js';
import { NPC } from './NPC.js';
import { Player } from './Player.js';

export abstract class GameElement implements Renderable {
	public readonly id: string;
	private texture: string;
	protected pos: Vec2;
	protected readonly game: Game;
	protected scene: Scene;

	constructor(game: Game, scene: Scene, id: string, texture: string) {
		this.id = id;
		this.texture = texture;
		this.pos = Vec2.zero();
		this.game = game;
		this.scene = scene;
	}

	public getTexture(): string {
		return this.texture;
	}

	public setTexture(texture: string): void {
		this.texture = texture;
	}

	public getGame(): Game {
		return this.game;
	}

	public getScene(): Scene {
		return this.scene;
	}

	public setScene(scene: Scene): void {
		this.scene.removeElement(this);

		this.scene = scene;

		this.scene.addElement(this);
	}

	public getPos(): Vec3 {
		return new Vec3(this.pos.x, this.pos.y, this.scene.getGrid().get(this.pos).getHeight());
	}

	public setPos(pos: Vec2): void {
		this.pos = pos.clone();
	}

	public close(): void {
		this.scene.removeElement(this);
	}

	public isPawn(): this is Pawn { return false; }
	public isNPC(): this is NPC { return false; }
	public isPlayer(): this is Player { return false; }

	public render(renderer: Renderer): void {
		renderer.setPixelRaw(this.pos, this.texture);
	}
}