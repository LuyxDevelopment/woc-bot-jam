import { ItemType } from '../../../typings/item.js';
import { StackableItemData } from '../StackableItem.js';

export interface Material extends StackableItemData {
	type: ItemType.Material;
}