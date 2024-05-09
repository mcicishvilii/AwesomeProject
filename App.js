import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
  Button,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./components/homescreen";
import SettingsScreen from "./components/settingscreen";
import NotesScreen from "./components/notesScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NotesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={NotesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer style={{ flex: 0.1, backgroundColor: 'maroon' }}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Notes" component={NotesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
});
