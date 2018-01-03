import React, {PureComponent} from 'react';
import './progress.scss';

class Progress extends PureComponent {
   constructor() {
      super(...arguments);
   }

   render() {
      const {progress} = this.props;

      return (
         <div>
            <div className='progress'>
               <div style={{width: progress}} className='inner'></div>
            </div>
         </div>
      );
   }

   static defaultProps = {
      progress: '0%'
   };
}

export default Progress;