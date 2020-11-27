import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import charactersImage from '../images/jogadores.png';
import rulesImage from '../images/regras.png';

let width = Dimensions.get('window').width;

const ImageButton = ({ isDefaultImage, action }) => {
  let value = isDefaultImage ? charactersImage : rulesImage;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={value} />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1c134b',
    borderWidth: 2,
    borderRadius: 5,
    height: width * 0.634,
    marginTop: 15,
  },
  image: {
    height: "100%",
    resizeMode: 'contain',
  }
});

export default ImageButton;