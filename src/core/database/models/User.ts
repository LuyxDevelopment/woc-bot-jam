import mongoose from 'mongoose';
import { StackableItemData } from '../../../game/item/StackableItem.js';
import { AnyItemData } from '../../../typings/item.js';
import { BaseQuestData } from '../../../typings/quest.js';

export interface IUser {
	_id?: string;
	xp: number;
	coins: number;
	skin: string;
	inventory: AnyItemData[];
	quest: BaseQuestData[];
}

export interface IUserDocument extends IUser, mongoose.Document<string> {
	addItem(item: AnyItemData): void;
}

export interface IUserModel extends mongoose.Model<IUserDocument> {
	findOrInsert(id: string): Promise<IUserDocument>;
}

export const userSchema = new mongoose.Schema<IUser>({
	_id: mongoose.Schema.Types.String,
	xp: mongoose.Schema.Types.Number,
	coins: mongoose.Schema.Types.Number,
	skin: mongoose.Schema.Types.String,
	inventory: mongoose.Schema.Types.Array,
	quest: mongoose.Schema.Types.Array,
}, {
	methods: {
		async addItem(item: AnyItemData): Promise<void> {
			if ('amount' in item) {
				const inventoryItem = this.inventory.findIndex(i => i.name === item.name);
				
				if (inventoryItem > -1) {
					this.inventory[inventoryItem] = {
						type: item.type,
						name: item.name,
						description: item.description,
						texture: item.texture,
						amount: (this.inventory[inventoryItem] as StackableItemData).amount + item.amount,
					};
				} else {
					this.inventory.push(item);
				}
			} else {
				this.inventory.push(item);
			}

			await this.save();
		},
	},
	statics: {
		async findOrInsert(id: string): Promise<IUserDocument> {
			let user = await User.findById(id);

			if (!user) {
				user = new User({
					_id: id,
					xp: 0,
					coins: 0,
					skin: '👾',
					inventory: [],
					quest: [],
				});

				await user.save();
			}

			return user;
		},
	},
});

export const User = mongoose.model<IUserDocument, IUserModel>('User', userSchema);
