import { View, Text } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect } from "react";
import React from "react";

const AudioProvider = () => {
  const status = {
    // canAskAgain: true,
    // expires: "never",
    // granted: true,
    // status: "granted",
  };

  const getPermission = async () => {
    const res = await MediaLibrary.getPermissionsAsync();
    console.log(res);
    status =res
  };
  useEffect(() => {
    getPermission();
  });
  useEffect(()=>{
    const {granted,canAskAgain} = status
    if (granted) {
        //Get songs
    }
    else if(!granted && canAskAgain){
        //Request again
        MediaLibrary.requestPermissionsAsync()
    }
    else if(!granted && !canAskAgain){
        //Go to settings
    }

  })
  return (
    <View>
      <Text>AudioProvider</Text>
    </View>
  );
};

export default AudioProvider;
