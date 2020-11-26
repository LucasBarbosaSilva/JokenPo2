import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

import charactersImage from '../images/jogadores.png';
import rulesImage from '../images/regras.png';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const ImageButton = ({ actualImage}) => {
  let value = actualImage ? charactersImage : rulesImage;
  return (
    <View style={styles.contaier}>
      <Image style={styles.imageImage} source={value}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  contaier:{
    height: 212,
    margin: 12,
    
  },
  imageImage:{
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
});

export default ImageButton;