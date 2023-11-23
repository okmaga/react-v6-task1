import React from 'react';
import characters from "../data/characters.json"
import CharIcon from "../components/CharIcon";
import {useNavigate} from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate()
  const handleClick = (char) => {
    navigate(`/characters/${char.id}`, { state: {char} });
  }
  return (
    <div className="characters">
      <div className="char-grid">
        {characters.map(char => {
          return <CharIcon
            onClick={() => handleClick(char)}
            key={char.name}
            char={char}
          />
        })}
      </div>
    </div>
  );
};

export default Characters;
