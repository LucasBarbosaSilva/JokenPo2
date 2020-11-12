import React, { Component } from 'react';
import NavBar from './components/Navbar';
import ImageButton from './components/ImageButton';
import AvatarLine from './components/AvatarLine';
import Display from './components/Display';
import './styles/global.css';

import rock from './images/pedra.png';
import spock from './images/spock.png';
import scissor from './images/tesoura.png';
import lizard from './images/lagarto.png';
import paper from './images/papel.png';

const images = [rock, spock, scissor, lizard, paper];

class App extends Component {

  state = {
    isDefaultImage: true,
    gameInfo : {
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
  }

  changeImageButton = (value) => {
    this.setState({ isDefaultImage: value })
  }

  changeImageCharacter = (value) => {
    this.setState(prevState => ({
      gameInfo: {
        ...prevState.gameInfo,
        player: {
          ...prevState.gameInfo.player,
          characterImage: value,
        }
      } 
    }));
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="main-container">
          <ImageButton actualImage={this.state.isDefaultImage} changeImage={this.changeImageButton} />
          <AvatarLine images={images} action={this.changeImageCharacter} />
          <Display info={this.state.gameInfo} />
        </div>
      </div>
    );
  }
}
export default App;
