import React, {Component} from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Data from './Data';
export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      join: false,
    };
  }

  Click = (msg) => {
    Alert.alert('Alert', msg);
  };

  onOpenModal = () => {
    this.setState({signIn: true});
  };
  onCloseModal = () => {
    this.setState({signIn: false});
  };
  onOpenModalJoin = () => {
    this.setState({join: true});
  };
  onCloseModalJoin = () => {
    this.setState({join: false});
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}> Welcome! </Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  this.onOpenModal();
                }}>
                <Text>SIGN IN</Text>
              </TouchableOpacity>
              <Text>|</Text>
              <TouchableOpacity
                style={styles.join}
                onPress={() => {
                  this.onOpenModalJoin();
                }}>
                <Text>JOIN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <AntDesign name={'user'} size={30} color={'orange'} />
            </View>
            <Data />
          </View>

          <Modal
            animationType="slide"
            visible={this.state.signIn}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.onCloseModal();
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Sign In</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.onCloseModal()}>
                  <AntDesign name={'close'} size={32} color={'black'} />
                </TouchableOpacity>
              </View>
              <View style={styles.inputTxt}>
                <TextInput
                  style={styles.input1}
                  placeholder="Your Email Address"
                />
                <TextInput style={styles.input2} placeholder="Password" />

                <View style={styles.forgotPswd}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('reset password');
                    }}>
                    <Text>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.signInBtnContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('Sign In');
                    }}
                    style={styles.signInBtn}>
                    <Text style={styles.signInText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.vl}></View>
                  <View>
                    <Text style={styles.orTxt}>or</Text>
                  </View>
                  <View style={styles.vl2}></View>
                </View>
                <View style={styles.googleContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('Sign in using Google');
                    }}
                    style={styles.googleBtn}>
                    <Image
                      style={styles.googleImg}
                      source={require('../assets/google.png')}
                    />
                    <Text style={styles.googleText}>Sign in With Google</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.fbContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('Sign in using facebook');
                    }}
                    style={styles.fbBtn}>
                    <Image
                      style={styles.fbImg}
                      source={require('../assets/fb.png')}
                    />
                    <Text style={styles.appleText}>Sign in With Facebook</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.appleContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('signIn using Apple');
                    }}
                    style={styles.appleBtn}>
                    <Image
                      style={styles.appleImg}
                      source={require('../assets/apple.png')}
                    />
                    <Text style={styles.appleText}>Sign in With Apple</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.joinContainer}>
                  <Text style={styles.newAccount}>Don't have an account?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('Create new account');
                    }}
                    style={styles.joinBtn}>
                    <Text style={styles.joinText}>join</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            visible={this.state.join}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.onCloseModalJoin();
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Join</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => this.onCloseModalJoin()}>
                  <AntDesign name={'close'} size={32} color={'black'} />
                </TouchableOpacity>
              </View>
              <View style={styles.inputTxt}>
                <TextInput style={styles.input1} placeholder="First Name" />
                <TextInput style={styles.input2} placeholder="Last Name" />
                <TextInput style={styles.input2} placeholder="Your Email" />
                <TextInput style={styles.input3} placeholder="Password" />
                <TouchableOpacity
                  onPress={() => {
                    this.Click('show password');
                  }}
                  style={{position: 'absolute'}}>
                  <Text style={{top: 210, left: 240}}>Show</Text>
                </TouchableOpacity>
                <View style={styles.numContainer}>
                  <Image
                    style={{width: 30, height: 40}}
                    source={require('../assets/usa.jpeg')}
                  />

                  <Text style={styles.numTxt}>+1</Text>
                  <Text style={styles.hl}>|</Text>

                  <TextInput style={styles.num} placeholder="1234567890" />
                </View>
                <View style={styles.joinNowContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('Join Now');
                    }}
                    style={styles.signInBtn}>
                    <Text style={styles.joinNowText}>Join Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.vl}></View>
                  <View>
                    <Text style={styles.orTxt}>or</Text>
                  </View>
                  <View style={styles.vl2}></View>
                </View>
                <View style={styles.googleContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('signIn using Google');
                    }}
                    style={styles.googleBtn}>
                    <Image
                      style={styles.googleImg}
                      source={require('../assets/google.png')}
                    />
                    <Text style={styles.googleText}>Sign in With Google</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.fbContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('signIn using Facebook');
                    }}
                    style={styles.fbBtn}>
                    <Image
                      style={styles.fbImg}
                      source={require('../assets/fb.png')}
                    />
                    <Text style={styles.appleText}>Sign in With Facebook</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.appleContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('SignIn using Apple');
                    }}
                    style={styles.appleBtn}>
                    <Image
                      style={styles.appleImg}
                      source={require('../assets/apple.png')}
                    />
                    <Text style={styles.appleText}>Sign in With Apple</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.joinContainer}>
                  <Text style={styles.newAccount}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.Click('Sign in');
                    }}
                    style={styles.joinBtn}>
                    <Text style={styles.joinText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  text: {fontSize: 20},
  buttons: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  signIn: {backgroundColor: 'lemonchiffon', marginRight: 5},
  join: {backgroundColor: 'lemonchiffon', marginLeft: 5},
  icon: {
    borderWidth: 2,
    borderColor: 'khaki',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    backgroundColor: 'lemonchiffon',
    position: 'absolute',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  modalView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  button: {position: 'absolute', right: 0},
  modalText: {fontSize: 28, fontWeight: 'bold'},
  inputTxt: {
    height: 45,
    width: '70%',
    marginTop: 20,
  },
  input1: {
    height: 45,
    borderWidth: 1,
    borderColor: 'grey',
  },
  input2: {
    marginTop: 20,
    height: 45,
    borderWidth: 1,
    borderColor: 'grey',
  },
  forgotPswd: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInBtnContainer: {
    marginTop: 20,
    height: 40,
  },
  signInBtn: {
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontSize: 18,
  },
  vl: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '45%',
    marginTop: 40,
  },
  orTxt: {
    marginTop: 20,
    position: 'absolute',
    top: 10,
    fontSize: 20,
    width: 30,
    borderWidth: 1,
    height: 30,
    borderRadius: 15,
    paddingLeft: 5,
  },
  vl2: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '45%',
    marginTop: 40,
    marginLeft: 30,
  },
  googleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    height: 40,
  },
  googleBtn: {
    flexDirection: 'row',
  },
  googleImg: {
    width: 30,
    height: 20,
    position: 'absolute',
    right: 140,
  },
  fbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    height: 40,
    backgroundColor: 'royalblue',
  },
  fbImg: {
    width: 40,
    height: 20,
    position: 'absolute',
    right: 145,
  },
  appleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    height: 40,
    backgroundColor: 'black',
  },
  appleImg: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 145,
    borderRadius: 10,
  },
  appleText: {color: 'white'},
  joinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  joinText: {
    color: 'grey',
  },
  input3: {
    marginTop: 20,
    height: 45,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'relative',
  },
  numContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    height: 45,
    marginTop: 20,
  },
  numTxt: {
    marginVertical: 10,
  },
  hl: {
    marginRight: 90,
    marginVertical: 10,
  },
  num: {
    right: 80,
  },
  joinNowContainer: {
    marginTop: 20,
    height: 40,
  },
  joinNowBtn: {
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinNowText: {color: 'white', fontSize: 24},
});
