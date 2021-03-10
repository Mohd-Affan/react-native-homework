import React, {Component} from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  Button,
  ImageBackground,
  StatusBar,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export default class Myntra extends Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.Container}>
            <View>
              <Text style={styles.section}>Men's Clothing</Text>
            </View>

            <View style={styles.hl}></View>

            <View style={styles.semiContainer}>
              <Text style={styles.items}>195 items</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Sort Items')}>
                <Text style={styles.btnText}>Sort</Text>
              </TouchableOpacity>
              <IconFontAwesome name="sort" size={20} style={styles.sort} />

              <View style={styles.vl}></View>
              <IconAntDesign name="filter" size={20} style={styles.filter} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Filter Items')}>
                <Text style={styles.btnText}>Filter</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hl}></View>

            <ScrollView>
              <View style={styles.Categories}>
                <TouchableOpacity
                  style={styles.catbtn}
                  onPress={() => alert('Polo shirts')}>
                  <Text style={styles.btnText2}>Polo Shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.catbtn}
                  onPress={() => alert('Dress shirts')}>
                  <Text style={styles.btnText2}>Dress Shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.catbtn}
                  onPress={() => alert('Shorts')}>
                  <Text style={styles.btnText2}>Shorts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.catbtn}
                  onPress={() => alert('T-shirts & Vests')}>
                  <Text style={styles.btnText2}>T-shirts and Vests</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.picContainer}>
                <View style={styles.primaryCont1}>
                  <Image
                    style={{width: 200, height: 300}}
                    source={require('../assets/pic1.jpg')}
                  />
                  <Image
                    style={{width: 200, height: 300}}
                    source={require('../assets/pic2.jpg')}
                  />
                </View>

                <View style={styles.sub}>
                  <View>
                    <Text style={styles.subtxt}>Tommy Hilfiger</Text>
                    <Text>
                      Men's morrison stripe polo{'\n'}
                      limelight combo
                    </Text>
                    <Text style={styles.subtxt}>USD 23</Text>
                  </View>
                  <View>
                    <Text style={styles.subtxt}>Tommy Hilfiger</Text>
                    <Text>
                      Men's morrison stripe polo{'\n'}
                      limelight combo
                    </Text>
                    <Text style={styles.subtxt}>USD 23</Text>
                  </View>
                </View>

                <View style={styles.primaryCont2}>
                  <Image
                    style={{width: 200, height: 300}}
                    source={require('../assets/pic2.jpg')}
                  />
                  <Image
                    style={{width: 200, height: 300}}
                    source={require('../assets/pic1.jpg')}
                  />
                </View>

                <View style={styles.sub}>
                  <View>
                    <Text style={styles.subtxt}>Tommy Hilfiger</Text>
                    <Text>
                      Men's morrison stripe polo{'\n'}
                      limelight combo
                    </Text>
                    <Text style={styles.subtxt}>USD 23</Text>
                  </View>
                  <View>
                    <Text style={styles.subtxt}>Tommy Hilfiger</Text>
                    <Text>
                      Men's morrison stripe polo{'\n'}
                      limelight combo
                    </Text>
                    <Text style={styles.subtxt}>USD 23</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  hl: {
    borderWidth: 1,
    borderColor: `#c0c0c0`,
    width: 500,
    marginTop: 20,
  },
  semiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  items: {
    paddingRight: 120,
    fontSize: 20,
    paddingTop: 10,
  },
  btnText: {
    fontSize: 20,
    paddingTop: 10,
  },

  vl: {
    marginTop: 5,
    height: 30,
    width: 1,
    backgroundColor: '#c0c0c0',
  },
  Categories: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  btnText2: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  catbtn: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#c0c0c0',
  },
  picContainer: {
    marginTop: 20,
  },
  primaryCont1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  primaryCont2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filter: {
    marginTop: 12,
  },
  sort: {
    marginTop: 12,
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subtxt: {
    fontWeight: 'bold',
  },
});
