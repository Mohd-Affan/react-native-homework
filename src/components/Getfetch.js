import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';

export default class Getfetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: true,
      data: [],
      activityIndicator: false,
      loader: false,
    };
  }
  onPress = () => {
    this.setState({btn: false, activityIndicator: true});
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          this.setState({
            activityIndicator: false,
            data: res.data,
          });
        })
        .catch((err) => console.log(err));
      this.setState({
        loader: true,
      });
    }, 3000);
  };
  render() {
    const {activityIndicator, data, btn, loader} = this.state;
    return (
      <>
        {btn ? (
          <TouchableOpacity style={styles.btn} onPress={() => this.onPress()}>
            <Text style={styles.fetchText}>fetch button</Text>
          </TouchableOpacity>
        ) : null}
        {activityIndicator ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : null}
        {loader && (
          <ScrollView style={styles.scroll}>
            <View style={styles.container}>
              {data.map((data) => (
                <View key={data.id} style={styles.content}>
                  <Image style={styles.img} source={{uri: data.avatar}}></Image>
                  <Text style={styles.contentItem}>
                    {`Email: ${data.email}`}
                  </Text>
                  <Text style={styles.contentItem}>
                    {`Name: ${data.first_name} ${data.last_name}`}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    width: '50%',
    height: 60,
    alignSelf: 'center',
    marginTop: 350,
  },
  fetchText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 13,
    color: 'blue',
  },
  scroll: {
    marginVertical: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  container: {
    paddingHorizontal: 10,
    marginTop: 50,
  },
  content: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  contentItem: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});
