'use client'
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useGetAllBlogQuery } from '../../redux/services/blogApi';

const faqData = [
  {
    id: '1',
    question: 'How can I reset my password?',
    answer: 'Go to profile -> change password and follow the instructions.',
  },
  {
    id: '2',
    question: 'How to contact support?',
    answer: 'You can contact us via the Contact page or email support@example.com.',
  },
  {
    id: '3',
    question: 'How to add items to the cart?',
    answer: 'Browse videos or articles and click "Add to Cart" button.',
  },
  {
    id: '4',
    question: 'Can I update my profile information?',
    answer: 'Yes! Go to Profile -> Profile Update to edit your information.',
  },
];

const Faq = () => {
  const {data:blog} = useGetAllBlogQuery()
console.log("API DATA:", blog);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={()=>router.back()}>
        <Text style={styles.head}>⬅ Back</Text>
      </Pressable>

      {blog?.data.map((item) => (
        <Pressable
          key={item.id}
          style={styles.card}
          onPress={() => toggleExpand(item.id)}
        >
          <View style={styles.row}>
            <Text style={styles.question}>{item.title}</Text>
            <Ionicons
              name={expandedId === item.id ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={20}
              color="#555"
            />
          </View>
          {expandedId === item.id && <Text style={styles.answer}>{item.description}</Text>}
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Faq;

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
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    flex: 1,
    marginRight: 8,
  },
  answer: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
