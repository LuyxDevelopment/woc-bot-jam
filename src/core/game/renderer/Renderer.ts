import { Grid } from '../grid/Grid.js';
import { CellMaterial } from '../typings/cell.js';
import { Vec2 } from '../vector/Vector2.js';
import { Renderable } from './Renderable.js';
import { TextureMap } from './TextureMap.js';

export class Renderer {
	private readonly width: number;
	private readonly height: number;
	private readonly grid: string[];
	private readonly textures: TextureMap;

	constructor(width: number, height: number, textures: TextureMap) {
		this.width = width;
		this.height = height;
		this.grid = new Array(width * height);
		this.textures = textures;
	}

	public render(renderable: Renderable) {
		renderable.render(this);
	}

	public setPixel(loc: Vec2, material: CellMaterial) {
		this.grid[loc.y * this.width + loc.x] = this.textures.get(material);
	}

	public setPixelRaw(loc: Vec2, pixel: string) {
		this.grid[loc.y * this.width + loc.x] = pixel;
	}

	public output(): string {
		let res = '';

		for (let x = 0; x < this.width; x++) {
			for (let y = 0; y < this.height; y++) {
				res += this.grid[y * this.width + x];
			}

			res += '\n';
		}

		return res;
	}

	public clear() {
		this.grid.fill('');
	}
}