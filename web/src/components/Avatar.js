import React from 'react';
import '../styles/avatar.css';

const Avatar = ({ image, index, action }) => {
  if(action) {
    return(
      <div id="character-button">
        <img src={image} alt="Character" onClick={() => action(index, image)} />
      </div>
    );
  } else {
    return(
      <div id="character-icon">
        <img src={image} alt="Character" />
      </div>
    );
  }
}

export default Avatar;