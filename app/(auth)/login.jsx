'use client';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <Pressable style={styles.btn} onPress={() => router.replace('/(tabs)/')}>
        <Text style={styles.btnText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/forgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/signup')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',padding:20},
  title:{fontSize:22,fontWeight:'600',marginBottom:20},
  input:{borderWidth:1,borderRadius:10,padding:12,marginBottom:12},
  btn:{backgroundColor:'#5B5BF0',padding:14,borderRadius:10},
  btnText:{color:'#fff',textAlign:'center',fontWeight:'600'},
  link:{textAlign:'center',marginTop:12,color:'#5B5BF0'}
});
