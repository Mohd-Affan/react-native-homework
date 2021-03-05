/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  View,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
    };
  }
  render() {
    return (
      <>
        {/* <StatusBar backgroundColor="green" /> */}
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.LoginToSaavn}>
                <Text style={styles.login}>Log in to Saavn</Text>
              </View>
              <ImageBackground
                style={{flex: 1, resizeMode: 'cover', width: 400, height: 650}}
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}>
                <View style={styles.code}>
                  <Text style={styles.enterCode}>Enter your Code</Text>
                </View>

                <View style={styles.otp}>
                  <TextInput
                    keyboardType={'numeric'}
                    ref={'pin1ref'}
                    autoFocus={true}
                    onChangeText={(text) => {
                      this.setState({pin1: text});
                      if (text != '') {
                        this.refs.pin2ref.focus();
                      }
                    }}
                    value={this.state.pin1}
                    maxLength={1}
                    style={{
                      backgroundColor: '#f5f4f2',
                      borderWidth: 2,
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    keyboardType={'numeric'}
                    ref={'pin2ref'}
                    onChangeText={(pin2) => {
                      this.setState({pin2: pin2});
                      if (pin2 != '') {
                        this.refs.pin3ref.focus();
                      }
                    }}
                    value={this.state.pin2}
                    maxLength={1}
                    style={{
                      backgroundColor: '#f5f4f2',
                      borderWidth: 2,
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    keyboardType={'numeric'}
                    ref={'pin3ref'}
                    onChangeText={(pin3) => {
                      this.setState({pin3: pin3});
                      if (pin3 != '') {
                        this.refs.pin4ref.focus();
                      }
                    }}
                    value={this.state.pin3}
                    maxLength={1}
                    style={{
                      backgroundColor: '#f5f4f2',
                      borderWidth: 2,
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    keyboardType={'numeric'}
                    ref={'pin4ref'}
                    onChangeText={(pin4) => {
                      this.setState({pin4: pin4});
                    }}
                    value={this.state.pin4}
                    maxLength={1}
                    style={{
                      backgroundColor: '#f5f4f2',
                      borderWidth: 2,
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  />
                </View>

                <View style={styles.btn}>
                  <TouchableOpacity
                    style={{
                      borderColor: '#008080',
                      borderWidth: 2,
                      backgroundColor: 'white',
                      width: 200,
                      height: 40,
                      alignItems: 'center',
                      paddingTop: 3,
                    }}
                    onPress={() =>
                      alert(
                        `${this.state.pin1}${this.state.pin2}${this.state.pin3}${this.state.pin4}`,
                      )
                    }>
                    <Text style={{fontSize: 20, color: '#008080'}}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: `#32cd32`,
    width: 450,
    paddingLeft: 163,
    paddingTop: 10,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  enterCode: {
    paddingLeft: 125,
    paddingTop: 50,
    fontSize: 20,
    paddingBottom: 40,
  },
  otp: {
    paddingLeft: 115,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  btn: {
    paddingLeft: 100,
    marginTop: 50,
  },
});

// export default App;
