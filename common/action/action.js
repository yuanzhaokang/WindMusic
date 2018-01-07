import {
   SWITCH_MUSIC,
   PLAY,
   PRE_MUSIC,
   NEXT_MUSIC,
   GET_MUSIC_LIST
} from 'common/action/constants';

// play or pause the music.
function play(isPlay) {
   return {
      type: PLAY,
      value: isPlay
   }
}

function getMusicList(musicList) {
   return {
      type: GET_MUSIC_LIST,
      value: musicList
   };
}

function switchMusic(musicName) {
   return {
      type: SWITCH_MUSIC,
      value: musicName
   };
}

export {
   play,
   getMusicList,
   switchMusic
};