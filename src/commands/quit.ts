import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';
import { game } from '../game/game.js';

export default new DaikSlashCommand<CommandRunArgs, CommandResult, CommandProps>({
	name: 'quit',
	props: {
		ephemeral: true,
	},
	data: new SlashCommandBuilder()
		.setName('quit')
		.setDescription('Quit the game')
		.toJSON(),
	async run(interaction, client): Promise<CommandResult> {
		const player = game.getElement(interaction.user.id);

		if (!player) {
			await responder.send(interaction, 'NOT_PLAYING');

			return {
				success: false,
			};
		}

		player.close();
		await responder.send(interaction, 'QUIT');

		return {
			success: true,
		};
	},
});