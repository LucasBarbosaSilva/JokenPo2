import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import charactersImage from '../images/jogadores.png';
import rulesImage from '../images/regras.png';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const ImageButton = ({ actualImage, changeImage }) => {
  let value = actualImage ? charactersImage : rulesImage;
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.imageTouch} 
        onPress={() => changeImage(!actualImage)}>
        <Image style={styles.imageImage} source={value}/>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // 
    backgroundColor: '#789',
    alignItems: 'center',
    borderWidth: 2,
    // borderColor: '#000'
  },
  imageTouch: {
    resizeMode: 'contain',
    width: "90%",
    // height: "80%",
  },
  imageImage:{
    resizeMode: 'contain',
    width: "90%",
  }
});

export default ImageButton;