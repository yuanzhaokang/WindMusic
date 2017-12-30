import React, {PureComponent} from 'react';
import cx from 'classnames';
import './image.scss';

class Image extends PureComponent {
   render() {
      const {className, ...restProps} = this.props;
      const props = {
         className: cx('img', className),
         ...restProps
      };

      return <img {...props} />;
   }
}

Image.defaultProps = {
   className: ''
};

export default Image;