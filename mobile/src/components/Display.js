import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


import match from '../images/nomes.png';
import versus from '../images/vs.png';

import Avatar from './Avatar';
// import Score from './Score';

const Display = ({ info }) => {
  return (
    <View style={style.matchContainer}>
      <View style={style.imageDecorative}>
        <Image style={style.imageDecorative} source={match} />
      </View>
      <View style={style.gameComponents}>
        <View style={style.playerComponents}>
          <Avatar image={info.player.characterImage} />
          {/* <Score /> */}
        </View>
        <View style={style.image, style.imageDecorative}>
          <Image source={versus}/>
        </View>
        <View style={style.playerComponents}>
          <Avatar image={info.computer.characterImage} />
          {/* <Score /> */}
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  matchContainer: {
    backgroundColor: '#fff',
    alignContent: 'center',
    padding: '4 2',
    borderWidth: 2,
    borderColor: '#1411223d'
  },
  
  imageDecorative: {
    width: '100%' //,
    //   height: auto,
  },
  
  image: {
    paddingTop: 30,
    width: 30,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  
  gameComponents: {
    marginTop: '2vw',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  
  playerComponents: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default Display;

