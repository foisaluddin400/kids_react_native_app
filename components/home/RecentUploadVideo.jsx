import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const RecentUploadVideo = () => {
  // Dummy data with placeholder thumbnails
  const videos = [
    {
      id: '1',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Video+1' },
      title: 'React Native Tutorial',
      description: 'Learn how to build mobile apps quickly',
      views: 1200,
    },
    {
      id: '2',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Video+2' },
      title: 'Expo Router Deep Dive',
      description: 'Master navigation with Expo Router',
      views: 900,
    },
    {
      id: '3',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Video+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      views: 1500,
    },
    {
      id: '4',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Video+4' },
      title: 'Node.js Basics',
      description: 'Learn backend with Node.js',
      views: 800,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{item.description}</Text>

      <View style={styles.bottomRow}>
        <View style={styles.viewsContainer}>
          <Ionicons name="eye-outline" size={14} color="#555" />
          <Text style={styles.viewsText}>{item.views} views</Text>
        </View>
        <Pressable style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Recent Videos</Text>
        <Pressable>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>

      {/* 2-column Grid */}
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default RecentUploadVideo;

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor:'#fff',
    padding:16,
    paddingTop:40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#5B5BF0',
  },
  card: {
    backgroundColor: '#fff',
    flex: 0.48, // 2 columns
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    paddingBottom: 8,
  },
  thumbnail: {
    width: '100%',
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 8,
    marginHorizontal: 8,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginHorizontal: 8,
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 8,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#555',
  },
  cartButton: {
    backgroundColor: '#5B5BF0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
