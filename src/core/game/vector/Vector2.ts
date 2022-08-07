import { Vec3 } from './Vector3.js';

export interface Vec2Data {
	x: number;
	y: number;
}

export class Vec2 {
	public x: number;
	public y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public static zero(): Vec2 {
		return new Vec2(0, 0);
	}

	public add(other: Vec2): Vec2 {
		return new Vec2(this.x + other.x, this.y + other.y);
	}

	public subtract(other: Vec2): Vec2 {
		return new Vec2(this.x - other.x, this.y - other.y);
	}

	public multiply(other: Vec2): Vec2 {
		return new Vec2(this.x * other.x, this.y * other.y);
	}

	public divide(other: Vec2): Vec2 {
		return new Vec2(this.x / other.x, this.y / other.y);
	}

	public toVec3(): Vec3 {
		return new Vec3(this.x, this.y, 0);
	}

	public equals(other: Vec2): boolean {
		return this.x === other.x && this.y === other.y;
	}

	public get data(): Vec2Data {
		return {
			x: this.x,
			y: this.y,
		}
	}

	public clone(): Vec2 {
		return new Vec2(this.x, this.y);
	}
}