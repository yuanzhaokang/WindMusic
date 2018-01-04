import React, {PureComponent} from 'react';
import './progress.scss';

class Progress extends PureComponent {
   constructor() {
      super(...arguments);
   }

   render() {
      const {progress, leftTime} = this.props;

      return (
         <div className='progress-container'>
            <div className={'left-time'}>{leftTime}</div>
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