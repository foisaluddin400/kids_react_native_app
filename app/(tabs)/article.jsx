import { router } from 'expo-router';
import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TextInput, FlatList, Image, Pressable 
} from 'react-native';

export default function Article() {

  const [search, setSearch] = useState('');

  const articles = [
    {
      id: '1',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+1' },
      title: 'React Native Tutorial',
      description: 'Learn how to build mobile apps quickly',
      date: '2026-02-19',
    },
    {
      id: '2',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+2' },
      title: 'Expo Router Deep Dive',
      description: 'Master navigation with Expo Router',
      date: '2026-02-18',
    },
    {
      id: '3',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      date: '2026-02-17',
    },
    {
      id: '4',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+4' },
      title: 'Node.js Basics',
      description: 'Learn backend with Node.js',
      date: '2026-02-16',
    },
     {
      id: '5',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      date: '2026-02-17',
    },
     {
      id: '6',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      date: '2026-02-17',
    },
     {
      id: '7',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      date: '2026-02-17',
    },
     {
      id: '8',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      date: '2026-02-17',
    },
     {
      id: '9',
      thumbnail: { uri: 'https://via.placeholder.com/150x100.png?text=Article+3' },
      title: 'JavaScript Crash Course',
      description: 'Complete guide for JS beginners',
      date: '2026-02-17',
    },
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.date}>{item.date}</Text>
          <Pressable style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </Pressable>
       <Pressable
  style={styles.cartButton}
  onPress={() => router.push(`/details/${item.id}`)}
>
  <Text style={styles.cartButtonText}>Details</Text>
</Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Article</Text>
      {/* Search Field */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search articles..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Articles List */}
      <FlatList
        data={filteredArticles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:16,
    paddingTop:40
  },
header: {
    fontSize:24,
    fontWeight:'700',
    marginBottom:16,
    color:'#222',
  },
  searchInput: {
    height: 45,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:10,
    paddingHorizontal:12,
    marginBottom:16,
  },

  card: {
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:12,
    marginBottom:16,
    shadowColor:'#000',
    shadowOpacity:0.05,
    shadowOffset:{ width:0, height:2 },
    shadowRadius:4,
    elevation:2,
    overflow:'hidden',
  },

  thumbnail: {
    width:120,
    height:90,
  },

  info: {
    flex:1,
    padding:10,
    justifyContent:'space-between',
  },

  title: {
    fontSize:16,
    fontWeight:'bold',
    color:'#222',
  },

  description: {
    fontSize:13,
    color:'#555',
    marginTop:2,
  },

  bottomRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:8,
  },

  date: {
    fontSize:12,
    color:'#888',
  },

  cartButton: {
    backgroundColor:'#5B5BF0',
    paddingVertical:4,
    paddingHorizontal:10,
    borderRadius:6,
  },

  cartButtonText: {
    color:'#fff',
    fontSize:12,
    fontWeight:'bold',
  },
});
