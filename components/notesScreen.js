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


import React, { useState, useEffect } from "react";
import { createNote, readNotes, updateNote, deleteNote } from "./db/dao";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";

export default function wNotesScreen() {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getNotes = async () => {
    const allNotes = await readNotes();
    setNotes(allNotes);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleAddNote = async () => {
    if (title && content) {
      await createNote(title, content);
      setTitle("asdasd");
      setContent("aasdasd");
      getNotes();
    }
  };

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
          data={notes} // Use notes state variable here
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={() => (
            // Display if no notes
            <Text style={styles.listText}>No notes yet!</Text>
          )}
        />
      </View>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={() => navigation.navigate('AddNewNote')}
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
