import { Game, Vec2 } from '#game';

export default (game: Game) => {
	const scene = game.addScene('Main', 10, 6);

	scene.setStartPos(new Vec2(1, 2));
	scene.getGrid().load([
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 6, y: 8 }, targetScene: 'Woods' },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 6, y: 8 }, targetScene: 'Woods' },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 0, y: 0 }, targetScene: 'City Centre' },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 0, y: 0 }, targetScene: 'City Centre' },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'cell', material: 3 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 3, y: 0  }, targetScene: 'Cave' },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 3, y: 0 }, targetScene: 'Cave' },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },
	]);
};
