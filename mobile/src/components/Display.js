import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';


import match from '../images/nomes.png';
import versus from '../images/vs.png';

import Avatar from './Avatar';
import Score from './Score';

const Display = ({ info }) => {
  
  return (
    <View style={style.matchContainer}>
      
      <View style={style.imageDecorative}>
        <Image style={style.imageDecorative} source={match} />
      </View>
      
      <View style={style.gameComponents}>
        
        <View style={style.playerComponents}>
          <Avatar image={info.player.characterImage} sizeIn={60}/>
          <Score />
        </View>
        
        <View >
          <Image source={versus} style={style.image, style.imageVersus,{width: 70, height: 50}}/>
        </View>
        
        <View style={style.playerComponents}>
          <Avatar image={info.computer.characterImage} sizeIn={70}/>
          <Score />
        </View>
      </View>    
    </View>
    
  );
}

const style = StyleSheet.create({
  matchContainer: {
    backgroundColor: '#fff',

    alignItems: 'center',

    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: '#1411223d'
  },
  
  
  imageDecorative: {
    width: '100%',
    resizeMode: 'contain'
  },
  imageVersus: {
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'gray'
  },
  
  image: {
    paddingTop: 30,
    width: 30,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  
  gameComponents: {
    marginTop: 2,
    marginHorizontal: 12,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  
  playerComponents: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100
  }
});

export default Display;

