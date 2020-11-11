import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import charactersImage from '../images/jogadores.png';
import rulesImage from '../images/regras.png';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const ImageButton = ({ actualImage, changeImage }) => {
  let value = actualImage ? charactersImage : rulesImage;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => changeImage(!actualImage)}>
        <Image style={styles.image} source={value}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    // borderStartColor: 'solid',
    borderColor: '#000'
    // border: '2px solid #000'
  },
  image: {
    maxWidth: width * 0.915,
    maxHeight: 210
  }
});

export default ImageButton;