import { ItemType } from '../../typings/item.js';
import { BaseItemData } from './BaseItem.js';

export interface StackableItemData extends BaseItemData {
	type: ItemType.Consumable | ItemType.Material;
	amount: number;
}