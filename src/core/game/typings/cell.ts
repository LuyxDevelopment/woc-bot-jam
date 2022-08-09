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
	House1,
	House2,
	House3,
	House4,
	House5,
}

export type AnyCellData = CellData | TeleporterCellData;
