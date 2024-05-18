import React from 'react';
import { View, FlatList, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const TopOfferCard = ({ image, title, description }) => (
  <View style={styles.topOfferCard}>
    <Image source={{ uri: image }} style={styles.topOfferImage} />
    <View style={styles.topOfferDetails}>
      <Text style={styles.topOfferTitle}>{title}</Text>
      <Text style={styles.topOfferDescription}>{description}</Text>
    </View>
  </View>
);

const PopularOfferCard = ({ image, title }) => (
  <ImageBackground source={{ uri: image }} style={styles.popularOfferCard}>
    <Text style={styles.popularOfferTitle}>{title}</Text>
  </ImageBackground>
);

const Hotsale = () => {
  const topOffers = [
    { id: 1, image: "https://picsum.photos/150", title: 'Top Offer 1', description: 'Description for Top Offer 1' },
    { id: 2, image: "https://picsum.photos/150", title: 'Top Offer 2', description: 'Description for Top Offer 2' },
    { id: 3, image: "https://picsum.photos/150", title: 'Top Offer 3', description: 'Exciting deals on this top offer!' },
    { id: 4, image: "https://picsum.photos/150", title: 'Top Offer 4', description: 'Limited-time offer, grab it now!' },
    { id: 5, image: "https://picsum.photos/150", title: 'Top Offer 5', description: 'Exclusive discounts just for you.' },
    { id: 6, image: "https://picsum.photos/150", title: 'Top Offer 6', description: 'Don\'t miss out on this amazing deal!' },
    { id: 7, image: "https://picsum.photos/150", title: 'Top Offer 7', description: 'Unlock special savings with this offer.' },
    { id: 8, image: "https://picsum.photos/150", title: 'Top Offer 8', description: 'Get more for less with this top offer.' },
    { id: 9, image: "https://picsum.photos/150", title: 'Top Offer 9', description: 'Incredible discounts on selected items.' },
    { id: 10, image: "https://picsum.photos/150", title: 'Top Offer 10', description: 'Unbeatable prices, limited stocks!' },
  ];

  const popularOffers = [
    { id: 1, image: "https://picsum.photos/200", title: 'Popular Offer 1' },
    { id: 2, image: "https://picsum.photos/200", title: 'Popular Offer 2' },
    { id: 3, image: "https://picsum.photos/200", title: 'Crowd Favorite' },
    { id: 4, image: "https://picsum.photos/200", title: 'Highly Rated' },
    { id: 5, image: "https://picsum.photos/200", title: 'Popular Choice' },
    { id: 6, image: "https://picsum.photos/200", title: 'Bestselling Item' },
    { id: 7, image: "https://picsum.photos/200", title: 'Top Seller' },
    { id: 8, image: "https://picsum.photos/200", title: 'Popular Demand' },
    { id: 9, image: "https://picsum.photos/200", title: 'Trending Now' },
    { id: 10, image: "https://picsum.photos/200", title: 'Most Wanted' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction icon="menu" />
        <Appbar.Content title="HOTSALE" />
        <Appbar.Action icon="magnify" />
      </Appbar.Header>
      <FlatList
        data={[{ category: 'Top Offers' }, { category: 'Popular Offers' }]}
        keyExtractor={(item, index) => `${item.category}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.category}</Text>
            {item.category === 'Top Offers' ? (
              <FlatList
                data={topOffers}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({ item }) => <TopOfferCard {...item} />}
              />
            ) : (
              <FlatList
                data={popularOffers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PopularOfferCard {...item} />}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  topOfferCard: {
    marginHorizontal: 8,
  },
  topOfferImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  topOfferDetails: {
    paddingVertical: 8,
  },
  topOfferTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  topOfferDescription: {
    fontSize: 14,
    color: 'gray',
  },
  popularOfferCard: {
    marginHorizontal: 8,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularOfferTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Hotsale;