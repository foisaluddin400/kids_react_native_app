import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function videoDetails() {
  const { id } = useLocalSearchParams();

  // Dummy selected article
  const article = {
    id,
   thumbnail: {
        uri: "https://via.placeholder.com/150x100.png?text=Video+1",
      },
      title: "React Native Tutorial",
      description: "Learn how to build mobile apps quickly",
      date: "2026-02-19",
  };

  const relatedArticles = [
    {
      id: '2',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Related+1' },
      title: 'Expo Router Deep Dive',
    },
    {
      id: '3',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Related+2' },
      title: 'JavaScript Crash Course',
    },
    {
      id: '4',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Related+3' },
      title: 'Node.js Basics',
    },
  ];

  const renderRelated = ({ item }) => (
    <Pressable
      style={styles.relatedCard}
      onPress={() => router.push(`/details/${item.id}`)}
    >
      <Image source={item.thumbnail} style={styles.relatedImage} />
      <Text style={styles.relatedTitle} numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} color="#333" />
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      {/* Thumbnail */}
      <Image source={article.thumbnail} style={styles.image} />

      {/* Title */}
      <Text style={styles.title}>{article.title}</Text>

      {/* Date */}
      <Text style={styles.date}>{article.date}</Text>

      {/* Description */}
      <Text style={styles.description}>{article.description}</Text>

      {/* Add to Cart */}
      <Pressable style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Add to Cart</Text>
      </Pressable>

      {/* Related Section */}
      <Text style={styles.sectionTitle}>Related Articles</Text>

      <FlatList
        data={relatedArticles}
        renderItem={renderRelated}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 6,
  },
  date: {
    fontSize: 13,
    color: '#888',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 20,
  },
  cartButton: {
    backgroundColor: '#5B5BF0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111',
  },
  relatedCard: {
    width: 140,
    marginRight: 12,
  },
  relatedImage: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    marginBottom: 6,
  },
  relatedTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
});