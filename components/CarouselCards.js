import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import colors from "../refs/colors";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const data = [
    {
      imgUrl: "../assets/Images/banner1.png",
    },
    {
      imgUrl: "../assets/Images/banner1.png",
    },
    {
      imgUrl: "../assets/Images/banner1.png",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {data.map((item, index) => {
          return <CarouselCardItem key={index} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});

export default CarouselCards;
