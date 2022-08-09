import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';

export default new DaikSlashCommand<CommandRunArgs, CommandResult, CommandProps>({
	name: 'inventory',
	props: {
		ephemeral: false,
	},
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('Shows your inventory')
		.toJSON(),
	async run(interaction, client): Promise<CommandResult> {
		await responder.send(interaction, 'INVENTORY');

		return {
			success: true,
		};
	},	
});