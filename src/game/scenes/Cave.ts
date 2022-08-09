import { Game, Vec2 } from '#game';
import { Stone } from '../anchors/Stone.js';

export default (game: Game): void => {
	const scene = game.addScene('Cave', 8, 8);

	scene.setStartPos(new Vec2(3, 3));
	scene.getGrid().load([
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 5, y: 5 }, targetScene: 'Main' },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 9 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 8 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 8 },        
		{ height: 0, type: 'cell', material: 8 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 0, y: 1 }, targetScene: 'Deep Cave' },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 9 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 9 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 9 },
	]);

	const stones: Stone[] = [];

	const spawnStones = (): void => {
		for (let i = 0; i < 3; i++) {
			if (!stones[i]?.exists()) {
				stones[i] = game.addElement(Stone, `stone_cave_${i}`);
				stones[i]!.setScene(scene);
			}
		}
		
		stones[0]!.setPos(new Vec2(1, 1));
		stones[1]!.setPos(new Vec2(5, 2));
		stones[2]!.setPos(new Vec2(3, 6));
	};

	setInterval(spawnStones, 60000);

	spawnStones();
};
