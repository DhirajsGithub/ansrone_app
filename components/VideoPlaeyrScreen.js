import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Video, ResizeMode } from "expo-av";
import YouTubePlayer from "react-native-youtube-iframe";

const VideoPlaeyrScreen = ({ url }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <YouTubePlayer height={400} play={true} videoId={url} />
    </View>
    // <View style={styles.container}>
    //   <Video
    //     ref={video}
    //     style={styles.video}
    //     source={{
    //       uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    //     }}
    //     useNativeControls
    //     resizeMode={ResizeMode.CONTAIN}
    //     isLooping
    //     onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    //   />
    //   <View style={styles.buttons}>
    //     <Button
    //       title={status.isPlaying ? "Pause" : "Play"}
    //       onPress={() =>
    //         status.isPlaying
    //           ? video.current.pauseAsync()
    //           : video.current.playAsync()
    //       }
    //     />
    //   </View>
    // </View>
  );
};

export default VideoPlaeyrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2000,
  },
});
