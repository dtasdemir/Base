import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, StyleSheet, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Heatmap, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';

export default function Home() {
  const [LocationPermission, setLocationPermission] = useState(false);

  const [LData, setLData] = useState();

  const uId = useSelector(state => state.auth.userData.uid);

  useEffect(() => {
    checkLocationPermission();
    console.log(uId, 'UID');
    getLocation();
  }, []);

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
    } else {
      ToastAndroid.show('Konum izni verilmedi.', ToastAndroid.SHORT);
      setLocationPermission(false);
    }
  };

  useEffect(() => {
    if (LocationPermission) {
      const pushLocation = setInterval(getLocation, 100000);

      return () => clearInterval(pushLocation);
    }
  }, [LocationPermission]);

  const getLocation = async () => {
    try {
      Geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const userLocation = firebase.database().ref(`userLocations/${uId}`);

        userLocation.push({
          lat,
          long,
          timeStamp: firebase.database.ServerValue.TIMESTAMP,
        });

        setLData({
          latitude: lat,
          longitude: long,
          weight: 1,
        });

        console.log(LData);
      });
    } catch (e) {
      console.log('Konum gönderilemedi.', e);
    }
  };

  return (
    <>
      <MapView
        initialRegion={{
          latitude: 37.738802112686734,
          longitude: 29.09251192381259,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        apiKey="AIzaSyAWuHCVXpDpYWE8nQNgvJQsQQjTdweUehA">
        <Heatmap points={LData} />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
