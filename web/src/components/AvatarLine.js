import React from 'react';
import Avatar from './Avatar';
import '../styles/avatar-line.css';

const AvatarLine = ({ images, action }) => {
  const avatarList = images.map((image, key) => {
    return(
      <div key={key}>
        <Avatar image={image} index={key} action={action} key={key}/>
      </div>
    );
  });

  return(
    <div className="characters-container">
      {avatarList}
    </div>
  );
}

export default AvatarLine;