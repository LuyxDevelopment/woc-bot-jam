import { DaikCommandProps, DaikCommandRunArgs, DaikCommandResult } from 'daik';
import { DaikAutoDeferPluginCommandProps } from 'daik/plugins';

export type CommandResult = DaikCommandResult;

export type CommandRunArgs = DaikCommandRunArgs;

export interface CommandProps extends DaikCommandProps, DaikAutoDeferPluginCommandProps {

}

