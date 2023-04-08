import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../refs/colors";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HeaderComp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo name="list" size={30} color={colors.lightWhite} />
      </TouchableOpacity>
      <View style={styles.search}>
        <TouchableOpacity>
          <Feather
            name="search"
            size={24}
            color={colors.lightWhite}
            style={{ marginHorizontal: 8 }}
          />
        </TouchableOpacity>
        <TextInput placeholder="Type Here" style={styles.input} />
      </View>
      <TouchableOpacity>
        <Feather name="download" size={24} color={colors.lightWhite} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 8,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 15,
  },
  search: {
    flexDirection: "row",
    backgroundColor: colors.lightGray,
    color: "black",
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    flexGrow: 1,
    borderColor: colors.lightWhite,
    borderWidth: 2,
    marginHorizontal: 20,
  },
});
