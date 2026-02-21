import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Pressable } from 'react-native';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Pressable onPress={()=>router.back()}>
        <Text style={styles.head}>⬅ Back</Text>
      </Pressable>

      {/* Map Placeholder */}
      <View style={styles.map}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/300x150.png?text=Map' }} 
          style={{ width: '100%', height: '100%', borderRadius:12 }}
        />
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Enter your phone"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, { height:80 }]}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
        multiline
      />
    </ScrollView>
  )
}

export default Contact;

const styles = StyleSheet.create({
  container: {
 flex:1,
    backgroundColor:'#fff',
    padding:16,
    paddingTop:40
  },
    head:{
    fontSize:24,

  },
  title: {
    fontSize:24,
    fontWeight:'700',
    marginBottom:20,
    color:'#222',
  },
  map: {
    width:'100%',
    height:150,
    marginBottom:20,
  },
  label: {
    fontSize:14,
    color:'#555',
    marginBottom:6,
    marginTop:12,
  },
  input: {
    backgroundColor:'#fff',
    borderRadius:10,
    paddingHorizontal:12,
    paddingVertical:10,
    borderWidth:1,
    borderColor:'#ddd',
    fontSize:14,
  },
});
