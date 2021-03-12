import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  BackHandler,
  Alert,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      Content: '',
    };
  }

  backAction = () => {
    Alert.alert('Alert', 'Do you want exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Ok', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  readFromClipboard = async () => {
    const value = await Clipboard.getString();
    this.setState({
      Content: value,
    });
  };

  writeToClipboard = () => {
    Clipboard.setString(this.state.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>Clipboard Contents: </Text>
        <Text>{this.state.Content}</Text>
        <Button onPress={this.readFromClipboard} title="Write to Clipboard" />

        <View style={styles.seperator} />

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Type here..."
        />
        <Button onPress={this.writeToClipboard} title="Copy from Clipboard" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: '600',
  },
  seperator: {
    height: 1,
    backgroundColor: 'gray',
    width: '80%',
    marginVertical: 40,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
});
