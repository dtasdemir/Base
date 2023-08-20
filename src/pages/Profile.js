import React from 'react';
import { View, Text } from 'react-native';
import { firebase } from '@react-native-firebase/database';

export default function Profile() {

  // 37.79150875447691, 29.037345736165115

  const saveLocation = () => {

    const lat = '37.79150875447691';
    const long = '29.037345736165115';

    const userId = 'vBtigqsSlbSDs4vJA8iqYODjgU42';

    console.log(userId);


    const DATA = firebase.database().ref(`users/${userId}/locations`);

    DATA.push({lat, long, timestamp: Date.now()});
    
  }
  return (
    <View>
      <Text>Profile</Text>
      
      <Text onPress={saveLocation}>Konumu gönder</Text> 
    </View>
  );
}
