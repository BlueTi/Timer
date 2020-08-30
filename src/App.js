import React, { useState } from 'react';
import { View, Text, Button, } from 'react-native';

import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import reducers from './reducers';

import MainView from './components/MainView';

const App = () => {
  let store = createStore(reducers);

  return <Provider store={store}>
      <MainView/>
  </Provider>
}

export default App;