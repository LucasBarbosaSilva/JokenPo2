import React from 'react';
import Avatar from './Avatar';
import Score from './Score';
import '../styles/display.css';

import match from '../images/nomes.png';
import versus from '../images/vs.png';

const Display = ({ info }) => {
  return (
    <div className="match-container">
      <div className="decoration-image">
        <img alt="fdgsdfgsdfgs" src={match} />
      </div>
      <div className="game-components">
        <div className="player-components">
          <Avatar image={info.player.characterImage} />
          <Score value={info.player.score} />
        </div>
        <div className="decoration-image image">
          <img src={versus} alt="Character choosed" />
        </div>
        <div className="player-components">
          <Avatar image={info.computer.characterImage} />
          <Score value={info.computer.score} />
        </div>
      </div>
    </div>
  );
}



export default Display;

