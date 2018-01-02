import * as Constants from 'common/action/constants';

let state = {
   isPlay: false
};

if(__isClient) {
   state = Object.assign({}, window.serverState);
}

function reducer(initState = state, action) {
   switch(action.type) {
      case Constants.PLAY:
         return Object.assign({}, initState, {isPlay: action.value});
      default:
         return initState;
   }
}

export default reducer;