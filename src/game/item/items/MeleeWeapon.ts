import { ItemType } from '../../../typings/item.js';
import { WeaponData } from '../Weapon.js';

export interface MeleeWeapon extends WeaponData {
	type: ItemType.MeleeWeapon;
}