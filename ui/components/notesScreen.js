import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

const NotesScreen = ({ viewModel }) => {
  const [state, setState] = useState(viewModel.state);

  useEffect(() => {
    viewModel.fetchData();
    viewModel.subscribe(setState);

    return () => {
      viewModel.unsubscribe(setState);
    };
  }, []);

  const renderContent = () => {
    const { isLoading, error, data } = state;

    if (isLoading) {
      return <ActivityIndicator size="large" color ="#0000ff" />;
    }

    if (error) {
      return <Text>Error: {error}</Text>;
    }

    if (data) {
      return (
        <View>
          <Text>Answer: {data.answer}</Text>
          <Text>Forced: {data.forced ? 'true' : 'false'}</Text>
          <Image source={{ uri: data.image }} style={styles.image} />
        </View>
      );
    }

    return null;
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default NotesScreen;
