import { Armour as ArmourData, Consumable as ConsumableData, Material as MaterialData, MeleeWeapon as MeleeWeaponData, RangedWeapon as RangedWeaponData } from '../game/item/items/index.js';

export enum ItemType {
	MeleeWeapon,
	RangedWeapon,
	Armour,
	Consumable,
	Material,
}

export type AnyItemData = MeleeWeaponData | RangedWeaponData | ArmourData | ConsumableData | MaterialData;
