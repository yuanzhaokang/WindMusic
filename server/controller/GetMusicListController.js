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
      this.res.json(lists);
      this.res.end();
   }
}

export default GetMusicListController;