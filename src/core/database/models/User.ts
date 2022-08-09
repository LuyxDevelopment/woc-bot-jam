import mongoose from 'mongoose';

export interface IUser {
	_id: string;
	xp: number;
	coins: number;
	skin: string;
	inventory: [];
}

export const userSchema = new mongoose.Schema<IUser>({
	_id: mongoose.Schema.Types.String,
	xp: mongoose.Schema.Types.Number,
	coins: mongoose.Schema.Types.Number,
	skin: mongoose.Schema.Types.String,
	inventory: mongoose.Schema.Types.Array,
});

export const User = mongoose.model<IUser>('User', userSchema);