import React from 'react';
import charactersImage from '../images/jogadores.png';
import '../styles/image-button.css';

import rulesImage from '../images/regras.png';

const ImageButton = ({ actualImage, changeImage }) => {
  let path = actualImage ? charactersImage : rulesImage;
  return (
    <div className="image-container">
      <img src={path} alt="Characters playing jokenpo" onClick={() => changeImage(!actualImage)} />
    </div>
  );
}

export default ImageButton;