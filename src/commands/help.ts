import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';

export default new DaikSlashCommand<CommandRunArgs, CommandResult, CommandProps>({
	name: 'help',
	props: {
		ephemeral: true,
	},
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays help for a command')
		.toJSON(),
	async run(interaction, client): Promise<CommandResult> {
		await responder.send(interaction, 'HELP');

		

		return {
			success: true,
		};
	},	
});