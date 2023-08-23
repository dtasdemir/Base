/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@react-native-firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyCAL63Xqu9hAqJ_zRZrD6h9GD-6_Cw7o78",
  authDomain: "basea-e12ae.firebaseapp.com",
  databaseURL: "https://basea-e12ae-default-rtdb.firebaseio.com",
  projectId: "basea-e12ae",
  storageBucket: "basea-e12ae.appspot.com",
  messagingSenderId: "647716103862",
  appId: "1:647716103862:web:f85fb918d71c7a3387e817"
});

AppRegistry.registerComponent('app', () => App);
