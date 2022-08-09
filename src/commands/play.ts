import { SlashCommandBuilder } from '@discordjs/builders';
import { DaikSlashCommand } from 'daik';
import { responder } from '#responses';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';
import { game, renders } from '../game/game.js';
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
	run(interaction, client): CommandResult {
		const player = game.addElement(Player, interaction.user.id, '👾');
		const response = responder.create('PLAY', 'Loading...', '');
		interaction.editReply(response);

		const inter = setInterval(async () => {
			const scene = player.getScene();
			
			try {
				await interaction.editReply(responder.create('PLAY', scene.name, renders[0][scene.name]!));
			} catch (e) {
				console.log('terminated');
				clearInterval(inter);
				player.close();
			}
		}, 2500);		

		return {
			success: true,
		};
	},	
});