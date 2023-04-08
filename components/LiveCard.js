import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../refs/colors";

let width = Dimensions.get("window").width;

const LiveCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/Images/banner2.png")}
      />
      <TouchableOpacity>
        <Text style={styles.text}>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiveCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: width - 10,
    height: 150,
  },
  text: {
    padding: 10,
    textAlign: "center",
    backgroundColor: colors.action,
  },
});
