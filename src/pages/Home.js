import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

export default function Home() {
  const [Location, setLocation] = useState(null);

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({latitude, longitude});

        console.log(latitude, longitude);
      },
      error => {
        console.log('object', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  /**
   * 
      <Text onPress={fetchLocation}>Home</Text>
      <Text onPress={() => console.log(Location)}>Locatiom</Text>
   */
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
