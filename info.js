import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Info extends React.Component {
   render(){ 
    return (
        <View style={styles.container}>
          <Text>Enter your height, weight, and age.</Text>

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
        }
});





