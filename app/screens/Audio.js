import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Audio = () => {
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
