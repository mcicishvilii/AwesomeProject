import { Button } from "@rneui/base";
import React, { useEffect, useState } from "react";
import AwesomeButton from "react-native-really-awesome-button";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

const NotesScreen = ({ viewModel, navigation }) => {
  const [state, setState] = useState(viewModel.state);

  useEffect(() => {
    viewModel.fetchData();
    viewModel.subscribe(setState);
    return () => {
      viewModel.unsubscribe(setState);
    };
  }, []);

  const refreshData = () => {
    viewModel.fetchData();
  };

  const renderContent = () => {
    const { isLoading, error, data } = state;
    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    if (error) {
      return <Text>Error: {error}</Text>;
    }
    if (data) {
      return (
        <View style={styles.insideCont}>
          <Text>Answer: {data.answer}</Text>
          <Text>Forced: {data.forced ? "true" : " false"}</Text>
          <Image source={{ uri: data.image }} style={styles.image} />
          <AwesomeButton onPress={() => navigation.navigate("DetailsScreen")}>
            <Text>Go to Details</Text>
          </AwesomeButton>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderContent()}</View>
      <View style={styles.buttonContainer}>
        <Button title="Refresh Data" onPress={refreshData} />
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

export default NotesScreen;