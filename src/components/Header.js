import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default class Header extends Component {
  close = () => {
    Alert.alert('close app', 'Are you sure?', [
      {
        text: 'ok',
        onPress: () => null,
      },
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'destructive',
      },
    ]);
  };
  render() {
    return (
      <LinearGradient
        colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}
        style={styles.Container}>
        <SafeAreaView>
          <View style={styles.textContainer}>
            <Text style={styles.store1}> Store Selected:</Text>
            <Text style={styles.store2}>Coop Moindal Aby</Text>
            <TouchableOpacity onPress={this.close}>
              <IconAntDesign
                style={styles.close}
                name="closecircle"
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <TextInput style={styles.input} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'green',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  store1: {
    color: 'white',
    fontSize: 16,
  },
  store2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  close: {
    marginLeft: '50%',
    fontSize: 15,
  },
  input: {
    backgroundColor: '#d3d3d3',
    width: '90%',
    height: 40,
    marginLeft: '5%',
    marginVertical: 10,
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
  },
});
