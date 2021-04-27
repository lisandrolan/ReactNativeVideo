/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const Constants = {
  VIDEO_URL:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
};
const onBuffer = (bufferObj) => {
  console.log('buffering', bufferObj.isBuffering);
};

const videoError = (error) => {
  console.log('video error:', error);
};
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Video
        controls
        resizeMode="cover"
        source={{
          uri:
            'https://d30o7j00smmz5f.cloudfront.net/1/us-east-1%3A27cd9937-ba1a-4c89-bf84-f03b4c25f1c7/videos/TSMM_1602689932300.mp4',
        }} // Can be a URL or a localfile.
        // ref={(ref) => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onEnd={this.onEnd} // Callback when playback finishes
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
