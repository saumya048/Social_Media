import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MindfulJourneyScreen = () => {

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('NameInputScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
     
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
      
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>Begin Your</Text>
        <Text style={styles.subtitle}>Mindful Journey</Text>
        <Text style={styles.description}>
          Log In Or Sign Up To Begin Your Journey With Personalized, Human-Like Wellness Support
        </Text>
      </View>
      
      <View style={styles.gradientBox}>
     
        <View style={styles.paginationContainer}>
          <View style={styles.pagination}>
            <View style={styles.activeDot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
        
        <TouchableOpacity style={styles.appleButton} onPress={handleNavigation}>
          <Image source={require('../assests/apple-logo.png')} style={styles.appleIcon} />
          <Text style={styles.appleText}>Continue With Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.googleButton} onPress={handleNavigation}>
          <Image source={require('../assests/google-logo.png')} style={styles.googleIcon} />
          <Text style={styles.googleText}>Continue With Google</Text>
        </TouchableOpacity>
        
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.termsText}>
          I agree to <Text style={styles.linkText}>Privacy Policy</Text> & <Text style={styles.linkText}>Terms of Service</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingTop: 40 },

  progressBarContainer: { 
    position: 'absolute', 
    top: 50,  
    left: '10%',
    width: '80%', 
    height: 4, 
    backgroundColor: '#eee', 
    borderRadius: 2 
  },
  progressBar: { width: '20%', height: 4, backgroundColor: '#FF9A8B', borderRadius: 2 },

  textContainer: { position: 'absolute', top: '27%', alignItems: 'center', width: '80%' },
  title: { fontSize: 39, fontWeight: '400', color: '#F7B174', top: 10 },
  subtitle: { fontSize: 39, fontWeight: '700', color: '#F7B174', marginBottom: 0 },
  description: { fontSize: 12, color: '#777', marginHorizontal: 20, marginTop: 0, fontWeight: "400" },

  gradientBox: { 
    width: '100%', 
    paddingVertical: 30, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    alignItems: 'center', 
    backgroundColor: '#FF9A8B', 
    position: 'absolute', 
    bottom: 0,
    height: "40%"
  },

 
  paginationContainer: { 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20
  },
  pagination: { flexDirection: 'row' },
  dot: { width: 8, height: 8, backgroundColor: '#fff', borderRadius: 4, marginHorizontal: 4 },
  activeDot: { width: 8, height: 8, backgroundColor: '#FF6A88', borderRadius: 4, marginHorizontal: 4 },

  appleButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#000', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 30, marginBottom: 10 },
  appleText: { color: '#fff', fontSize: 16, fontWeight: '500', marginLeft: 10 },

  googleButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 30, borderWidth: 1, borderColor: '#ddd' },
  googleText: { color: 'gray', fontSize: 16, fontWeight: '500', marginLeft: 10 },

  appleIcon: { width: 35, height: 35, marginRight: 10 },
  googleIcon: { width: 25, height: 25, marginRight: 10 },

  orContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10, width: '70%',top:10 },
  line: { flex: 1, height: 1, backgroundColor: '#fff' },
  orText: { color: '#fff', marginHorizontal: 10 },

  termsText: { color: '#fff', fontSize: 11, textAlign: 'center',top:15 },
  linkText: { textDecorationLine: 'underline' },
});

export default MindfulJourneyScreen;
