import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';

export default new DaikSlashCommand<CommandRunArgs, CommandResult, CommandProps>({
	name: 'quests',
	props: {
		ephemeral: false,
	},
	data: new SlashCommandBuilder()
		.setName('quests')
		.setDescription('Display and start quests')
		.toJSON(),
	async run(interaction, client): Promise<CommandResult> {
		await responder.send(interaction, 'QUESTS');

		return {
			success: true,
		};
	},	
});