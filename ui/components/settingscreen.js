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
import React, { useEffect, useState } from "react";

const SettingsScreen = ({ navigation }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [data, setState] = useState([]);
  const [pageNow, setPageNow] = useState(1);

  const fetchReqres = () => {
    fetch(`https://reqres.in/api/users?page=${pageNow}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setState((prevState) => [...prevState, ...json.data]);
        setTotalPages(json.total_pages);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchReqres();
  }, [pageNow]);


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <FlatList
          data={data}
          onEndReachedThreshold={0.5}
          onEndReached={() => (pageNow < totalPages ? setPageNow(pageNow + 1) : null)}
          renderItem={({ item }) => (
            <View style={styles.itemContainer} key={item.id}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>
                  {item.first_name} {item.last_name}
                </Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button title="Refresh Data" onPress={() => navigation.navigate("NotesScreen")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  insideCont: {
    padding: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
});

export default SettingsScreen;