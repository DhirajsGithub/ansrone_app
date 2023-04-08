import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../refs/colors";

const CourseItem = ({ onPress, course }) => {
  return (
    <TouchableOpacity onPress={() => onPress(course)} style={styles.view}>
      <Text
        style={{ color: colors.lightWhite, fontSize: 22, fontWeight: "bold" }}
      >
        {course.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CourseItem;

const styles = StyleSheet.create({
  view: {
    padding: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: colors.action,
    borderRadius: 20,
  },
});
