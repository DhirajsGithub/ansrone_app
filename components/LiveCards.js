import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LiveCard from "./LiveCard";

const LiveCards = () => {
  const arr = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {arr.map((item) => {
          return <LiveCard key={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default LiveCards;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
