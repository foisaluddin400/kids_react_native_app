import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Hero = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7' }}
      style={styles.hero}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Discover Your Style</Text>
        <Text style={styles.description}>
          Explore the latest trends and find your perfect look with our premium collection.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Hero

const styles = StyleSheet.create({
  hero: {
    height: 500,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 25,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
