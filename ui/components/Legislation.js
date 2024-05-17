import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
// import RNFS from 'react-native-fs';

const Legislation = () => {
  // const [menuNames, setMenuNames] = useState([]);

  // useEffect(() => {
  //   fetchMenuNames();
  // }, []);

  // const fetchMenuNames = async () => {
  //   try {
  //     const response = await axios.get('https://admin.rta.star.ge/api/legislation.php');
  //     setMenuNames(response.data);
  //   } catch (error) {
  //     console.error('Error fetching menu names:', error);
  //   }
  // };

  // const handleMenuItemPress = async (pdfUrl, pdfTitle) => {
  //   try {
  //     const filePath = `${RNFS.DocumentDirectoryPath}/${pdfTitle}.pdf`;
  //     console.log('PDF URL:', pdfUrl);
  //     console.log('File Path:', filePath);
  
  //     const { promise } = RNFS.downloadFile({
  //       fromUrl: pdfUrl,
  //       toFile: filePath,
  //     });
  
  //     promise.then((res) => {
  //       console.log('Download Response:', res);
  //       Alert.alert('Download Successful', `PDF has been downloaded to ${res.filePath}`);
  //     }).catch((err) => {
  //       console.error('Download Error:', err);
  //       Alert.alert('Download Error', 'Failed to download PDF');
  //     });
  //   } catch (error) {
  //     console.error('Error downloading PDF:', error);
  //     Alert.alert('Download Error', 'Failed to download PDF');
  //   }
  // };

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItemContainer}
      // onPress={() => handleMenuItemPress(item.pdf, item.pdf_title)}
    >
      {/* <Text style={styles.menuName}>{item.menu_name}</Text> */}
      <View style={styles.downloadButton}>
        <Text style={styles.downloadText}>ჩამოტვირთვა</Text>
        {/* <Image source={require('./../../assets/document.png')} style={styles.downloadIcon} /> */}
      </View>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuNames}
        // renderItem={renderMenuItem}
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
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
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

export default Legislation;
