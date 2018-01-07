import {
   MusicItem
} from 'common/elements/base';
import {play, switchMusic} from 'common/action/action';
import {Image} from 'common/components';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import {List} from 'immutable';
import './music-list.scss';

class MusicList extends PureComponent {
   render() {
      const {musiclist} = this.props;

      return (
         <div className='music-list'>
            {
               musiclist.map((item, index) => {
                  return (
                     <MusicItem
                        key={index}
                        name={item}
                        onClick={this.itemClick}
                     />
                  )
               })
            }
         </div>
      );
   }

   itemClick = (item) => {
      const {dispatch} = this.props;
      dispatch(switchMusic(item));
      dispatch(play(true));
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      musiclist: state.get('musiclist')
   };
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      dispatch
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);