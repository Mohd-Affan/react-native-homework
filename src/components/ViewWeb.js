import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

export default class ViewWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          onLoadStart={() => {
            this.setState({
              isLoading: true,
            });
          }}
          onLoadEnd={() => {
            this.setState({
              isLoading: false,
            });
          }}
          source={{uri: 'https://www.tothenew.com/'}}
        />
        {this.state.isLoading ? (
          <View style={styles.Container}>
            <ActivityIndicator
              size={'large'}
              color={'blue'}
              style={{alignSelf: 'center'}}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 400,
  },
});
