import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "/home/mcici/Desktop/myProj/AwesomeProject/ui/components/homescreen";
import SettingsScreen from '/home/mcici/Desktop/myProj/AwesomeProject/ui/components/settingscreen';
import NotesScreen from '/home/mcici/Desktop/myProj/AwesomeProject/ui/components/notesScreen';

import { YesNoApiClientImpl } from './data/YesNoApiClientImpl';
import { YesNoRepositoryImpl } from './data/YesNoRepository';
import { FetchYesNoData } from './domain/FetchYesNoDataUseCase';
import { YesNoViewModel } from "./ui/YesNoViewModel";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const apiClient = new YesNoApiClientImpl();
const repository = new YesNoRepositoryImpl(apiClient);
const fetchYesNoDataUseCase = new FetchYesNoData(repository);
const viewModel = new YesNoViewModel(fetchYesNoDataUseCase);

function NotesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={() => <NotesScreen viewModel={viewModel} />} />
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