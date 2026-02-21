import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const menuItems = [
    { id: '1', title: 'Profile Update', route: '/profilePages/profileUpdate', icon: 'person-outline' },
    { id: '2', title: 'Change Password', route: '/profilePages/changePassword', icon: 'lock-closed-outline' },
    { id: '3', title: 'Terms & Condition', route: '/terms', icon: 'document-text-outline' },
    { id: '4', title: 'Privacy Policy', route: '/privacy', icon: 'shield-checkmark-outline' },
    { id: '5', title: 'FAQ', route: '/profilePages/faq', icon: 'help-circle-outline' },
    { id: '6', title: 'Contact', route: '/profilePages/contact', icon: 'call-outline' },
    { id: '7', title: 'Log Out', route: '/(auth)/login', icon: 'log-out-outline', isLogout: true },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      {menuItems.map(item => (
        <Pressable
          key={item.id}
          onPress={() => router.push(item.route)}
          style={({ pressed }) => [
            styles.card,
            item.isLogout && styles.logoutCard,
            pressed && styles.pressedCard
          ]}
        >
          <View style={styles.row}>
            <Ionicons name={item.icon} size={22} color={item.isLogout ? '#E53935' : '#5B5BF0'} />
            <Text style={[styles.cardText, item.isLogout && { color: '#E53935' }]}>{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </Pressable>
      ))}
    </ScrollView>
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
  card: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:16,
    borderRadius:12,
    marginBottom:12,
    shadowColor:'#000',
    shadowOpacity:0.05,
    shadowOffset:{ width:0, height:2 },
    shadowRadius:4,
    elevation:2,
  },
  logoutCard: {
    backgroundColor:'#ffe6e6',
  },
  pressedCard: {
    opacity:0.7,
  },
  row: {
    flexDirection:'row',
    alignItems:'center',
    gap:12,
  },
  cardText: {
    fontSize:16,
    fontWeight:'500',
    color:'#222',
  },
});
