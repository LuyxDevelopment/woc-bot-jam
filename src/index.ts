import './dotenv.js';
import { client } from './client.js';
import chalk from 'chalk';
import { game } from './game/game.js';
import { Vec2 } from '#game';

// Register commands
await client.loadCommandDirectory('./build/commands');

// Login the client
client.login(process.env.DISCORD_BOT_TOKEN);
console.log(chalk.bgCyan.bold('Client started'));

// Start listening for events
client.init();
console.log(chalk.bgCyan.bold('Client listening...'));

client.on('interactionCreate', (interaction) => {
	if (!interaction.isButton()) return;
	const player = game.getElement(interaction.user.id);

	if (player && player.isPlayer()) {
		switch (interaction.customId) {
			case 'up':
				player.checkedMove(new Vec2(0, -1));
				break;
			case 'down':
				player.checkedMove(new Vec2(0, 1));
				break;
			case 'left':
				player.checkedMove(new Vec2(-1, 0));
				break;
			case 'right':
				player.checkedMove(new Vec2(1, 0));
				break;
		}
	}

	interaction.deferUpdate();
});
