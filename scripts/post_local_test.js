import { Routes } from 'discord-api-types/v9';
import { REST } from '@discordjs/rest';
import { config } from 'dotenv';
import { DaikBlankPlugin } from 'daik/plugins';
import { DaikClient } from 'daik';
config();

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

const client = new DaikClient({
	intents: [],
	createDefaultArgs() { },
});

client.registerPlugin(new DaikBlankPlugin());

await client.loadCommandDirectory('./build/commands');

try {
	console.log('Started updating commands locally');

	await rest.put(
		Routes.applicationGuildCommands('1006232602182684672', '990983082276438137'),
		{
			body: client.getAllCommandData(),
		},
	);

	console.log('Finished updating commands locally');
} catch (err) {
	console.log('Failed to update commands locally');
}