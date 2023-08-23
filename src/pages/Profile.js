import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';

import m from '../style/index';
import {Button} from '@rneui/themed';
import AprInput from '../inputs/AprInput';
import { Logout } from '../redux/authSlice';

export default function Profile() {
  const dispatch = useDispatch();

  const UData = useSelector(state => state.auth.userData);

  return (
    <>
      <View>
        <Text
          style={[
            m.fontSCW(32, m.white, '600'),
            m.pv(64),
            m.bg(m.primaryColor),
            m.resW(1),
            m.tcenter,
          ]}>
          Profilim
        </Text>
      </View>
      <View style={[m.f(1), m.pv(12), m.ph(16)]}>

        <AprInput InputText={'E-posta'} value={UData.email} viewStyle={[m.f(1)]}/>
        <Button
          title={'Çıkış Yap'}
          color={m.primaryColor}
          onPress={() => dispatch(Logout())}
          style={[m.f(1),]}
          buttonStyle={[m.rad(8)]}
        />
      </View>
    </>
  );
}
