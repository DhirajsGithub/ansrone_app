import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../refs/colors";
import CourseItem from "./CourseItem";

const CoursesList = ({ handleLectureScreen }) => {
  const handleOnPress = (url) => {
    handleLectureScreen(url);
  };
  const courses = [
    {
      name: "Class 6th",
      url: "url",
      topics: [
        { name: "Topic 1", url: "https://www.youtube.com/watch?v=dAgfnK528RA" },
        { name: "Topic 2", url: "https://www.youtube.com/watch?v=i7AFqlaZmZA" },
        { name: "Topic 3", url: "https://www.youtube.com/watch?v=HdU_rf7eMTI" },
        { name: "Topic 4", url: "https://www.youtube.com/watch?v=fd-E18EqSVk" },
        { name: "Topic 5", url: "https://www.youtube.com/watch?v=rR95Cbcjzus" },
        { name: "Topic 6", url: "https://www.youtube.com/watch?v=kmVfZ9o-2gg" },
        { name: "Topic 7", url: "https://www.youtube.com/watch?v=yiREqzDsMP8" },
      ],
    },
    {
      name: "Math",
      url: "url",
    },
    {
      name: "Science",
      url: "url",
    },
    {
      name: "History",
      url: "url",
    },
    {
      name: "Economics",
      url: "url",
    },
  ];
  return (
    <ScrollView style={styles.container} horizontal={true}>
      {courses.map((item, index) => {
        return <CourseItem key={index} onPress={handleOnPress} course={item} />;
      })}
    </ScrollView>
  );
};

export default CoursesList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingBottom: 40,
  },
});
