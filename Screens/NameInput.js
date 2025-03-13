import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NameInputScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();


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
          <Text style={styles.subtitle}>Let's get to know each other</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              <Text style={styles.boldText}>What</Text> Should We Call
              <Text style={styles.underlineText}> You?</Text>
            </Text>
            <Image source={require('../assests/vector.png')} style={styles.curveImage} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#666"
            value={name}
            onChangeText={setName}
          />
        </View>
      </ScrollView>

      <View style={styles.shadowContainer}>
        <Image source={require('../assests/shadow.png')} style={styles.shadowImage} />
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('AgeSelection')}>
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
