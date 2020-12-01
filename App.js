import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Info from './info.js'
import { StyleSheet, Text, ImageBackground, TextInput, Image, View, Component, Button, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome to GenerEAT. Start eating right today.</Text>
      <StatusBar style="auto" />
      <Button title="Login" onPress={() => alert('Please enter your Username and password')} />
    
      <StatusBar style="auto" />


      <ImageBackground style={styles.background} source={require('./assets/background.jpg')} >
      <Image style={styles.logo} source={require('./assets/logo.png')} />
        <TextInput

          style={styles.text}
          placeholder="Email"
          onChangeText={() => setText("Hi")}

        />
        <TextInput
          style={styles.text}
          placeholder="Password"
          onChangeText={() => setText("Hi")}
        />

        <Button
          title="Login"

          onPress={() =>
            Alert.alert("My title", "Message", [

              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No" },
            ])

          }
        />

        <Button
          title="Sign Up"
          onPress={() =>
            Alert.alert("My title", "Message", [

              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No" },
            ])

          }
        />

      </ImageBackground>




    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 50,
    marginLeft: 140

  },
  text: {
    marginTop: 20,
    marginLeft: 70,
    marginBottom: 20,
    fontWeight: "bold",
    width: 220,
    height: 60,
    borderBottomWidth: 10,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    padding: 10,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: 'center'

  },
  loginButton: {
    width: "100%",
    height: 70,

  },
});





