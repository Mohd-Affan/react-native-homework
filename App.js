import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{padding: 8}}>
        <Text>Some sample text</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
