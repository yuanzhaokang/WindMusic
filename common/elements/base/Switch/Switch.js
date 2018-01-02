import cx from 'classnames';
import React, {PureComponent} from 'react';
import './switch.scss';

class Switch extends PureComponent {
   constructor() {
      super(...arguments);
   }

   render() {
      let {direction, ...restProps} = this.props;
      let klass = cx('switch', direction == 'pre' ? 'switch-pre' : 'switch-next');

      return (
         <div className='switch-container'>
            <div className={klass}></div>
         </div>
      );
   }
}

export default Switch;