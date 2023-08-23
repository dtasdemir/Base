import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser, Logout } from '../redux/authSlice';

export default function Login() {
  const dispatch = useDispatch();

  const uData = useSelector(state => state.auth.userData);

  useEffect(() => {
    AsyncStorage.getItem('Base::user').then(p => {
      console.log(JSON.parse(p), "Hello Balım");
    }).catch(e => {
      console.log(e)
    })
  
  })
  return (
    <View>
      <Text onPress={() => {
        dispatch(LoginUser({email:'derya@aprilerp.com', password: '123456'}))
      }}>Login</Text>
      <Text onPress={() => console.log(uData.uid)}>Data</Text>
      <Text onPress={() => dispatch(Logout())}>Çıkış Yap</Text>
    </View>
  );
}