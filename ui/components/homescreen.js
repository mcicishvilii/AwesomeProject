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
      <View style={[styles.topAppBarRowStyle, { alignItems: 'center' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View style={{ flex: 1 }} />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      </View>

      {/* "Chats" top title*/}
      <View style={[styles.chatsHeader, { alignItems: 'start' }]}>
        <View style={{ alignItems: 'baseline' }}>
          <Text style={styles.chatsHeaderText}>Chats</Text>
        </View>
      </View>

      {/* search bar*/}
      <View style={[styles.searchBarContainer, { alignItems: 'start' }]}>
        <TextInput
          style={styles.searchBar}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search here"
        />
      </View>

      {/* main content */}
      <View style={styles.mainContent}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
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

  chatsHeader: {
    backgroundColor: "yellow",
    paddingVertical: 10,
  },
  chatsHeaderText: {
    fontSize: 40,
  },
  searchBarContainer: {
    backgroundColor: 'green',
    paddingVertical: 10, // Add some vertical padding for spacing
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'grey',
    color: 'red',
    borderRadius: 5,
    padding: 20,
  },
  topAppBarRowStyle: {
    backgroundColor: 'blue',
    paddingVertical: 10, // Add some vertical padding for spacing
  },

  mainContent: {
    flex: 1,
    backgroundColor: 'grey',
  },
  listContainer: {
    paddingVertical: 10,
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