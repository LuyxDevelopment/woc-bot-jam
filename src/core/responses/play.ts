import { ResponseOptions } from 'daik/responses';
import { MessageButton, MessageActionRow } from 'discord.js';

export default {
	PLAY: (area: string, grid: string): ResponseOptions => ({
		embeds: [{
			title: area,
			description: grid,
		}],
		components: [
			new MessageActionRow()
				.addComponents([
					new MessageButton()
						.setCustomId('_1')
						.setLabel('⬛')
						.setStyle('SECONDARY')
						.setDisabled(true),
					new MessageButton()
						.setCustomId('up')
						.setLabel('⬆️')
						.setStyle('SUCCESS'),
					new MessageButton()
						.setCustomId('_2')
						.setLabel('⬛')
						.setStyle('SECONDARY')
						.setDisabled(true),
				]),
			new MessageActionRow()
				.addComponents([
					new MessageButton()
						.setCustomId('left')
						.setLabel('⬅️')
						.setStyle('SUCCESS'),
					new MessageButton()
						.setCustomId('down')
						.setLabel('⬇️')
						.setStyle('SUCCESS'),
					new MessageButton()
						.setCustomId('right')
						.setLabel('➡️')
						.setStyle('SUCCESS'),
				]),
		],
	}),
};
