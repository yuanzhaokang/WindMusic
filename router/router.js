import {PlayMusic, MusicList} from 'common/elements';
import 'common/style/default.scss';

const routes = [
   {
      component: PlayMusic,
      path: '/playmusic',
      exact: true
   },
   // {
   //    component: MusicList,
   //    path: '/musiclist',
   //    exact: true
   // }
];

export default routes;