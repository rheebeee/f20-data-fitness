import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Component, Button} from 'react-native';
import Info from './info.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to GenerEAT. Start eating right today.</Text>
      <StatusBar style="auto" />
      <Button title="Login" onPress={() => alert('Please enter your Username and password')}/>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 500  
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 500,
    
  },
});




