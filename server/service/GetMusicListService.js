import fs from 'fs';
import path from 'path';

class GetMusicListService {
   constructor(path) {
      this.path = path;
   }

   get() {
      let dirs = fs.readdirSync(path.resolve(this.path), {encoding: 'utf-8'});
      return dirs || [];
   }
}

export default GetMusicListService;