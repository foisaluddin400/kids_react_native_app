import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'

const categories = [
  {
    id: '1',
    title: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47',
  },
  {
    id: '2',
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  },
  {
    id: '3',
    title: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    id: '4',
    title: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
  },
  {
    id: '5',
    title: 'Watches',
    image: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb',
  },
]

const PopularCategory = () => {

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Categories</Text>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default PopularCategory

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    marginRight: 15,
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
  },
})
