import { BaseQuestData } from '../../typings/quest.js';

export interface Quest<QD extends BaseQuestData> {
	createQuestData(): QD;
}