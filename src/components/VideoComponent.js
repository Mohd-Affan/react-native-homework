import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const VideoComponent = () => {
  const [isBuffering, setBuffering] = useState(false);
  //   useEffect(() => {
  //     if (this.ref.video) {
  //       this.ref.video.play();
  //     }
  //   }, []);
  return (
    <View style={styles.container}>
      <VideoPlayer
        // ref={'video'}
        video={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        // style={{flex: 1}}
        onEnd={() => alert('onEndReached')}
        onLoad={(a) => {
          setBuffering(false);
        }}
        // o={() => {console.log('On Buffer')}}
        onBuffer={(a) => {
          setBuffering(a.isBuffering);
          //   console.log('On Buffer', a);
        }}
        // onLoadStart={a => setBuffering(true)}
        // onProgress={progress => console.log('OnProgress: ', progress)}
        videoWidth={Dimensions.get('window').width}
        videoHeight={Dimensions.get('screen').height}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      />
      {isBuffering ? (
        <View style={styles.buffer}>
          <ActivityIndicator
            // style={styles.buffer}
            animating={true}
            size={'large'}
            color={'white'}
          />
        </View>
      ) : null}
    </View>
  );
};

export default VideoComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    width: '100%',
    height: '90%',
    marginBottom: 20,
  },
  buffer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: '100%',
    width: '100%',
  },
});
