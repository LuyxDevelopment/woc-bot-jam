import { ItemType } from '../../../typings/item.js';
import { NonStackableItemData } from '../NonStackableItem.js';

export interface Armour extends NonStackableItemData {
	type: ItemType.Armour;
	defense: number;
}