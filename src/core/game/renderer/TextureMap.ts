import { CellMaterial } from '../typings/cell.js';

export class TextureMap {
	private readonly baseTextures: Record<CellMaterial, string>;
	private readonly overrides: Partial<Record<CellMaterial, string>>;

	constructor(textures: Record<CellMaterial, string>, overrides = {}) {
		this.baseTextures = textures;
		this.overrides = overrides;
	}

	public get(material: CellMaterial): string {
		return this.overrides[material] ?? this.baseTextures[material];
	}

	public set(material: CellMaterial, texture: string): void {
		this.baseTextures[material] = texture;
	}

	public setOverride(material: CellMaterial, texture: string): void {
		this.overrides[material] = texture;
	}

	public clone(): TextureMap {
		return new TextureMap(this.baseTextures, { ...this.overrides });
	}
}