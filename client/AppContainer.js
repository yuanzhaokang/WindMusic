import App from 'client/App';
import store from 'common/getStore';
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import 'common/style/app.scss';

class AppContainer extends PureComponent {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className='app'>
            <Provider store={store}>
               <App />
            </Provider>
         </div>
      );
   }
}

export default AppContainer;