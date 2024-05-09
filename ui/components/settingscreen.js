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

export default function SettingsScreen() {
  // ... Your settings screen content
  return (
    <View style={{ flex: 1, backgroundColor: "red" , justifyContent: "space-between"}}>
      <View style={{ flex: 2, backgroundColor: "gold" }}></View>
      <View style={{ flex: 4, backgroundColor: "dodgerblue" }}></View>
      <View style={{ flex: 16, backgroundColor: "tomato" }}></View>
    </View>
  );
}
