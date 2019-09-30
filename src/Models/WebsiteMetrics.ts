
import mongoose, { Document, Schema, Model, model } from 'mongoose';


export interface ITest extends Document {
	_id: String,
	test: String
}
export const testSchema: Schema = new Schema({
	_id: { type: String, required: true},
	test: { type: String, required: true }
});
export const testModel =  model<ITest>('tests', testSchema);