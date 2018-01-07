import React, {PureComponent} from 'react';
import './music-item.scss';

class MusicItem extends PureComponent {
   constructor() {
      super(...arguments);
   }

   render() {
      return (
         <div className='item'
            onClick={this.onClick}
         >{this.props.name}</div>
      );
   }

   onClick = () => {
      const {onClick, name} = this.props;
      onClick(name);
   }
}

export default MusicItem;