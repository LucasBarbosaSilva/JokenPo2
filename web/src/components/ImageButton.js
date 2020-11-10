import React from 'react';
import charactersImage from '../images/jogadores.png';
import rulesImage from '../images/regras.png';
import '../styles/image-button.css';

const ImageButton = ({actualImage, changeImage}) => {
  let value = actualImage ? charactersImage : rulesImage;
  return (
    <div className="image-container">
      <img src={value} alt="Characters playing jokenpo" onClick={() => changeImage(!actualImage)} />
    </div>
  );
}

export default ImageButton;