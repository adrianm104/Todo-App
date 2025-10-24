import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';


export default function ProfileScreen() {

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <Image source={require('@/assets/images/profilepic.png')} style={styles.profilePicture} />
      <View style={styles.profileContainer}>
        <Text style={styles.name}>Adrian Macias</Text>
        <Text style={styles.email}>adrianmacias255.am@gmail.com</Text>
        <Text style={styles.bio}> Greetings Everyone! {'\n'} {'\n'} I am Adrian Macias, a rookie React Native developer, making this app as a learning project to improve my skills. I am a current student at the University of Texas at Arlington. 
          I am actively pursuing a Bachelors degree in Computer Science. My interests include web development, mobile development. My goal is to become a software engineer and work on building web and mobile applications and maintaining
          good quality code. This is also my first time using React Native and Expo, so I am learning as I go, may add more features to the app as I learn more.
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ccc',
  },
  bio: {
    fontSize: 14,
    color: '#000',
    marginBottom: 130,
    textAlign: 'justify',
    paddingHorizontal: 0,
    width: '90%',
    },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
    marginHorizontal: 20,
  },
  email: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#000',
    marginBottom: 50,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderWidth: 3,
    borderRadius: 100,
    marginBottom: 10,
  },
});