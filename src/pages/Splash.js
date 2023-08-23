import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../redux/authSlice';

export default function Splash({navigation}) {

  const dispatch = useDispatch();
  
  useEffect(() => {
    AsyncStorage.getItem('Base::user').then(p => {
      if(p) {
        dispatch(LoginUser(JSON.parse(p)))
      } else {
        navigation.navigate('login');
      }
    }).catch(e => {
      console.log(e)
    })

  },[])
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}