import './dotenv.js';
import { client } from './client.js';
import chalk from 'chalk';
import { game } from './game/game.js';
import { GameElement, Vec2 } from '#game';
import { ButtonInteraction } from 'discord.js';

// Register commands
await client.loadCommandDirectory('./build/commands');

// Login the client
client.login(process.env.DISCORD_BOT_TOKEN);
console.log(chalk.bgCyan.bold('Client started'));

// Start listening for events
client.init();
console.log(chalk.bgCyan.bold('Client listening...'));

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;
	const player = game.getElement(interaction.user.id);

	if (player && player.isPlayer()) {
		switch (interaction.customId) {
			case 'up':
				player.checkedMove(new Vec2(0, -1));

				interaction.deferUpdate();
				break;
			case 'down':
				player.checkedMove(new Vec2(0, 1));

				interaction.deferUpdate();
				break;
			case 'left':
				player.checkedMove(new Vec2(-1, 0));

				interaction.deferUpdate();
				break;
			case 'right':
				player.checkedMove(new Vec2(1, 0));

				interaction.deferUpdate();
				break;
			default: 
				if (interaction.customId.startsWith('gei__')) {
					const [, id, method] = interaction.customId.split('__');
					const element = game.getElement(id!);
					if (!element) {
						interaction.deferUpdate();
						return;
					}

					await interaction.deferReply({ ephemeral: true });

					(element[method as keyof typeof element] as (inter: ButtonInteraction, elem: GameElement) => void)(interaction, player);
				}
				break;
		}
	}
});
