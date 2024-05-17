import React from 'react';
import { View,StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Hotsale = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.container}>
        <Icon name="menu" size={24} />
        <Appbar.Content title="HOTSALE" />
        <Appbar.Action icon="magnify" />
      </Appbar.Header>
      {/* Your screen content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "skyblue",
      marginHorizontal: 10,
    },
  });
  

export default Hotsale;