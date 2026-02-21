import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const notifications = [
  {
    id: '1',
    title: 'New Video Uploaded',
    description: 'React Native Tutorial has been uploaded. Check it out!',
    time: '2h ago',
    icon: 'videocam-outline',
  },
  {
    id: '2',
    title: 'Article Published',
    description: 'New article "Expo Router Deep Dive" is now available.',
    time: '5h ago',
    icon: 'document-text-outline',
  },
  {
    id: '3',
    title: 'Profile Update',
    description: 'Your profile has been successfully updated.',
    time: '1d ago',
    icon: 'person-outline',
  },
  {
    id: '4',
    title: 'Cart Reminder',
    description: 'You have items in your cart. Complete your purchase!',
    time: '2d ago',
    icon: 'cart-outline',
  },
];

const Notification = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Pressable onPress={()=>router.back()}>
        <Text style={styles.head}>⬅ Back</Text>
      </Pressable>

      {notifications.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={24} color="#5B5BF0" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Notification;

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
    head:{
    fontSize:24,

  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
