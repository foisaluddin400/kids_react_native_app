import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Verify() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Account</Text>
      <TextInput placeholder="Enter OTP" style={styles.input}/>
      <Pressable style={styles.btn} onPress={() => router.replace('/(tabs)/')}>
        <Text style={styles.btnText}>Verify</Text>
      </Pressable>
    </View>
  );
}
