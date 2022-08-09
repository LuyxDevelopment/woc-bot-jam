import { ItemType } from '../../../typings/item.js';
import { WeaponData } from '../Weapon.js';

export interface RangedWeapon extends WeaponData {
	type: ItemType.RangedWeapon;
}