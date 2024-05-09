import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import "whatwg-fetch";
// test
export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const url = "https://yesno.wtf/api";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("API response:", json);
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View>
            {data && data.answer ? (
              <View>
                <Text>Answer: {data.answer}</Text>
                <Text>Forced: {data.forced ? "true" : "false"}</Text>
                <Image
                  source={{ uri: data.image }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ) : (
              <Text>No data available</Text>
            )}
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  author: {
    fontSize: 30,
    color: "green",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});
