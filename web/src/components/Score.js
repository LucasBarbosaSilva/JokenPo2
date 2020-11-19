import React from 'react';
import '../styles/score.css';

const Score = ({ value }) => {
  return(
    <div className="container-value">
      <h3>{value}</h3>
    </div>
  );
}

export default Score;