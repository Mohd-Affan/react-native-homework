import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Moment from 'react-moment';
import moment from 'moment';

const DATA = [
  {
    id: '1',
    pic: require('../assets/product1.jpeg'),
    timeStamp: moment().add(3, 's'),
  },
  {
    id: '2',
    pic: require('../assets/product2.jpg'),
    timeStamp: moment().add(7, 's'),
  },
  {
    id: '3',
    pic: require('../assets/product3.jpg'),
    timeStamp: moment().add(11, 's'),
  },
];
export default class TimeStamp extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: new Date()};
  }
  componentDidMount() {
    const startTimer = setInterval(
      () => this.setState({currentTime: new Date()}),
      1000,
    );
  }

  render() {
    return (
      <View style={styles.Container}>
        <SafeAreaView>
          <View style={styles.currentTime}>
            <Text style={styles.currentTimeText}>
              {moment(this.state.currentTime).format('hh:mm:ss')}
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({item}) => {
              return (
                <View style={styles.secondContainer}>
                  <Image
                    source={item.pic}
                    style={styles.Image}
                    resizeMode="contain"
                  />
                  {moment(this.state.currentTime).format('hh:mm:ss') >=
                  moment(item.timeStamp).format('hh:mm:ss') ? (
                    <View style={styles.expired}>
                      <Text style={styles.expiredText}>Expired</Text>
                    </View>
                  ) : (
                    <View style={styles.expireTime}>
                      <Text style={styles.Timertext}>Expires On</Text>
                      <Moment
                        style={styles.Timertext}
                        date={item.timeStamp}
                        format="hh:mm:ss"
                        element={Text}
                      />
                    </View>
                  )}
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    margin: 20,
    backgroundColor: 'lavender',
    padding: 10,
  },
  Image: {
    width: 300,
    height: 300,
    margin: 20,
  },
  currentTime: {
    alignItems: 'center',

    backgroundColor: 'purple',
    width: 70,
    marginLeft: '40%',
    borderRadius: 30,
  },
  currentTimeText: {
    color: 'lavender',
    fontWeight: 'bold',
  },
  expired: {
    alignItems: 'center',
  },
  expireTime: {
    alignItems: 'center',
  },
});
