import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  StatusBar,
  TextInput,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';

export default class Loaders extends Component {
  constructor() {
    super();
    this.state = {
      loader: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loader: false});
    }, 3000);
  }
  render() {
    return (
      <>
        {this.state.loader ? (
          <ActivityIndicator style={styles.loader} size={100} color="purple" />
        ) : (
          <View style={styles.pic}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={{
                uri:
                  'https://image.freepik.com/free-vector/stay-home-hand-drawn-doodle-art_72192-770.jpg',
              }}
            />
          </View>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  loader: {
    marginTop: 300,
  },
  pic: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
