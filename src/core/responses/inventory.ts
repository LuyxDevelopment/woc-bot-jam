import { ResponseOptions } from 'daik/responses';
import { AnyItemData } from '#typings';
import { pages } from '../../util/util.js';

export default {
	INVENTORY: (inventory: AnyItemData[]): ResponseOptions => {
		const response = {
			embeds: [{
				title: 'Inventory',
				description: inventory.map(item => {
					if ('amount' in item) {
						return `${item.amount}x ${item.texture} **${item.name}**`;
					} 

					return `1x ${item.texture} **${item.name}**`;
				}).join('\n'),
			}],
		};

		// const pages = pages(inventory, 25, )

		return response;
	},
	COLLECTED: (item: string, amount: number): ResponseOptions => ({
		content: `Collected ${item} x${amount}`,
	}),
};
