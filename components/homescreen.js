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

const DATA = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/200",
    title: "Cat",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/200",
    title: "Archway",
  },

  {
    id: "3",
    imageUrl: "https://picsum.photos/200",
    title: "Cat",
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/200",
    title: "Archway",
  },

  {
    id: "5",
    imageUrl: "https://picsum.photos/200",
    title: "Cat",
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/200",
    title: "Archway",
  },

  {
    id: "7",
    imageUrl: "https://picsum.photos/200",
    title: "Cat",
  },
  {
    id: "8",
    imageUrl: "https://picsum.photos/200",
    title: "Archway",
  },
];
export default function HomeScreen()  {

  const [text, onChangeText] = React.useState("search here");
  const [number, onChangeNumber] = React.useState("");

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.listImage} />
      <Text style={styles.listText}>{item.title}</Text>
    </View>
  );
  // ... Your settings screen content
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topAppBarRowStyle}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />

        {/* Spacer to push center icon */}
        <View style={{ flex: 1 }} />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>

      {/* "Chats" top title*/}
      <View style={{ flex: 0.08, backgroundColor: "yellow" }}>
        <Text style={{ fontSize: 40 }}>Chats</Text>
      </View>

      {/* search bar*/}
      <View style={{ flex: 0.05, backgroundColor: "green" }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      {/* main content */}
      <View style={{ flex: 0.7, backgroundColor: "grey" }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "red",
    flexDirection: "column",
  },


  textStyle: {
    backgroundColor: "blue",
    textDecorationColor: "black",
  },
  tinyLogo: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: 40,
    height: 40,
  },

  topAppBarRowStyle: {
    flex: 0.07,
    backgroundColor: "blue",
    flexDirection: "row",
  },

  listContainer: {
    flex: 0.7,
    backgroundColor: "grey",
  },
  listItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  listText: {
    fontSize: 18,
  },
})