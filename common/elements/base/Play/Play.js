import cx from 'classnames';
import React, {PureComponent} from 'react';
import './play.scss';

class Play extends PureComponent {
   constructor() {
      super(...arguments);
   }

   render() {
      let {isPlay, onClick, ...restProps} = this.props;

      return (
         <div className='play-container' onClick={onClick}>
            <div
               className={cx('play', ('play' + (isPlay ? '-play' : '-pause')))}
               {...restProps}
            ></div>
         </div>
      );
   }
}

export default Play;