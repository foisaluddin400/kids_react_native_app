import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TextInput, Pressable, Image, ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileUpdate() {

  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('+880 1234 567890');
  const [address, setAddress] = useState('123, Sample Street, Dhaka');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={()=>router.back()}>
        <Text style={styles.head}>⬅ Back</Text>
      </Pressable>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100.png?text=Profile' }} 
          style={styles.profileImage} 
        />
        <Pressable style={styles.editIcon}>
          <Ionicons name="pencil-outline" size={20} color="#fff" />
        </Pressable>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput 
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Address</Text>
        <TextInput 
          style={[styles.input, { height:80 }]}
          value={address}
          onChangeText={setAddress}
          multiline
        />

        {/* Update Button */}
        <Pressable style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    backgroundColor:'#fff',
    padding:16,
    paddingTop:40
  },
  imageContainer: {
    alignSelf:'center',
    marginBottom:20,
  },
  head:{
    fontSize:24,

  },
  profileImage: {
    width:100,
    height:100,
    borderRadius:50,
  },
  editIcon: {
    position:'absolute',
    bottom:0,
    right:0,
    backgroundColor:'#5B5BF0',
    width:30,
    height:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#fff',
  },
  form: {
    marginTop:10,
  },
  label: {
    fontSize:14,
    color:'#555',
    marginBottom:4,
    marginTop:12,
  },
  input: {
    backgroundColor:'#fff',
    borderRadius:10,
    paddingHorizontal:12,
    paddingVertical:10,
    fontSize:14,
    borderWidth:1,
    borderColor:'#ddd',
  },
  updateButton: {
    marginTop:20,
    backgroundColor:'#5B5BF0',
    paddingVertical:14,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset:{ width:0, height:2 },
    shadowRadius:6,
    elevation:2,
  },
  updateButtonText: {
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },
});
