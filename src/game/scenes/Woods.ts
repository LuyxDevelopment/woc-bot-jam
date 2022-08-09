import { Game, Vec2 } from '#game';
import { Tree } from '../anchors/Tree.js';

export default (game: Game): void => {
	const scene = game.addScene('Woods', 10, 9);

	scene.setStartPos(new Vec2(5, 4));
	scene.getGrid().load([
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 10, y: 2 }, targetScene: 'Dark Woods' },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 1 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 2 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'teleporter', material: 4, targetPos: { x: 6, y: 0 }, targetScene: 'Main' },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },        
		{ height: 0, type: 'cell', material: 0 },
	]);

	const trees: Tree[] = [];

	const spawnTrees = (): void => {
		for (let i = 0; i < 5; i++) {
			if (!trees[i]?.exists()) {
				trees[i] = game.addElement(Tree, `tree_woods_${i}`);
				trees[i]!.setScene(scene);
				trees[i]!.setPos(new Vec2(game.rng.uniform_int(0, 10), game.rng.uniform_int(0, 9)));
			}
		}
	};

	setInterval(spawnTrees, 60000);

	spawnTrees();
};
