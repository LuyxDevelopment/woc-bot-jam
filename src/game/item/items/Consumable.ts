import { ItemType } from '../../../typings/item.js';
import { StackableItemData } from '../StackableItem.js';

export interface Consumable extends StackableItemData {
	type: ItemType.Consumable;
}