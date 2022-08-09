import { Game, CellMaterial, Player, Vec2, RenderManager } from '#game';
import mainScene from './scenes/Main.js';
import caveScene from './scenes/Cave.js';
import woodsScene from './scenes/Woods.js';
import darkWoodsScene from './scenes/DarkWoods.js';
import deepCaveScene from './scenes/DeepCave.js';
import cityCentreScene from './scenes/CityCentre.js';

export const game = new Game({
	[CellMaterial.Teleporter]: '🌌',
	[CellMaterial.Grass]: '🟩',
	[CellMaterial.Dirt]: '🟫',
	[CellMaterial.Water]: '🟦',
	[CellMaterial.Pebbles]: '🔳',
	[CellMaterial.Sandstone]: '🟨',
	[CellMaterial.MesaDirt]: '🟧',
	[CellMaterial.Stone]: '⬛',
	[CellMaterial.Lapis]: '🔹',
	[CellMaterial.Pyrite]: '🔸',
	[CellMaterial.SmallStone]: '◼️',
	[CellMaterial.TinyStone]: '◾',
	[CellMaterial.MiniStone]: '▪️',
	[CellMaterial.House1]: '🏠',
	[CellMaterial.House2]: '🏡',
	[CellMaterial.House3]: '🛖',
	[CellMaterial.House4]: '⛺',
	[CellMaterial.House5]: '🕌',
});

mainScene(game);
caveScene(game);
woodsScene(game);
darkWoodsScene(game);
deepCaveScene(game);
cityCentreScene(game);

export const renderManager = new RenderManager(game);

renderManager.setLoopTime(2500);
renderManager.startRenderLoop();

renderManager.on('render', (renders) => {
	for (const key in renders) {
		console.log(key);
		console.log(renders[key]);
		console.log();
	}
});






// import { AnyCellData } from '#game';
// import { readFileSync } from 'node:fs';

// // { height: 0, type: 'teleporter', material: 4, targetPos: { x: , y: }, targetScene: }
// {
// 	const map = readFileSync('./src/game/tmp2.txt', 'utf8');

// 	const lines = map.split('\n').map(line => line.trim());
// 	const height = lines.length;
// 	const width = lines[0]!.length;
// 	const chars = lines.flatMap(line => line.split(' '));

// 	const scene = game.addScene('Temp', width, height);

// 	scene.getGrid().init({
// 		height: 0,
// 		type: 'cell',
// 		material: CellMaterial.Grass,
// 	});

// 	const cells: AnyCellData[] = [];

// 	for (const char of chars) {
// 		cells.push({
// 			height: 0,
// 			type: 'cell',
// 			material: {
// 				'🌌': CellMaterial.Teleporter,
// 				'🟩': CellMaterial.Grass,
// 				'🟫': CellMaterial.Dirt,
// 				'🔳': CellMaterial.Pebbles,
// 				'🟦': CellMaterial.Water,
// 				'🟨': CellMaterial.Sandstone,
// 				'🟧': CellMaterial.MesaDirt,
// 				'⬛': CellMaterial.Stone,
// 				'🔸': CellMaterial.Pyrite,
// 				'🔹': CellMaterial.Lapis,
// 				'◼️': CellMaterial.SmallStone,
// 				'◾': CellMaterial.TinyStone,
// 				'▪️': CellMaterial.MiniStone,
// 				'🏠': CellMaterial.House1,
// 				'🏡': CellMaterial.House2,
// 				'🛖': CellMaterial.House3,
// 				'⛺': CellMaterial.House4,
// 				'🕌': CellMaterial.House5,
// 			}[char]!,
// 		});	
// 	}

// 	console.log(cells);
// }