import {Bar} from 'common/elements/base';
import React, {PureComponent} from 'react';

class Play extends PureComponent {
   constructor(props) {
      super(props);
      this.control = null;
   }

   componentDidMount() {
      let play = true;

      document.addEventListener('click', () => {
         if(play) {
            this.control.play();
         }
         else {
            this.control.pause();
         }
         play = !play;
      })
   }

   render() {
      return (
         <div>
            <Bar />
            <audio ref={(ref) => {this.control = ref;}} src='/music/陈粒 - 奇妙能力歌.mp3' ></audio>
         </div>
      );
   }
}


export default Play;