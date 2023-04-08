import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../refs/colors";

const Notes = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={{ color: "white" }}>Notes will be Available Soon</Text>
      </SafeAreaView>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
