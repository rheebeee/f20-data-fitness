import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default class Info extends React.Component {
   render(){ 
    return (
        <View style={styles.container}>
          <Text>Body Information.</Text>
          <StatusBar style="auto" />
          
          <Image style={styles.logo} source={require('./assets/logo.png')} />

      </View>
    
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
        },
    image: {
      marginBottom: 40
    }
});





