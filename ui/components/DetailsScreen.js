import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const NotesScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (taskName.trim() !== "") {
      const newNote = {
        id: Date.now(),
        title: taskName,
        description: description,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setTaskName("");
      setDescription("");
    }
  };

  const renderNote = ({ item }) => (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      {item.description && (
        <Text style={styles.noteDescription}>{item.description}</Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Todo List</Text>
      </View>
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.notesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        {/* <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <Text style={styles.addButtonText}>Add Note</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.addButton} onPress={navigation.navigate("NewsComponent")}>
          <Text style={styles.addButtonText}>Add Note</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f2f2f2",
  },
  backButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  notesContainer: {
    padding: 16,
  },
  noteContainer: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  noteDescription: {
    fontSize: 14,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default NotesScreen;