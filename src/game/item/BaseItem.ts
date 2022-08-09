import { ItemType } from '../../typings/item.js';

export interface BaseItemData {
	type: ItemType;
	name: string;
	texture: string;
	description: string;
}