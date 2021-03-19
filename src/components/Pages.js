import * as React from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    key: '1',
    title: 'FITNESS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:
      'https://cdn1.vectorstock.com/i/1000x1000/41/10/woman-running-on-treadmill-concept-vector-25964110.jpg',
  },
  {
    key: '2',
    title: 'POWERLIFTING',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:
      'https://us.123rf.com/450wm/yellowsdesign/yellowsdesign1812/yellowsdesign181200329/115223010-stock-vector-bodybuilder-with-barbell-deadlift-vector-image.jpg?ver=6',
  },
  {
    key: '3',
    title: 'YOGA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:
      'https://cdn5.vectorstock.com/i/1000x1000/69/54/a-female-yoga-vector-17996954.jpg',
  },
];
const Indicator = ({scrollX}) => {
  return (
    <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: 'royalblue',
              margin: 10,
              opacity,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
  {
  }
};

export default function Pages() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.pic}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 400,
                    height: 400,
                    // backgroundColor: 'red',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={styles.txtContainer}>
                <Text style={styles.txt}>{item.title}</Text>
                <Text style={styles.txt2}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    flex: 0.5,
    alignItems: 'center',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
    margin: 10,
  },
  txt2: {width: 420, marginTop: 40},
});
