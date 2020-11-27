import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

import buttonIcon from '../images/botao.png';
import charactersImage from '../images/jogadores.png';
import rulesImage from '../images/regras.png';

const AppBar = ({ resetScore, changeImage, isDefaultImage }) => {
  let value = isDefaultImage ? charactersImage : rulesImage;
  return (
    <View>
      <View style={[styles.statusBar, "#1c134b" ]}>
        <StatusBar translucent backgroundColor={"#110b30"} barStyle={"light-content"} />
      </View>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => changeImage(!isDefaultImage)}>
          <Text style={styles.text}>GAME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => resetScore()}>
          <Image style={styles.image} source={buttonIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
  },
  appBar: {
    alignItems: "center",
    backgroundColor:'#1c134b',
    flexDirection: "row",
    height: 45,
    justifyContent:"space-between",
    paddingHorizontal: 15,
  },
  text: {
    color: '#fff',
    fontSize:  24,
    fontWeight: 'bold',
  },
   button: {
    backgroundColor: '#f5b847',
    borderRadius: 5,
    height: 30,
    width: 30,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    width: "60%",
  }
});

export default AppBar;