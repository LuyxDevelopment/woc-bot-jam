import { ItemType } from '../../typings/item.js';
import { BaseItemData } from './BaseItem.js';

export interface NonStackableItemData extends BaseItemData {
	type: ItemType.Armour | ItemType.MeleeWeapon | ItemType.RangedWeapon;
}