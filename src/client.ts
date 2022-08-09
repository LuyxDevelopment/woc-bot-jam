import { DaikClient, DaikPluginGroup } from 'daik';
import { DaikErrorLogPlugin, DaikAutoDeferPlugin, DaikRunAsDevPlugin } from 'daik/plugins';
import { CommandProps, CommandResult, CommandRunArgs } from '#typings';

// Create the client
export const client = new DaikClient<CommandRunArgs, CommandResult, CommandProps>({
	intents: ['GUILD_MEMBERS'],
	createDefaultArgs(): CommandRunArgs {
		return {
			allowedToRun: true,
			runAsAdmin: false,
			runAsDev: false,
		};
	},
});

// Register plugins
const plugins = new DaikPluginGroup<CommandRunArgs, CommandResult, CommandProps>(client);

plugins.registerPlugin(new DaikErrorLogPlugin(client));
plugins.registerPlugin(new DaikAutoDeferPlugin(client));
plugins.registerPlugin(new DaikRunAsDevPlugin(client, ['480721662149656576']));

client.registerPlugin(plugins);
