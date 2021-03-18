import React, {Component} from 'react';
import {
  Text,
  Button,
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {Name: '', Email: ''};
  }

  clearAll = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } catch (e) {}
  };

  Click = () => {
    Alert.alert('alert', 'do you want to clear data', [
      {
        text: 'ok',
        onPress: () => {
          this.clearAll();
          // this.props.navigation.navigate('Login');
        },
      },
      {
        text: 'no',
        onPress: () => {
          return null;
        },
      },
    ]);
  };

  getData = async () => {
    try {
      const Name = await AsyncStorage.getItem('Name');
      const Email = await AsyncStorage.getItem('Email');

      this.setState({Name: Name, Email: Email});
    } catch (e) {}
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const {Name, Email} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{Name} </Text>
          {/* //this.state.Name */}
          <Text>{Email}</Text>
        </View>
        <Button title={'Logout'} onPress={() => this.Click()} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
