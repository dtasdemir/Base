import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AprInput from '../inputs/AprInput';
import AprPasswordInput from '../inputs/AprPasswordInput';
import { LoginUser, Logout } from '../redux/authSlice';
import m from '../style/index';

export default function Login() {
  const dispatch = useDispatch();

  const [DataU, setDataU] = useState({
    email: 'derya@aprilerp.com',
    password: '123456',
  });

  const updateDataU = (key, value) => {
    setDataU(oldState => ({
      ...oldState,
      [key]: value,
    }));
  };
  return (
    <View style={[m.f(1), m.ph(16), m.hcenter]}>
      <Text style={[m.pb(36), m.tcenter, m.fontSCW(28, m.primaryColor, '600')]}>Giriş Yap</Text>
      <AprInput InputText={'E-posta'} value={DataU.email} onChangeText={text => updateDataU('email', text)} />
      <AprPasswordInput InputText={'Şifre'} value={DataU.password}  />
      <Button
        title={"Giriş Yap"}
        color={m.primaryColor}
        onPress={() => dispatch(LoginUser(DataU))}
        buttonStyle={[m.rad(8), m.mt(12)]}
        titleStyle={[m.fontSCW(18, m.white)]}
        />
    </View>
  );
}