import { Renderer } from './Renderer.js';

export abstract class Renderable {
	public abstract render(renderer: Renderer): void;
}