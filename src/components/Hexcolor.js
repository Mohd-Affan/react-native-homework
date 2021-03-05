import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class HexcodeValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexcode: '',
      color: {b: 0, g: 0, r: 0},
    };
  }

  onPress = () => {
    var RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    var result = RegExp.test(this.state.hexcode);
    console.log(result);
    if (result) {
      var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        this.state.hexcode,
      );
      this.setState({
        color: result2
          ? {
              r: parseInt(result2[1], 16),
              g: parseInt(result2[2], 16),
              b: parseInt(result2[3], 16),
            }
          : null,
      });
    }
  };

  render() {
    return (
      <>
        <Text>
          Please Enter a correct 6 digit hex code like (#ff0000,#dedede)
        </Text>
        <TextInput
          style={styles.input1}
          autoFocus={true}
          onChangeText={(text) => this.setState({hexcode: text})}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: `rgb(${this.state.color.r},${this.state.color.g},${this.state.color.b})`,
            width: 450,
            height: 100,
            alignSelf: 'center',
            marginTop: 30,
          }}></View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input1: {
    borderWidth: 1,
    height: 50,
    width: '50%',
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'blue',
    width: '50%',
    height: 50,
    alignSelf: 'center',
    marginTop: 40,
  },
  btnText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
  },
});
