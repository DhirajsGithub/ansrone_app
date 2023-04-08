import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../refs/colors";
import HeaderComp from "../components/HeaderComp";
import CarouselCards from "../components/CarouselCards";
import LiveCards from "../components/LiveCards";
import { Entypo } from "@expo/vector-icons";
import CoursesList from "../components/CoursesList";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const handleLectureScreen = (course) => {
    if (course.topics) {
      navigation.navigate("lectures", { topics: course.topics });
    } else {
      alert("Topics will be updated soon");
    }

    console.log(course);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComp />
        <ScrollView>
          <CarouselCards />
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: colors.lightWhite,
                paddingHorizontal: 10,
              }}
            >
              Hi, Sneha 🚀
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: colors.action,
                paddingHorizontal: 10,
              }}
            >
              Live
              <Entypo name="dot-single" size={24} color={colors.action} />
            </Text>
          </View>
          <LiveCards />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colors.lightWhite,
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            Cohort Based Courses ›
          </Text>
          <CoursesList handleLectureScreen={handleLectureScreen} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
