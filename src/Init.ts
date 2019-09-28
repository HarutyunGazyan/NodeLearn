import express, { Application, Request, Response, NextFunction, IRouterMatcher } from 'express';
const app: Application = express();

export class Init {
	static app: Application = app;
	static arrayOfGetRoutes: [string, (req: Request, res: Response, next: NextFunction) => void][]=[];
	static saveGetRoute(route: string, func: (req: Request, res: Response, next: NextFunction) => void) {
		Init.arrayOfGetRoutes.push([route, func]);
	}
	static run(port: number) {
		Init.arrayOfGetRoutes.forEach((val) => {
			app.get(val[0], val[1]);
		});
		app.listen(port, ()=>console.log('ok'));
	}
}
