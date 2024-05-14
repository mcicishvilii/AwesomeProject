import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const NewsComponent = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://admin.rta.star.ge/api/news.php');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('TokoDetails', { rec_id: item.rec_id })}
      >
        <Image
          source={{ uri: `https://admin.rta.star.ge/${item.img}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>rec id: {item.rec_id}</Text>
    </View>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.rec_id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  newsItemContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  date: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default NewsComponent;