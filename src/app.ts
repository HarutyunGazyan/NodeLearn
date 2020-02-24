import express, { Application, Request, Response, NextFunction, IRouterMatcher } from 'express';
import mongoose, { Document, Schema, Model, connection } from 'mongoose';
import { ITest, testModel } from './Models/WebsiteMetrics';
import { IInterface, IInterface2} from './Models/Interfaces';
const app: Application = express();
app.use(async(req: Request, res: Response, next: NextFunction) => {

	await mongoose.connect('mongodb://localhost:27017/Node', { useNewUrlParser: true, useUnifiedTopology: true });

	console.log('first');
	next();
});

app.get('/', (async (req: Request, res: Response, next: NextFunction) => {

	const t = new testModel({ test: 'JohnDoe', _id: 'owswsk2' });
	let ttt: ITest[];
	try {
		await t.save();
		ttt = await testModel.find();
		console.log(ttt);

		res.json(ttt);
	}
	catch (ex) {
		ttt = await testModel.find();
		console.log(ttt);

		res.json(ttt);
	}finally{
			console.log("Barev");
	}
	interface IBaseInterface {
		foo: string,
	}
	const testVariable: IBaseInterface = {foo: "3"}
	const testVariable2 = (b: IBaseInterface & {bar: string}) => b.bar;
	next();

}));
app.use(async (req: Request, res: Response, next: NextFunction) => {

	console.log('last');
	next();
});
	class Test implements IInterface2{
		public property:string="";
	}