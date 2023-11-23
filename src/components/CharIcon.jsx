import React from 'react';

const CharIcon = ({char, onClick}) => {
  return (
    <div
      className="char-icon"
      onClick={onClick}
    >
      <div className="char-image" style={{backgroundImage: `url(${char.image})`}}></div>
      <div>{char.name}</div>
    </div>
  );
};

export default CharIcon;
