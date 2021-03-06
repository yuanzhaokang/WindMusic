import {
   Bar,
   Play,
   Switch,
   Progress
} from 'common/elements/base';
import {Label} from 'common/components';
import {play, getMusicList} from 'common/action/action';
import {MusicList} from 'common/elements';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import './play-music.scss';

class PlayMusic extends PureComponent {
   constructor(props) {
      super(props);
      this.control = null;

      this.state = {
         progress: '0%',
         leftTime: '0:00'
      };
   }

   componentDidMount() {
      this.props.isPlay ? this.control.play() : this.control.pause();
      this._progress();
   }

   componentDidUpdate() {
      this.props.isPlay ? this.control.play() : this.control.pause();
   }

   render() {
      const {isPlay, musicName} = this.props;
      const {progress, leftTime} = this.state;

      return (
         <div className='play-music'>
            <Bar />
            <div className='play-music-control-container'>
               <div>
                  <audio ref={this._setControl} src={`\\music\\${musicName}`} ></audio>
                  <div className='music-name'>
                     <Label label={musicName} />
                  </div>
                  <Progress progress={progress} leftTime={leftTime} />
                  <Switch direction='pre' />
                  <Play onClick={this._playHandler} isPlay={isPlay} />
                  <Switch direction='next' />
                  <Label className='musics' label={"音乐集"} />
                  <MusicList />
               </div>
            </div>
         </div>
      );
   }

   _playHandler = () => {
      let {dispatch, isPlay} = this.props;
      dispatch(play(!isPlay));
   }

   _setControl = (ref) => {
      this.control = ref;
   }

   _progress = () => {
      if(this.props.isPlay) {
         let {currentTime, duration} = this.control;
         let mill = (duration - currentTime) * 1000;
         let date = new Date(mill);
         let minute = date.getMinutes();
         let second = date.getSeconds();
         let leftTime = `${minute}:${second}`;

         this.setState({
            progress: `${currentTime / duration * 100}%`,
            leftTime
         });
      }

      requestAnimationFrame(this._progress);
   }

   static fetchData(store) {
      return new Promise((resolve, reject) => {
         fetch('http://localhost:3000/getmusiclist')
            .then(res => {
               res.json()
                  .then((json) => {
                     store.dispatch(getMusicList(json));
                     resolve("success");
                  })
                  .catch(e => {
                     reject(e);
                  });
            })
            .catch(e => {
               reject(e);
            })
      });
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      isPlay: state.get('isPlay'),
      musicName: state.get('musicName')
   };
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayMusic);