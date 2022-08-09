import { ItemType } from '../../typings/item.js';
import { NonStackableItemData } from './NonStackableItem.js';

export interface WeaponData extends NonStackableItemData {
	type: ItemType.MeleeWeapon | ItemType.RangedWeapon;
	damage: number;
}