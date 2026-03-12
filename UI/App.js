import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import AIScreen from './src/screens/AIScreen';
import MapScreen from './src/screens/MapScreen';
import VaultScreen from './src/screens/VaultScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ChatScreen from './src/screens/ChatScreen';
import OfflineP2PScreen from './src/screens/OfflineP2PScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AI" component={AIScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Vault" component={VaultScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="OfflineP2P" component={OfflineP2PScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}