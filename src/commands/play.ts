import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';
import { game, renderManager } from '../game/game.js';
import { Player } from '../core/game/index.js';

export default new DaikSlashCommand<CommandRunArgs, CommandResult, CommandProps>({
	name: 'play',
	props: {
		ephemeral: true,
	},
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play the game')
		.toJSON(),
	async run(interaction, client): Promise<CommandResult> {
		if (game.getElement(interaction.user.id) !== undefined) {
			await responder.send(interaction, 'ALREADY_PLAYING');

			return {
				success: false,
			};
		}

		const player = game.addElement(Player, interaction.user.id, '👾');
		const response = responder.create('PLAY', 'Loading...', '', [], false);
		interaction.editReply(response);

		const onRender = async (renders: Record<string, string>): Promise<void> => {
			if (!player.exists()) {
				terminate();
				return;
			}
			
			const scene = player.getScene();
			
			try {
				await interaction.editReply(responder.create('PLAY', scene.name, renders[scene.name]!, player.getCloseInteractions(), false));
			} catch (e) {
				terminate();
			}
		};

		const terminate = (): void => {
			console.log('terminated');
			renderManager.off('render', onRender);
			player.close();
		};

		renderManager.on('render', onRender);

		return {
			success: true,
		};
	},
});