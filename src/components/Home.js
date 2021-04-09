import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.geolocationBtn}
          onPress={() => this.props.navigation.navigate('Location')}>
          <Text style={styles.btnText}>Go To Geolocation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.VideoplayerBtn}
          onPress={() => this.props.navigation.navigate('VideoComponent')}>
          <Text>Go To Video Player</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playlistBtn}
          onPress={() => this.props.navigation.navigate('Playlist')}>
          <Text>Go To Playlist</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  geolocationBtn: {
    backgroundColor: 'skyblue',
    width: '40%',
    margin: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  VideoplayerBtn: {
    backgroundColor: 'skyblue',
    width: '40%',
    margin: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  playlistBtn: {
    backgroundColor: 'skyblue',
    width: '40%',
    margin: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
