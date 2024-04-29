import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { createNote, readNotes, updateNote, deleteNote } from "./db/dao";
const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  
  const handleSaveNote = async () => {
    if (title && content) {
      console.log('Title:', title);
      console.log('Content:', content);
      await createNote(title, content);
      console.log('Note created successfully');
      navigation.goBack();
    } else {
      console.log('Title or content is empty');
      alert("Please enter title and content");
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Note Title"
        style={styles.textInput}
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        multiline={true}
        placeholder="Note Description"
        style={styles.textInput}
      />
      <Button title="Save Note" onPress={handleSaveNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#eee',
  },
});

export default AddNoteScreen;
