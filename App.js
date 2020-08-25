import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{backgroundColor: 'powderblue', width: 50, height: 50}}></View>
      <View style = {{backgroundColor: 'skyblue', width: 50, height: 50}}></View>
      <View style = {{backgroundColor: 'steelblue', width: 50, height: 50}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
});
