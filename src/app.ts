import { Init } from './Init';
import { Request, Response, NextFunction} from 'express';
Init.registerGetRoute('/', ((req: Request, res: Response, next: NextFunction) => {
	res.send('YO 2!');
}))

Init.listen(5000);