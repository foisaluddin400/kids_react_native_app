import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const cartItems = [
  {
    id: '1',
    type: 'Video',
   thumbnail: {
        uri: "https://via.placeholder.com/150x100.png?text=Video+1",
      },
    title: 'React Native Tutorial',
    price: '$10',
  },
  {
    id: '2',
    type: 'Article',
  thumbnail: {
        uri: "https://via.placeholder.com/150x100.png?text=Video+3",
      },
    title: 'Expo Router Deep Dive',
    price: '$5',
  },
  {
    id: '3',
    type: 'Video',
       thumbnail: {
        uri: "https://via.placeholder.com/150x100.png?text=Video+1",
      },
    title: 'JavaScript Crash Course',
    price: '$8',
  },
];

const Cart = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Pressable onPress={()=>router.back()}>
        <Text style={styles.head}>⬅ Back</Text>
      </Pressable>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.thumbnail} style={styles.thumbnail} />
          <View style={styles.info}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <Pressable style={styles.removeButton}>
            <Ionicons name="trash-outline" size={20} color="#fff" />
          </Pressable>
        </View>
      ))}

      {/* Checkout Button */}
      <Pressable style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
 flex:1,
    backgroundColor:'#fff',
    padding:16,
    paddingTop:40
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
    head:{
    fontSize:24,

  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  type: {
    fontSize: 12,
    color: '#5B5BF0',
    fontWeight: '600',
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 8,
  },
  checkoutButton: {
    backgroundColor: '#5B5BF0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
