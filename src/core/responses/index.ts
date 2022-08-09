import { Responder } from 'daik/responses';
import help from './help.js';
import inventory from './inventory.js';
import play from './play.js';
import quests from './quests.js';

export const responses = {
	...help,
	...inventory,
	...play,
	...quests,
};

export const responder = new Responder(responses);
