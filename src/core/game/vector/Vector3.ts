import { Vec2 } from './Vector2.js';

export interface Vec3Data {
	x: number;
	y: number;
	z: number;
}

export class Vec3 {
	public x: number;
	public y: number;
	public z: number;

	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public static zero(): Vec3 {
		return new Vec3(0, 0, 0);
	}

	public add(other: Vec3): Vec3 {
		return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
	}

	public subtract(other: Vec3): Vec3 {
		return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
	}

	public multiply(other: Vec3): Vec3 {
		return new Vec3(this.x * other.x, this.y * other.y, this.z * other.z);
	}

	public divide(other: Vec3): Vec3 {
		return new Vec3(this.x / other.x, this.y / other.y, this.z / other.z);
	}

	public toVec2(): Vec2 {
		return new Vec2(this.x, this.y);
	}

	public equals(other: Vec3): boolean {
		return this.x === other.x && this.y === other.y && this.z === other.z;
	}

	public get data(): Vec3Data {
		return {
			x: this.x,
			y: this.y,
			z: this.z,
		}
	}

	public clone(): Vec3 {
		return new Vec3(this.x, this.y, this.z);
	}
}