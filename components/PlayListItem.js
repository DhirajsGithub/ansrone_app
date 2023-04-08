import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../refs/colors";

const PlayListItem = ({ topic, name, url, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(url)}>
      <Image
        style={{
          height: 100,
          width: 150,
          marginRight: 20,
          borderRadius: 10,
          marginVertical: 10,
        }}
        source={require("../assets/Images/thumbnail.jpeg")}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.text}>Maths</Text>
        <Text style={[styles.text, { fontSize: 18 }]}>{name}</Text>
        <Text style={styles.text}>{topic}</Text>
        <Text style={styles.text}>Class 6</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.lightWhite,
  },
});
