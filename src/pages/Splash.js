import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Splash({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('tab');
    }, 1000);
  }, []);
  
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}
