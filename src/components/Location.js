import React from 'react';
import {View, Text, Button, StyleSheet, Linking} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
const Location = () => {
  const [coord, setCord] = React.useState({lat: null, lng: null});
  const checkPermission = async () => {
    try {
      let permission = await Geolocation.requestAuthorization('whenInUse');
      if (permission === 'denied') {
        Linking.openSettings();
      }
      return permission;
    } catch (error) {
      console.log('Permission error: ', error);
    }
  };

  const getLocation = async () => {
    console.log('State: ', coord);
    const permission = await checkPermission();
    if (permission === 'granted') {
      Geolocation.getCurrentPosition(
        (location) => {
          console.log('User Location : ', location);
          setCord({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        },
        (error) => {},
        {timeout: 3000, enableHighAccuracy: true},
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.7783,
            longitude: -119.4179,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}>
          <MapView.Marker
            coordinate={{latitude: 36.7783, longitude: -119.4179}}
            title={'Current Location'}
            description={'California'}
          />
        </MapView>
      </View>
      <View style={styles.geolocation}>
        <Text>Geolocation</Text>
        <Button title={'Get Users Current Location'} onPress={getLocation} />
        <Text>
          User Location : Latitute : {coord.lat} Longitude : {coord.lng}{' '}
        </Text>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMap: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  geolocation: {marginTop: 30, justifyContent: 'center', alignItems: 'center'},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
