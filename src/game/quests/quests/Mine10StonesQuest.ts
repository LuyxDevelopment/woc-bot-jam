import { BaseQuestData } from '#typings';
import { Quest } from '../Quest.js';

export interface Mine10StonesQuest extends BaseQuestData {
	name: 'Mine Away';
	description: 'Mine 10 stones in the caves.';
	stonesMined: number;
	completed: boolean;
}

export const mine10StonesQuest: Quest<Mine10StonesQuest> = {
	createQuestData(): Mine10StonesQuest {
		return {
			name: 'Mine Away',
			description: 'Mine 10 stones in the caves.',
			stonesMined: 0,
			completed: false,
		};
	},
};