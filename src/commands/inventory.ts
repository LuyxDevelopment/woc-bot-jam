import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';
import { User } from '../core/database/index.js';

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
		const user = await User.findOrInsert(interaction.user.id);

		await responder.send(interaction, 'INVENTORY', user.inventory);

		return {
			success: true,
		};
	},	
});