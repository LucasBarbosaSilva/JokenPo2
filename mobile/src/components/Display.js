import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Avatar from './Avatar';
import Score from './Score';

import match from '../images/nomes.png';
import versus from '../images/vs.png';

const Display = ({ info }) => {
  return (
    <View style={style.matchContainer}>
      <View style={style.imageDecorative}>
        <Image style={style.imageDecorative} source={match} />
      </View>
      <View style={style.gameComponents}> 
        <View style={style.playerComponents}>
          <Avatar image={info.player.characterImage}/>
          <Score value={info.player.score} />
        </View>
        <View >
          <Image source={versus} style={style.imageVersus}/>
        </View>  
        <View style={style.playerComponents}>
          <Avatar image={info.computer.characterImage}/>
          <Score value={info.computer.score} />
        </View>
      </View>    
    </View>
    
  );
}

const style = StyleSheet.create({
  matchContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderWidth: 2,
    borderColor: '#000'
  },
  imageDecorative: {
    width: '100%',
    height: 60,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  imageVersus: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 90,
    width: 110,
    marginBottom: 40
  },
  gameComponents: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  }, 
  playerComponents: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Display;