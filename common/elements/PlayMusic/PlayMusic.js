import {
   Bar,
   Play,
   Switch,
   Progress
} from 'common/elements/base';
import {Label} from 'common/components';
import {play} from 'common/action/action';
import React, {PureComponent} from 'react';
import {autobind} from 'core-decorators';
import {connect} from 'react-redux';
import './play-music.scss';

class PlayMusic extends PureComponent {
   constructor(props) {
      super(props);
      this.control = null;
   }

   componentDidMount() {
      this.props.isPlay ? this.control.play() : this.control.pause();
   }

   componentDidUpdate() {
      this.props.isPlay ? this.control.play() : this.control.pause();
   }

   render() {
      const {isPlay, musicName} = this.props;

      return (
         <div className='play-music'>
            <Bar />
            <div className='play-music-control-container'>
               <div>
                  <audio ref={(ref) => {this.control = ref;}} src={`\\music\\${musicName}`} ></audio>
                  <div className='music-name'>
                     <Label label={musicName} />
                  </div>
                  <Progress />
                  <Switch direction='pre' />
                  <Play onClick={this._playHandler} isPlay={isPlay} />
                  <Switch direction='next' />
               </div>
            </div>
         </div>
      );
   }

   @autobind
   _playHandler() {
      let {dispatch, isPlay} = this.props;
      dispatch(play(!isPlay));
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