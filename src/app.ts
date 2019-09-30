import express, { Application, Request, Response, NextFunction, IRouterMatcher } from 'express';
import mongoose, { Document, Schema, Model, connection } from 'mongoose';
import { ITest, testModel } from './Models/WebsiteMetrics';
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
	}
	
	next();

}));
app.use(async (req: Request, res: Response, next: NextFunction) => {

	console.log('last');
	next();
});
app.listen(5000, () => console.log('ok22'));