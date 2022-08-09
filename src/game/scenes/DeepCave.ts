import { Game, Vec2 } from '#game';

export default (game: Game) => {
	const scene = game.addScene('Deep Cave', 6, 5);

	scene.setStartPos(new Vec2(2, 2));
	scene.getGrid().load([
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: Infinity, type: 'cell', material: 12 },       
		{ height: Infinity, type: 'cell', material: 11 },       
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 7, y: 5 }, targetScene: 'Cave' },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: 0, type: 'cell', material: 7 },        
		{ height: Infinity, type: 'cell', material: 11 },       
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: 0, type: 'cell', material: 7 },        
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: Infinity, type: 'cell', material: 11 },       
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: Infinity, type: 'cell', material: 10 },       
		{ height: Infinity, type: 'cell', material: 11 },       
		{ height: Infinity, type: 'cell', material: 12 },       
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },        
		{ height: 0, type: 'cell', material: 7 },
	]);
};
