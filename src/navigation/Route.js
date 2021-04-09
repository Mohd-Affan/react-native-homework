import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Location from '../components/Location';
import VideoComponent from '../components/VideoComponent';
import Home from '../components/Home';
import PlaylistScreen from '../components/PlaylistScreen';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="VideoComponent" component={VideoComponent} />
          <Stack.Screen name="Playlist" component={PlaylistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({});
