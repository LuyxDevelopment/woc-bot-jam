import { Awaitable } from 'discord.js';
import { TypedEmitter } from 'tiny-typed-emitter';
import { Game } from '../game/Game.js';

export class RenderManager extends TypedEmitter<{
	'render': (renders: Record<string, string>) => Awaitable<void>;
}> {
	private readonly game: Game;
	private loopTime = 1000;
	private loop?: NodeJS.Timer;

	constructor(game: Game) {
		super();

		this.game = game;
	}

	public setLoopTime(interval: number): void {
		this.loopTime = interval;
	}

	public startRenderLoop(): void {
		this.loop = setInterval(() => {
			const renders = this.game.renderAll();

			this.emit('render', renders);
		} , this.loopTime);
	}

	public stopRenderLoop(): void {
		clearInterval(this.loop);
	}
}
