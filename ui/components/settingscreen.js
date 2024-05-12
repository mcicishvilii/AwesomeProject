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



const itemsPerPage = 16;

const SettingsScreen = ({ navigation }) => {
  const [totalPages, setTotalpages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  
  async function fetchData() {
    setRefreshing(true);
    try {
      let response = await fetcher(currentPage, itemsPerPage);
      setTotalpages(response.metadata.total / itemsPerPage);
      let data: [] = response.results;
      setItems(data);
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
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
    alignItems: "center",
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
});

export default SettingsScreen;