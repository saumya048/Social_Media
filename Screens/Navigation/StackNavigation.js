import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MindfulJourneyScreen from '../MindJourney';
import NameInputScreen from '../NameInput';
import AgeSelectionScreen from '../AgeSelection';
import IdentitySelectionScreen from '../IdentitySelection';

// import MindfulJourneyScreen from '../MindJourney';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="MindJourney" component={MindfulJourneyScreen} />
        <Stack.Screen name="NameInputScreen" component={NameInputScreen} />
        <Stack.Screen name="AgeSelection" component={AgeSelectionScreen} />
        <Stack.Screen name="IdentitySelection" component={IdentitySelectionScreen} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
