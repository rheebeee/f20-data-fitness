import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("Filter");
    }

    return (
        
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          
         
          <ImageBackground style={styles.background} source={require('./assets/background.jpg')} >
            
            <Image style= {styles.logo} source= {require('./assets/logo.png')} />
              
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
            
             <Button title="Open Advanced Filter"
            //onPress= {()=>navigateToList()}
            onPress= {() => 
                Alert.alert("My title", "Message", [
          
                  {text: "Yes", onPress: () => console.log("Yes")},
                  {text: "No"},
                ]) 
          fga
                }
            />
            
         
    <Button
          title= "Login"
          
          onPress= {() => 
          Alert.alert("My title", "Message", [
    
            {text: "Yes", onPress: () => console.log("Yes")},
            {text: "No"},
          ]) 
    
          }
          />
          
        <Button
          title= "Sign Up"
          onPress= {() => 
          Alert.alert("My title", "Message", [
    
            {text: "Yes", onPress: () => console.log("Yes")},
            {text: "No"},
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
      text:{
        marginTop: 20,
        marginLeft:70,
        marginBottom: 20,
        fontWeight: "bold",
        width:220,
        height: 60,
        borderBottomWidth: 10, 
        borderColor: '#fff', 
        borderWidth: 2, 
        backgroundColor:'gainsboro', 
        borderRadius: 10,
        padding:10,
      },
      background:{
        width: "100%",
        height:"100%",
        justifyContent: 'center'
        
      },
      loginButton:{
        width: "100%",
        height: 90,
        
      },
      
      advancedFilter:{
        width: "100%",
        height: 70,
      
      },
    })

