import { CellData } from '../cell/cells/Cell.js';
import { TeleporterCellData } from '../cell/cells/TeleporterCell.js';

export enum CellMaterial {
	Grass,
	Pebbles,
	Dirt,
	Water,
	Teleporter,
	Sandstone,
	MesaDirt,
	Stone,
	Lapis,
	Pyrite,
	SmallStone,
	TinyStone,
	MiniStone,
}

export type AnyCellData = CellData | TeleporterCellData;
