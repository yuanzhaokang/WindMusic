import {GetMusicListController} from 'server/controller';
import {Router} from 'express';

let router = Router();

router.all('/', (req, res, next) => {
   let getMusicListController = new GetMusicListController(req, res, next);
   getMusicListController.create();
});

export default router;