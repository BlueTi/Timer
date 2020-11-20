import React from 'react';
import MainView from './components/MainView';
import {store} from './store'
import {Provider} from 'react-redux'


const App = () => {
  return <Provider store={store}>
      <MainView/>
  </Provider>
}

export default App;