import { Init } from './Init';
import { Request, Response, NextFunction} from 'express';
Init.saveGetRoute('/', ((req: Request, res: Response, next: NextFunction) => {
	res.send('YO 2!');
}))

Init.run(5000);