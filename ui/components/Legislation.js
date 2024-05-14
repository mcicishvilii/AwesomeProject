import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'; // Import Alert
import axios from 'axios';

const Legislation = () => {
  const [menuNames, setMenuNames] = useState([]);

  useEffect(() => {
    fetchMenuNames();
  }, []);

  const fetchMenuNames = async () => {
    try {
      const response = await axios.get('https://admin.rta.star.ge/api/legislation.php');
      setMenuNames(response.data);
    } catch (error) {
      console.error('Error fetching menu names:', error);
    }
  };

  const handleMenuItemPress = (pdfText) => {
    Alert.alert('PDF Text', pdfText);
  };

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItemContainer}
      onPress={() => handleMenuItemPress(item.pdf)}
    >
      <Text style={styles.menuName}>{item.menu_name}</Text>
      <View style={styles.downloadButton}>
        <Text style={styles.downloadText}>ჩამოტვირთვა</Text>
        <Image source={require('./../../assets/document.png')} style={styles.downloadIcon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuNames}
        renderItem={renderMenuItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 5, // Add border radius for rounded corners
    backgroundColor: '#f5f5f5', // Light gray background
    borderWidth: 1, // Thin border
    borderColor: '#e0e0e0', // Light gray border color
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10, // Add padding for better spacing within border
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadText: {
    marginRight: 5,
  },
  downloadIcon: {
    width: 20,
    height: 20,
  },
});
r
export default Legislation;
