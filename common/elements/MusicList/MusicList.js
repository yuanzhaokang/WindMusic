import {
   Bar,
   Play,
   Switch,
   Progress
} from 'common/elements/base';
import {Image} from 'common/components';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class MusicList extends PureComponent {
   render() {
      return (
         <div className='music-list'>
            <Bar />
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      musiclist: state.get('musiclist')
   };
}

export default connect()(MusicList);