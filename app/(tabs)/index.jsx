import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Hero from '../../components/home/Hero'; 
import PopularCategory from '../../components/home/PopularCategory'; 
import TopArticle from '../../components/home/TopArticle'; 
import RecentUploadVideo from '../../components/home/RecentUploadVideo'; 

export default function Home() {

  const data = [{ id: 'home-content' }]; 

  // Dummy counts
  const notificationCount = 3;
  const cartCount = 5;

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        {/* Left: Logo + Name */}
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.appName}>MyShop</Text>
        </View>

        {/* Right: Notification & Cart */}
        <View style={styles.rightSection}>
          {/* Notification */}
          <Pressable onPress={() => router.push('/profilePages/notification')} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={26} color="#333" />
            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )}
          </Pressable>

          {/* Cart */}
          <Pressable onPress={() => router.push('/profilePages/cart')} style={styles.iconButton}>
            <Ionicons name="cart-outline" size={26} color="#333" />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>

      {/* Scrollable Content */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={() => (
          <>
            <Hero />
            <PopularCategory />
            <TopArticle />
            <RecentUploadVideo/>
          </>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    paddingBottom: 80, 
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },

  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  rightSection: {
    flexDirection: 'row',
  },

  iconButton: {
    marginLeft: 16,
  },

  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
