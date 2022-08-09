import { Vec2Data } from '../vector/Vec2.js';
import { AnyCellData } from './cell.js';

export interface SceneData {
	name: string;
	width: number;
	height: number;
	startPos: Vec2Data;
	cells: AnyCellData[];
}