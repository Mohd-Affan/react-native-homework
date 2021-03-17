import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {Name: '', Email: ''};
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('Name', `${this.state.Name}`);
      await AsyncStorage.setItem('Email', `${this.state.Email}`);
    } catch (e) {
      // saving error
    }
  };

  Click = () => {
    this.storeData();
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#d3d3d3'}}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.headerTxt}> Let's Get Started! </Text>
            <Text style={styles.subtxt}>
              Create an account to Q Allure to get all features
            </Text>
          </View>
          <View style={styles.semiContainer}>
            <IconAntDesign
              style={styles.icon}
              name="user"
              color="royalblue"
              size={30}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={(Name) => this.setState({Name})}
            />
          </View>

          <View style={styles.semiContainer2}>
            <IconAntDesign
              style={styles.icon}
              name="mail"
              color="gray"
              size={30}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(Email) => this.setState({Email})}
            />
          </View>

          <View style={styles.semiContainer2}>
            <IconAntDesign
              style={styles.icon}
              name="mobile1"
              color="gray"
              size={30}
            />

            <TextInput style={styles.input} placeholder="Mobile" />
          </View>

          <View style={styles.semiContainer2}>
            <IconAntDesign
              style={styles.icon}
              name="lock"
              color="gray"
              size={30}
            />

            <TextInput style={styles.input} placeholder="Password" />
          </View>

          <View style={styles.semiContainer2}>
            <IconAntDesign
              style={styles.icon}
              name="lock"
              color="gray"
              size={30}
            />

            <TextInput style={styles.input} placeholder="Confirm password" />
          </View>
          <View style={styles.createbtn}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.Click()}>
              <Text style={styles.btn2}>CREATE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.txt}>Already have an account?</Text>
            <TouchableOpacity style={styles.btn3}>
              <Text style={styles.txt4}>Login Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 40,
    flex: 1,
  },
  semiContainer: {
    backgroundColor: 'white',
    borderColor: 'royalblue',
    borderWidth: 1,
    height: 60,
    width: 350,
    borderRadius: 50,
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    color: 'royalblue',
    height: 50,
    width: 290,
    borderRadius: 50,
    marginLeft: 60,
    position: 'absolute',
  },
  icon: {
    marginLeft: 20,
  },
  semiContainer2: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    height: 60,
    width: 350,
    borderRadius: 50,
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'royalblue',
    width: 180,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btn2: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  txt4: {
    color: 'royalblue',
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 20,
  },
  headerTxt: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 100,
  },
  subtxt: {
    color: 'gray',
  },
});
