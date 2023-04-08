import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import colors from "../refs/colors";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={require("../assets/Images/banner1.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: SLIDER_WIDTH,
    // marginHorizontal: 20,
    height: 160,
    borderRadius: 30,
    backgroundColor: "gray",
  },
});

export default CarouselCardItem;
