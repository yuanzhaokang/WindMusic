import * as Constants from 'common/action/constants';
import immutable from 'immutable';

let state = immutable.fromJS({
   isPlay: false
});

if(__isClient) {
   state = immutable.fromJS(window.serverState);
}

function reducer(initState = state, action) {
   switch(action.type) {
      case Constants.PLAY:
         return initState.set('isPlay', !initState.get('isPlay'));
      default:
         return initState;
   }
}

export default reducer;