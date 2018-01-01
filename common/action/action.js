import {
   SWITCH_MUSIC,
   PLAY,
   PRE_MUSIC,
   NEXT_MUSIC
} from 'common/action/constants';

// play or pause the music.
function play(isPlay) {
   return {
      type: PLAY,
      value: isPlay
   }
}


export {
   play
};