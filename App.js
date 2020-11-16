import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Image, View, Component, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Login" onPress={() => alert('Hi')}/>
      <Image style={styles.logo} source={require('./assets/logo.png')} />

      <TextInput
        style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2, backgroundColor:'gainsboro', borderRadius:'10' }}
        placeholder="email"
        onChangeText={() => setText("Hi")}
        
      />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  logo: {
    width: 50,
    height: 50,
  },
});




