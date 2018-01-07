import {setUTF8} from 'server/middleware/SetContentType';
import {GetMusicListService} from 'server/service';

class GetMusicListController {
   constructor(req, res, next) {
      this.req = req;
      this.res = res;
      this.next = next;
   }

   create() {
      let getMusicListService = new GetMusicListService('./music');
      let lists = getMusicListService.get();
      this.res.header('Content-Type', 'application/json;charset=utf8');
      this.res.json(lists);
      this.res.end();
   }
}

export default GetMusicListController;