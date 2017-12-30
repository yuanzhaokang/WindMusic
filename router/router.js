import {Play, MusicList} from 'common/elements';

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