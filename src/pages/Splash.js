import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../redux/authSlice';

import m from '../style/index';
export default function Splash({navigation}) {

  const dispatch = useDispatch();
  
  useEffect(() => {
    
    setTimeout(() => {
      AsyncStorage.getItem('Base::user').then(p => {
        if(p) {
          dispatch(LoginUser(JSON.parse(p)))
        } else {
          navigation.navigate('login');
        }
      }).catch(e => {
        console.log(e)
      })
    }, 1000)

  },[])
  return (
    <View style={[m.f(1), m.bg(m.primaryColor), m.vcenter, m.hcenter]}>
      <Text style={[m.fontSCW(24, m.white, '600')]}>Splash Screen</Text>
    </View>
  );
}