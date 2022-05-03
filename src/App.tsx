import React from 'react';
import {StackNavigation} from './screens/StackNavigation';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <StackNavigation />
    </ReduxProvider>
  );
};

export default App;
