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

import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";

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

export default function NotesScreen() {

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.listImage} />
      <Text style={styles.listText}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* "Chats" top title*/}
      <View style={[styles.chatsHeader, { alignItems: "start" }]}>
        <View style={{ alignItems: "baseline", backgroundColor: "yellow" }}>
          <Text style={styles.chatsHeaderText}>Notes</Text>
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "green" }}>
          <Image
            style={{ marginEnd: 20 }}
            source={require("/home/mcici/Desktop/myProj/AwesomeProject/assets/favicon.png")}
          />
          <Image
            style={styles.tinyLogo}
            source={require("/home/mcici/Desktop/myProj/AwesomeProject/assets/favicon.png")}
          />
        </View>
      </View>

      <View style={styles.mainContent}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => {
          alert("Add Note");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "column",
  },

  chatsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chatsHeaderText: {
    fontSize: 40,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
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
});
