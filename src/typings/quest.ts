import { Mine10StonesQuest } from '../game/quests/quests/Mine10StonesQuest.js';

export interface BaseQuestData {
	name: string;
	description: string;
	completed: boolean;
}

export type AnyQuestData = Mine10StonesQuest;
