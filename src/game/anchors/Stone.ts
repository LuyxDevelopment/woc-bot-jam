import { Anchor, Game, GameElement, GameElementInteraction, interaction, Scene } from '#game';
import { Awaitable, ButtonInteraction } from 'discord.js';
import { User } from '#database';
import { responder } from '../../core/responses/index.js';
import { ItemType } from '../../typings/item.js';

export class Stone extends Anchor {
	public static readonly interactions: ((elem: GameElement) => GameElementInteraction)[] = [];

	constructor(game: Game, scene: Scene, id: string) {
		super(game, scene, id, '🪨');
	}

	@interaction(Stone, 'Mine', '🪨')
	public async mine(interaction: ButtonInteraction, other: GameElement): Promise<void> {
		const r = this.game.rng.uniform_int(0, 100, { inclusiveEnd: true });
		const user = await User.findOrInsert(other.id);

		user.addItem({
			type: ItemType.Material,
			name: 'Stone',
			description: 'A stone. Commonly found in caves and mines.',
			texture: '🪨',
			amount: r,
		});

		responder.send(interaction, 'COLLECTED', 'stone', r);

		this.close();
	}

	public getInteractions(): readonly GameElementInteraction[] {
		return Stone.interactions.map((inter) => inter(this));
	}
}