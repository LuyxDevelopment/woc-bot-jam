export enum ItemType {
	MeleeWeapon,
	RangedWeapon,
	Armor,
	Consumable,
	Material,
}

export interface MeleeWeapon {
	type: ItemType.MeleeWeapon;
	name: string;
}

export interface RangedWeapon {
	type: ItemType.RangedWeapon;
	name: string;
}

export interface Armor {
	type: ItemType.Armor;
	name: string;
}

export interface Consumable {
	type: ItemType.Consumable;
	name: string;
}

export interface Material {
	type: ItemType.Material;
	name: string;
}

export type AnyItem = MeleeWeapon | RangedWeapon | Armor | Consumable | Material;