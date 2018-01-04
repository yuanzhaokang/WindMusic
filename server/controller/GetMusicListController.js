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
      this.res.setHeader('content-type', 'text/javascript;chartset:utf-8');
      // this.res.send(Buffer.from(`${JSON.stringify(lists)}`));
      this.res.end(JSON.stringify(lists));
   }
}

export default GetMusicListController;