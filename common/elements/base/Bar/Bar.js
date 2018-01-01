import {Image} from 'common/components';
import React, {PureComponent} from 'react';
import './bar.scss';

class Bar extends PureComponent {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className='bar'>
            <Image src='/static/note.jpg'/>
            <label className='title'>React Music by Wind.</label>
         </div>
      );
   }
}

export default Bar;