import {Play, MusicList} from 'common/elements';
import 'common/style/default.scss';

const routes = [
   {
      component: Play,
      path: '/play',
      exact: true
   },
   {
      component: MusicList,
      path: '/musiclist',
      exact: true
   }
];

export default routes;