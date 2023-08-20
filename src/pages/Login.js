import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth'

export default function Login() {
  return (
    <View>
      <Text onPress={() => {
        auth().signInWithEmailAndPassword('derya@aprilerp.com', '123456').then(p => {
          console.log(p)
        }).catch(e => {
          console.log(e)
        })
      }}>Login</Text>
    </View>
  );
}