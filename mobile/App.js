import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navbar from './src/components/Navbar';
import ImageButton from './src/components/ImageButton.js';
import AvatarLine from './src/components/AvatarLine';
import Display from './src/components/Display';

import rock from './src/images/pedra.png';
import spock from './src/images/spock.png';
import scissor from './src/images/tesoura.png';
import lizard from './src/images/lagarto.png';
import paper from './src/images/papel.png';

const images = [rock, spock, scissor, lizard, paper];
const winnerList = [[2, 3], [0,2], [3,4], [1,4], [0,1]];


let defaultGame = {
  player: {
    characterImage: rock,
    characterValue: 0,
    score: '00'
  },
  computer: {
    characterImage: rock,
    characterValue: 0,
    score: '00'
  }
}



class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      isDefaultImage: true,
      gameInfo: defaultGame,
    }
  }

  changeImageButton = (value) => {
    this.setState({ isDefaultImage: value })
  }

  changeImageCharacter = async (playerKey, value) => {
    
    this.setState(prevState => ({
      gameInfo: {
        ...prevState.gameInfo,
        player: {
          ...prevState.gameInfo.player,
          characterImage: value,
          characterValue: playerKey,
        }
      } 
    }));

    let computerKey = await this.chooseComputerCharacter();
    this.calculateWinner(playerKey, computerKey);

  }

  async chooseComputerCharacter() {
    let randomIndex;
    for(let i = 0; i < 5; i++) {
      randomIndex = Math.floor(Math.random() * 5);
      this.setState(prevState => ({
        gameInfo: {
          ...prevState.gameInfo,
          computer: {
            ...prevState.gameInfo.computer,
            characterValue: randomIndex,
            characterImage: images[randomIndex],
          }
        } 
    }));
    await this.sleep(40);
    }
    return randomIndex;
  }

  sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
  }
  
  calculateWinner(playerIndex, computerIndex) {
    let computerScore = parseInt(this.state.gameInfo.computer.score);
    let playerScore = parseInt(this.state.gameInfo.player.score);
    if(winnerList[playerIndex].includes(computerIndex)) {
      playerScore += 1;
      playerScore = playerScore < 10 ? `0${playerScore}` : playerScore;
      this.setState(prevState => ({
        gameInfo: {
          ...prevState.gameInfo,
          player: {
            ...prevState.gameInfo.player,
            score: playerScore
          }
        } 
      }));
    }
    else if(playerIndex !== computerIndex) {
          computerScore += 1;
          computerScore = computerScore < 10 ? `0${computerScore}` : computerScore;
          this.setState(prevState => ({
            gameInfo: {
              ...prevState.gameInfo,
              computer: {
                ...prevState.gameInfo.computer,
                score: computerScore
              }
            } 
          }));
        }
      }
  
    render() {
      return (
        <View style={styles.container}>
          <StatusBar/>
          <Navbar changeImage={this.changeImageButton} actualImage={this.state.isDefaultImage}/>
          <ImageButton actualImage={this.state.isDefaultImage}  />
          <AvatarLine images={images} action={this.changeImageCharacter}/>
          <Display info={this.state.gameInfo} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#4a3e86',
    // flex: 1,
    // backgroundColor: '#4a3e86',
    // padding: '4vw',
    // flexDirection: 'column',
    
    justifyContent: 'flex-start'
    
  },
});

export default App;