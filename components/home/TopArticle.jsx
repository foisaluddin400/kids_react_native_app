import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const articles = [
  {
    id: '1',
    title: 'Modern Sneakers',
    description: 'Comfortable and stylish everyday sneakers.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    views: 120,
  },
  {
    id: '2',
    title: 'Smart Watch',
    description: 'Track your fitness and stay connected.',
    image: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb',
    views: 95,
  },
  {
    id: '3',
    title: 'Beauty Kit',
    description: 'Premium skincare and beauty essentials.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    views: 140,
  },
  {
    id: '4',
    title: 'Casual Jacket',
    description: 'Perfect outfit for winter season.',
    image: 'https://images.unsplash.com/photo-1520975922284-8b456906c813',
    views: 80,
  },
]

const TopArticle = () => {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

     

      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.views}>
            <Ionicons name="eye-outline" size={16} color="#666" />
            <Text style={styles.viewText}>{item.views}</Text>
          </View>

          <Pressable style={styles.cartBtn}>
            <Text style={styles.cartText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>

      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Top Articles</Text>
        <Pressable>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>

      <FlatList
        data={articles.slice(0, 4)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default TopArticle

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
    alignItems: 'center',
    marginBottom: 15,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  viewAll: {
    color: '#007bff',
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 120,
  },

  cardContent: {
    padding: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  views: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },

  cartBtn: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  cartText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
})
