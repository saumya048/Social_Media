import React, { useState } from 'react';
import { 
  View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IdentitySelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  const identities = ['Female', 'Male', 'Non-Binary', 'Other'];

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
          <Text style={styles.title}>
            Choose The <Text style={styles.highlightText}>Identity</Text> That Feels Right For<Text style={styles.underlineText}> You?</Text>
          </Text>
          <Image source={require('../assests/vector.png')} style={styles.curveImage} />
        </View>

        <View style={styles.identityContainer}>
          {identities.map((identity, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.identityButton, selectedIdentity === identity && styles.selectedIdentityButton]}
              onPress={() => setSelectedIdentity(identity)}
            >
              <Text style={[styles.identityText, selectedIdentity === identity && styles.selectedIdentityText]}>
                {identity}
              </Text>
              {selectedIdentity === identity && <Text style={styles.checkmark}>✔</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    
      <View style={styles.shadowContainer}>
        <Image source={require('../assests/shadow.png')} style={styles.shadowImage} />
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={() => navigation.navigate('AgeSelection')}
        >
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
  textContainer: { 
    width: '85%', 
    alignItems: 'center', 
    position: 'relative',
    marginBottom: 20 
  },
  title: { fontSize:21, fontWeight: '400', color: '#333', marginTop: 20, textAlign: 'center', width: '80%' },
  highlightText: { fontWeight: '700', color: '#F7B174' },
  boldText: { fontWeight: '700', textDecorationLine: 'underline', color: '#333' },
  underlineText: { fontWeight: '700', color: 'black' },
  identityContainer: { width: '80%', marginTop: 20 },
  identityButton: { 
    width: '100%', 
    marginVertical: 5, 
    paddingVertical: 15, 
    backgroundColor: '#F2F2F2', 
    borderRadius: 25, 
    paddingLeft:20
  },
  selectedIdentityButton: { backgroundColor: '#FF9A8B' },
  identityText: { color: '#555', fontSize: 16 },
  selectedIdentityText: { color: '#fff', fontWeight: '700' },
  checkmark: { color: '#fff', position: 'absolute', right: 30, fontSize: 16 ,top:12},
  
  curveImage: {
    position: 'absolute',
    bottom: -15,
    left: '65%',
    width: 60,
    height: 15,
    resizeMode: 'contain',
  },

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

export default IdentitySelectionScreen;
