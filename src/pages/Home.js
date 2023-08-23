import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Heatmap, PROVIDER_GOOGLE} from 'react-native-maps';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import {useSelector} from 'react-redux';

import m from '../style/index';

export default function Home() {
  const UId = useSelector(state => state.auth.uid); // User Id
  const load = useSelector(state => state.auth.isLoad); // Loading

  const [LocationPermission, setLocationPermission] = useState(false);

  var [LData, setLData] = useState([
    {latitude: 37.7383424, longitude: 29.0923968, weight: 1}, // Girişteki hatayı çözemediğim için local bir data koydum buraya
  ]); // User Location

  const [MapCenter, setMapCenter] = useState({
    latitude: LData[0].latitude,
    longitude: LData[0].longitude,
  })

  // Location Permision Function
  const checkLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Uygulama Konum İzni',
        message: 'Konumunuza erişmek için izin vermeniz gerekiyor.',
        buttonNeutral: 'Daha Sonra Sor',
        buttonNegative: 'İptal',
        buttonPositive: 'Tamam',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.show('Konum izni verildi.', ToastAndroid.SHORT);
      setLocationPermission(true);
      getLocation();
    } else {
      ToastAndroid.show('Konum izni verilmedi.', ToastAndroid.SHORT);
      setLocationPermission(false);
    }
  };

  useEffect(() => {
    checkLocationPermission();
    getLocation();
  }, []);

  // Reel Time push Location
  useEffect(() => {
    if (LocationPermission) {
      const pushLocation = setInterval(getLocation, 10000);

      return () => clearInterval(pushLocation);
    }
  }, [LocationPermission]);

  // Get Location
  const getLocation = async () => {
    try {
      Geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        setLData([
          {
            latitude: lat,
            longitude: long,
            weight: 1,
          },
        ]);

        // Database Real Time Push 
        firebase.database().ref(`userLocations/${UId}`).push({
          lat,
          long,
          timeStamp: firebase.database.ServerValue.TIMESTAMP,
        });
      });
    } catch (e) {
      console.log('Konum gönderilemedi.', e);
    }
  };

  return load ? (
    <View style={[m.f(1), m.hcenter, m.vcenter]}>
      <Text>Yükleniyor...</Text>
    </View>
  ) : (
    <MapView
      initialRegion={{
        latitude: MapCenter.latitude,
        longitude: MapCenter.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      apiKey="AIzaSyAWuHCVXpDpYWE8nQNgvJQsQQjTdweUehA">
      <Heatmap points={LData} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
