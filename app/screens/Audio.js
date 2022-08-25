import { StyleSheet, Text, View } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import { useEffect } from "react";

import React from "react";

const Audio = () => {
    // const [status, requestPermission] = MediaLibrary.usePermissions();
    const getPermition = async()=>{
        const res = await MediaLibrary.getPermissionsAsync()
        console.log(res);
    }
    useEffect(()=>{
        getPermition()
        
    })
  return (
    <View style={styles.container}>
      <Text>Audio</Text>
    </View>
  );
};

export default Audio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
