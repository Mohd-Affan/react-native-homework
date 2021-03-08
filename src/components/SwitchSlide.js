import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, SafeAreaView} from 'react-native';
import Slider from '@react-native-community/slider';

const SwitchSlide = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(1);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switch}>
        <Switch
          trackColor={{false: 'black', true: 'pink'}}
          thumbColor={isEnabled ? 'violet' : 'pink'}
          ios_backgroundColor="violet"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled ? (
        <View style={styles.slider}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="purple"
            maximumTrackTintColor="violet"
            onValueChange={setValue}
          />
          <Text>{value}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    paddingTop: 80,
  },
});

export default SwitchSlide;
