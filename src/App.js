import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerSystem from './DrawerSystem';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <DrawerSystem />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
