import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NameInputScreen = () => {
    const [selectedAge, setSelectedAge] = useState(null);
     const navigation = useNavigation();
    const ageGroups = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'];


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
   
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Great, Let's make Mynd all about you!</Text>
        <Text style={styles.title}>How long have you been rocking this <Text style={styles.boldText}>World?</Text>🎂</Text>
        </View>

        <View style={styles.ageGroupContainer}>
        {ageGroups.map((age, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.ageButton, selectedAge === age && styles.selectedAgeButton]}
            onPress={() => setSelectedAge(age)}
          >
            <Text style={[styles.ageText, selectedAge === age && styles.selectedAgeText]}>
              {age}
            </Text>
            {selectedAge === age && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>

      <View style={styles.shadowContainer}>
        <Image source={require('../assests/shadow.png')} style={styles.shadowImage} />
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('IdentitySelection')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  
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

  scrollContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 80 },
  textContainer: { alignItems: 'center', marginBottom: 30 },
  subtitle: { color: '#777', fontSize: 15 },
  titleContainer: { position: 'relative', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: '400', color: '#333', marginTop: 10 },
  boldText: { fontWeight: '700', color: '#F7B174' },
  underlineText: { fontWeight: '700', color: 'black' },
  ageGroupContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 },
  ageButton: { width: '40%', margin: 10, paddingVertical: 12, backgroundColor: '#F2F2F2', borderRadius: 20, alignItems: 'center' },
  selectedAgeButton: { backgroundColor: '#FF9A8B' },
  ageText: { color: '#555', fontSize: 16 },
  selectedAgeText: { color: '#fff', fontWeight: '700' },
  checkmark: { color: '#fff', position: 'absolute', right: 15, fontSize: 16, top:10 },

  curveImage: {
    position: 'absolute',
    bottom: -15,
    left: '67%',
    width: 60,
    height: 15,
    resizeMode: 'contain',
  },

  inputContainer: { width: '100%', alignItems: 'center', marginBottom: 20 },
  input: { width: '80%', height: 50, borderWidth: 1, borderColor: '#ddd', borderRadius: 25, paddingHorizontal: 20, fontSize: 16, color: '#333' },

  shadowContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    position: 'relative',
  },
  shadowImage: {
    position: 'absolute',
    bottom: -10,
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  
  continueButton: { 
    width: '80%', 
    backgroundColor: '#FF9A8B', 
    paddingVertical: 12, 
    borderRadius: 25, 
    alignItems: 'center', 
    elevation: 5,
  },
  continueText: { color: '#fff', fontSize: 17, fontWeight: '500' },
});


export default NameInputScreen;
