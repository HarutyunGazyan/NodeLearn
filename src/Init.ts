import express, { Application, Request, Response, NextFunction, IRouterMatcher } from 'express';
const app: Application = express();

export class Init {
	static app: Application = app;
	static registerGetRoute(route: string, func: (req: Request, res: Response, next: NextFunction) => void) {
		app.get(route, func);
	}
	static listen(port: number) {
		app.listen(port, ()=>console.log('ok'));
	}
}
