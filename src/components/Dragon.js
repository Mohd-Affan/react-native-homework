import React, {Component} from 'react';
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

export default class Drag extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="white" />
        <SafeAreaView>
          <View style={styles.Container}>
            <View style={styles.imgContainer}>
              <Image
                style={{width: 250, height: 350, borderRadius: 20}}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/en/f/fd/How_to_Train_Your_Dragon_3_poster.png',
                }}
              />
            </View>
            <View style={styles.firstContainer}>
              <Text style={styles.text1}>
                How To Train Your dragon: {'\n'} The Hidden World
              </Text>
            </View>

            <View style={styles.secondContainer}>
              <Text style={styles.text2}>Part |||</Text>
            </View>

            <View style={styles.genre}>
              <Text style={styles.genre1}>Adventure </Text>
              <Text style={styles.genre2}>Family</Text>
              <Text style={styles.genre3}>Fantasy</Text>
            </View>
            <View style={styles.hl}></View>

            <View style={styles.description}>
              <Text style={styles.year}>Year</Text>
              <Text style={styles.country}>Country</Text>
              <Text style={styles.length}>Length</Text>
            </View>

            <View style={styles.description2}>
              <Text style={styles.year2}>2019</Text>
              <Text style={styles.country2}>USA</Text>
              <Text style={styles.length2}>112min</Text>
            </View>

            <View style={styles.intro}>
              <Text style={styles.Intro}>About Movie</Text>
            </View>

            <View style={styles.summary}>
              <Text style={styles.summ}>
                When discovers Toothless isn't the only Night Fury, he must seek
                "The Hidden World", a secret Dragon Utopia before a hired tyrant
                named Grimmel finds it first.
              </Text>
            </View>

            <View style={styles.screenshots}>
              <Text style={styles.ss}>Screenshots</Text>
            </View>

            <View style={styles.pic}>
              <Image
                style={{width: 170, height: 100, borderRadius: 20}}
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
              />
              <Image style={{width: 50}} />
              <Image
                style={{width: 170, height: 100, borderRadius: 20}}
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
              />
            </View>

            <View style={styles.tickets}>
              <Button title="Buy Tickets" />
            </View>
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
  imgContainer: {
    paddingTop: 20,
  },
  genre: {
    flexDirection: 'row',
  },

  genre1: {
    backgroundColor: `#4169e1`,
    borderRadius: 10,
    color: 'white',
  },
  genre2: {
    paddingRight: 10,
    paddingLeft: 5,
    backgroundColor: `#4169e1`,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
  },
  genre3: {
    backgroundColor: `#4169e1`,
    borderRadius: 10,
    color: 'white',
  },
  hl: {
    borderWidth: 2,
    borderColor: `#f0f8ff`,
    width: 500,
    marginTop: 20,
  },

  description: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  year: {
    color: 'grey',
  },
  country: {
    paddingLeft: 20,
    paddingRight: 20,
    color: 'grey',
  },
  length: {
    color: 'grey',
  },

  description2: {
    flexDirection: 'row',
  },
  year2: {
    fontSize: 20,
  },
  country2: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  length2: {
    fontSize: 20,
  },
  intro: {},
  Intro: {
    textAlign: 'left',
    fontSize: 20,
    paddingRight: 280,
  },
  summ: {
    paddingLeft: 3,
    color: 'grey',
  },
  ss: {
    paddingRight: 280,
    fontSize: 15,
  },

  pic: {
    paddingRight: 50,
    flexDirection: 'row',
    paddingLeft: 50,
  },
  tickets: {
    backgroundColor: `#4169e1`,
    color: 'white',
    width: 400,
    marginTop: 5,
    marginBottom: 100,
  },
});

// export default App;
