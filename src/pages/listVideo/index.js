import React, { useEffect, useState } from "react";
import api from "axios";
import { Video, AVPlaybackStatus } from "expo-av";

import { SafeAreaView, Button, FlatList, View } from "react-native";

export const ListVideo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [listVideos, setLisVideos] = useState([]);

  useEffect(() => {
    api
      .get("http://192.168.1.5:3002/api/videos")
      .then((response) => {
        setLisVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Video
          ref={video}
          style={{ height: 200 }}
          source={{
            uri: listVideos ? listVideos[0]?.url : ''
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          style={{ width: 200 }}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </SafeAreaView>
  );
};
