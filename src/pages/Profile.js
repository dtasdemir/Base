import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../redux/authSlice';

export default function Profile() {

  // 37.79150875447691, 29.037345736165115

  const dispatch = useDispatch();

  const saveLocation = () => {

    console.log('geldim')
    const lat = '37.79150875447691';
    const long = '29.089845888842884';

    const userId = 'vBtigqsSlbSDs4vJA8iqYODjgU42';

    console.log(userId);


    const userLocation = firebase.database().ref(`userLocations/${userId}`);

        userLocation.push({
          lat,
          long,
          timeStamp: firebase.database.ServerValue.TIMESTAMP,
        });
    
  }

  useEffect(() => {
    dispatch(LoginUser({
      email: 'derya@aprilerp.com',
      password: '123456'
    }))
  },[dispatch])
  return (
    <View>
      <Text onPress={saveLocation}>Profil</Text>
    </View>
  );
}