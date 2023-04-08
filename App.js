import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FcAbout } from "react-icons/fc";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Notes from "./screens/Notes";
import Quiz from "./screens/Quiz";
import Test from "./screens/Test";
import Lectures from "./screens/Lectures";
import colors from "./refs/colors";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="lectures"
          component={Lectures}
        />
      </Stack.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
            tabBarStyle: { backgroundColor: colors.secondary },
            tabBarInactiveTintColor: colors.white,
            tabBarActiveTintColor: colors.action,
          }}
        >
          <Tab.Screen
            options={{
              headerShown: false,
              title: "Home",
              tabBarLabel: "Home",
              tabBarIcon: ({ tintColor, focused }) => (
                <Image
                  source={require("./assets/Images/home.png")}
                  style={{
                    width: focused ? 40 : 30,
                    height: focused ? 40 : 30,
                    tintColor: tintColor,
                    marginBottom: focused ? 5 : 0,
                  }}
                />
              ),
            }}
            name="main"
            component={HomeStack}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              title: "Notes",
              tabBarLabel: "Notes",
              tabBarIcon: ({ tintColor, focused }) => (
                <Image
                  source={require("./assets/Images/notes.png")}
                  style={{
                    width: focused ? 40 : 30,
                    height: focused ? 40 : 30,
                    tintColor: tintColor,
                    marginBottom: focused ? 5 : 0,
                  }}
                />
              ),
            }}
            name="notes"
            component={Notes}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              title: "Quiz",
              tabBarLabel: "Quiz",
              tabBarIcon: ({ tintColor, focused }) => (
                <Image
                  source={require("./assets/Images/quiz.png")}
                  style={{
                    width: focused ? 40 : 30,
                    height: focused ? 40 : 30,
                    tintColor: tintColor,
                    marginBottom: focused ? 5 : 0,
                  }}
                />
              ),
            }}
            name="quiz"
            component={Quiz}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              title: "Tests",
              tabBarLabel: "Tests",
              tabBarIcon: ({ tintColor, focused }) => (
                <Image
                  source={require("./assets/Images/test.png")}
                  style={{
                    width: focused ? 40 : 30,
                    height: focused ? 40 : 30,
                    tintColor: tintColor,
                    marginBottom: focused ? 5 : 0,
                  }}
                />
              ),
            }}
            name="test"
            component={Test}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
