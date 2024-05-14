import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./ui/components/homescreen";
import SettingsScreen from "./ui/components/settingscreen";
import NotesScreen from "./ui/components/notesScreen";
import DetailsScreen from "./ui/components/DetailsScreen";
import NewsComponent from "./ui/components/TestScreen";
import TokoDetails from "./ui/components/TokoDetails";
import Legislation from "./ui/components/Legislation";

import { YesNoApiClientImpl } from "./data/YesNoApiClientImpl";
import { YesNoRepositoryImpl } from "./data/YesNoRepository";
import { FetchYesNoData } from "./domain/FetchYesNoDataUseCase";
import { YesNoViewModel } from "./ui/YesNoViewModel";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const apiClient = new YesNoApiClientImpl();
const repository = new YesNoRepositoryImpl(apiClient);
const fetchYesNoDataUseCase = new FetchYesNoData(repository);
const viewModel = new YesNoViewModel(fetchYesNoDataUseCase);

function NotesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotesScreen" options={{ headerTitle: "Notes" }}>
        {(props) => <NotesScreen {...props} viewModel={viewModel} />}
      </Stack.Screen>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="NewsComponent" component={NewsComponent} />
      <Stack.Screen name="TokoDetails" component={TokoDetails} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer style={{ flex: 0.1, backgroundColor: "maroon" }}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Legislation" component={Legislation} />
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
    backgroundColor: "red",
    flexDirection: "column",
  },
});
