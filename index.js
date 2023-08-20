/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import gService from './android/app/google-services.json';
import firebase from '@react-native-firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyBYSZsrLS2Kn7fl8oZi14sMKtOTNx8CzTo",
  authDomain: "basea-e12ae.firebaseapp.com",
  databaseURL: "https://basea-e12ae-default-rtdb.firebaseio.com",
  projectId: "basea-e12ae",
  storageBucket: "basea-e12ae.appspot.com",
  messagingSenderId: "647716103862",
  appId: "1:647716103862:android:aa3546af8075ec7c87e817"
});

AppRegistry.registerComponent('app', () => App);
