import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,FlatList } from 'react-native';
import axios from 'axios';


const TokoDetails = ({ route }) => {
  const [newsDetails, setNewsDetails] = useState(null);
  const { rec_id } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchNewsDetails();
  }, []);

  const fetchNewsDetails = async () => {
    try {
      const response = await axios.get(`https://admin.rta.star.ge/api/news.php?rec_id=${rec_id}`);
      setNewsDetails(response.data[0]);
    } catch (error) {
      console.error('Error fetching news details:', error);
    }
  };

  return newsDetails ? (
    <View style={styles.container}>
      <Text style={styles.title}>{newsDetails.title}</Text>
      <Image
        source={{ uri: `https://admin.rta.star.ge/${newsDetails.img}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <FlatList
        data={newsDetails.gallery}
        renderItem={({ item }) => (
          <Image
            source={{ uri: `https://admin.rta.star.ge/${item.img}` }}
            style={styles.galleryImage}
            resizeMode="contain"
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.date}>{newsDetails.date}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  galleryImage: {
    width: 300,
    height: 200,
    marginRight: 16,
  },
});

export default TokoDetails;