import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import colors from "../refs/colors";
import VideoPlaeyrScreen from "../components/VideoPlaeyrScreen";
import PlayListItem from "../components/PlayListItem";

const Lectures = () => {
  const route = useRoute();
  const [topics, setTopics] = useState([]);
  const [yUrl, setYUrl] = useState(
    "https://www.youtube.com/watch?v=dAgfnK528RA"
  );
  let indexOfV = yUrl.indexOf("=");
  let yId = yUrl.slice(indexOfV + 1);
  console.log(yId);
  const handleOnPress = (id) => {
    setYUrl(id);
  };
  useEffect(() => {
    setTopics(route.params?.topics);
  }, []);
  console.log(topics);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <VideoPlaeyrScreen url={yId} />
        </View>

        {/* <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={styles.btn}>PlayList</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>TakeNotes</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.topicsList}>
          <ScrollView>
            {topics.map((topic, index) => {
              return (
                <PlayListItem
                  key={index}
                  name="Number System"
                  topic={topic.name}
                  url={topic.url}
                  onPress={handleOnPress}
                />
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Lectures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  topicsList: {
    marginVertical: 20,
    marginTop: 10,
    marginTop: 250,
  },
  btn: {
    color: colors.lightWhite,
  },
  btns: {
    // paddingTop: 250,
  },
});
