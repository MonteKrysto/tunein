import { Document, Schema, Model, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt-nodejs";

export type StatModel = Document & {
	id: number;
	station: string;
	duration: number;
	tagUsed?: string | null;
	user: IUser;
	date: string;
};
export const statSchema: Schema = new Schema(
	{
		station: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		tagUsed: {
			type: String,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
		toObject: {
			transform: function (doc, ret, options) {
				console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			},
		},
	}
);

export const Stat: Model<StatModel> = model<StatModel>("Stat", statSchema);
