import React, {Component} from 'react';
import {
  Animated,
  Image,
  View,
  StyleSheet,
  PanResponder,
  Text,
} from 'react-native';

class Ball extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: this.pan.x, dy: this.pan.y},
    ]),
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag the ball!</Text>
        <Animated.View
          style={{
            transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
          }}
          {...this.panResponder.panHandlers}>
          <Image style={styles.ball} source={require('../assets/ball.jpeg')} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  ball: {
    height: 80,
    width: 80,
    backgroundColor: 'lightgreen',
    borderRadius: 100,
  },
});

export default Ball;
