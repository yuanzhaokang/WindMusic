import React, {PureComponent} from 'react';

class Image extends PureComponent {
   render() {
      return <img {...this.props} />;
   }
}

export default Image;