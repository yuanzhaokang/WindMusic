import {
   Bar,
   Play,
   Switch
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
      const {isPlay} = this.props;

      return (
         <div className='play-music'>
            <Bar />
            <div className='play-music-control-container'>
               <div>
                  <audio ref={(ref) => {this.control = ref;}} src='/music/一封家书.mp3' ></audio>
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
   console.log(state);
   return {
      isPlay: state.get('isPlay')
   };
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayMusic);