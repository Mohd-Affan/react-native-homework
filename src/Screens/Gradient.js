import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Fruits from '../components/Fruits';

export default class Gradient extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Fruits />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
