import * as Constants from 'common/action/constants';
import immutable from 'immutable';

let state = immutable.fromJS({
   isPlay: false,
   musicName: '一封家书.mp3',
   musiclist: []
});

if(__isClient) {
   state = immutable.fromJS(window.serverState);
}

function reducer(initState = state, action) {
   switch(action.type) {
      case Constants.PLAY:
         return initState.set('isPlay', action.value);
      case Constants.GET_MUSIC_LIST:
         return initState.set("musiclist", action.value);
      case Constants.SWITCH_MUSIC:
         return initState.set("musicName", action.value);
      default:
         return initState;
   }
}

export default reducer;