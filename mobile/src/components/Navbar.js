import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import buttonIcon from '../images/botao.png';

var width = Dimensions.get('window').width;

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>GAME</Text>
      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image style={styles.image} source={buttonIcon}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#1c144d',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: width,
    padding: 15,
  },
  button: {
    backgroundColor: '#f5b847',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize:  24,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: 18,
    height: 18,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});