import { Game } from '../../Game.js';
import { Renderable } from '../../../renderer/Renderable.js';
import { Renderer } from '../../../renderer/Renderer.js';
import { Vec2 } from '../../../vector/Vec2.js';
import { Vec3 } from '../../../vector/Vec3.js';
import { Scene } from '../Scene.js';
import { Pawn } from './Pawn.js';
import { NPC } from './NPC.js';
import { Player } from './Player.js';
import { Anchor } from './Anchor.js';
import { Awaitable } from 'discord.js';
import { GameElementInteraction } from './decorators/interaction.js';

export abstract class GameElement implements Renderable {
	public readonly id: string;
	private texture: string;
	protected pos: Vec2;
	protected readonly game: Game;
	protected scene: Scene;
	private existsInGame = true;
	public static readonly interactions: ((elem: GameElement) => GameElementInteraction)[] = [];

	constructor(game: Game, scene: Scene, id: string, texture: string) {
		this.id = id;
		this.texture = texture;
		this.pos = Vec2.zero();
		this.game = game;
		this.scene = scene;
	}

	public abstract getInteractions(): readonly GameElementInteraction[];

	public getCloseInteractions(): readonly GameElementInteraction[] {
		const interactions: GameElementInteraction[] = [];
		
		for (const element of this.scene.getElements()) {
			const dif = element.getPos().difference(this.getPos());

			if (dif.x <= 1 && dif.y <= 1) {
				interactions.push(...element.getInteractions());
			}
		}

		return interactions;
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

		this.setPos(this.scene.getStartPos().toVec2());
	}

	public getPos(): Vec3 {
		return new Vec3(this.pos.x, this.pos.y, this.scene.getGrid().get(this.pos).getHeight());
	}

	public setPos(pos: Vec2): void {
		this.pos = pos.clone();
	}

	public close(): void {
		this.game.removeElement(this);
		this.scene.removeElement(this);
		this.existsInGame = false;
	}

	public exists(): boolean {
		return this.existsInGame;
	}

	public isAnchor(): this is Anchor { return false; }
	public isPawn(): this is Pawn { return false; }
	public isNPC(): this is NPC { return false; }
	public isPlayer(): this is Player { return false; }

	public render(renderer: Renderer): void {
		renderer.setPixelRaw(this.pos, this.texture);
	}
}
