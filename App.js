import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ImageBackground,TextInput, Image, View, Component, Button, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
     
      <ImageBackground style={styles.background} source={require('./assets/background.jpg')} >
        
        <Image style= {styles.logo} source= {require('./assets/logo.png')} />
          
        <Text>
        Username:
        Password:
        </Text>
          <TextInput
            
            style={styles.text}
            placeholder="email"
            onChangeText={() => setText("Hi")} 
          />
          <TextInput
            style={styles.text}
            placeholder="password"
            onChangeText={() => setText("Hi")} 
          />

      </ImageBackground>

     

      <Button
      title= "Login"
      onPress= {() => 
      Alert.alert("My title", "Message", [

        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No"},
      ]) 

      }
      />
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
    width: 50,
    height: 50,
    
  },
  text:{
    width:200,
    height: 40,
    borderBottomWidth: 10, 
    borderColor: '#fff', 
    borderWidth: 2, 
    backgroundColor:'gainsboro', 
    borderRadius: 10,
    padding:10,
  },
  background:{
    width:380,
    height:600,
    resizeMode: 'cover',
    justifyContent: 'center'
    
  },
  loginButton:{
    width: "100%",
    height: 70,
    
  }
});





