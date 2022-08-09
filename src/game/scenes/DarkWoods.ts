import { Game, Vec2 } from '#game';

export default (game: Game): void => {
	const scene = game.addScene('Dark Woods', 11, 6);

	scene.setStartPos(new Vec2(4, 3));
	scene.getGrid().load([
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 0, y: 3 }, targetScene: 'Woods' },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },
	]);
};
