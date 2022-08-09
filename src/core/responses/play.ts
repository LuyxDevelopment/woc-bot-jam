import { ResponseOptions } from 'daik/responses';
import { MessageButton, MessageActionRow } from 'discord.js';
import { GameElementInteraction } from '../game/index.js';

export default {
	PLAY: (area: string, grid: string, interactions: readonly GameElementInteraction[], disableMovement: boolean): ResponseOptions => {
		const response = {
			embeds: [{
				title: area,
				description: grid,
			}],
			components: [
				new MessageActionRow()
					.addComponents([
						new MessageButton()
							.setCustomId('_1')
							.setLabel('\u200b')
							.setStyle('SECONDARY')
							.setDisabled(true),
						new MessageButton()
							.setCustomId('up')
							.setEmoji('⬆️')
							.setStyle('SUCCESS')
							.setDisabled(disableMovement),
						new MessageButton()
							.setCustomId('_2')
							.setLabel('\u200b')
							.setStyle('SECONDARY')
							.setDisabled(true),
					]),
				new MessageActionRow()
					.addComponents([
						new MessageButton()
							.setCustomId('left')
							.setEmoji('⬅️')
							.setStyle('SUCCESS')
							.setDisabled(disableMovement),
						new MessageButton()
							.setCustomId('down')
							.setEmoji('⬇️')
							.setStyle('SUCCESS')
							.setDisabled(disableMovement),
						new MessageButton()
							.setCustomId('right')
							.setEmoji('➡️')
							.setStyle('SUCCESS')
							.setDisabled(disableMovement),
					]),
			],
		};

		if (interactions.length > 0) {
			response.components.push(new MessageActionRow().addComponents(interactions.map((interaction) => 
				new MessageButton()
					.setCustomId(interaction.customId)
					.setLabel(interaction.label)
					.setStyle('PRIMARY')
					.setEmoji(interaction.emoji),
			)));
		}

		return response;
	},
	ALREADY_PLAYING: (): ResponseOptions => ({
		embeds: [{
			title: 'Already playing',
			description: 'You are already playing a game, use /quit to leave it.',
		}],
	}),
	QUIT: (): ResponseOptions => ({
		embeds: [{
			title: 'Quit',
			description: 'You have quit the game.',
		}],
	}),
	NOT_PLAYING: (): ResponseOptions => ({
		embeds: [{
			title: 'Not playing',
			description: 'You are not playing a game, use /play to start one.',
		}],
	}),
};
