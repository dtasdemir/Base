import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import { navigationRef } from './src/navigation/RootNavigation';
import store from './src/redux/index';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
