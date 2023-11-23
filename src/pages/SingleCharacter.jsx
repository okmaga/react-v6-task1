import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import characters from "../data/characters.json"

const SingleCharacter = () => {
  const {id} = useParams();
  const location = useLocation();
  const char = location?.state?.char ?? characters.find(char => {
    return char.id.toString() === id.toString();
  })
  return (
    <div className="single-char-card">
      <h1 >{char.name}</h1>
      <div className="img-placeholder">
        <img src={char.image} alt="" loading="lazy"/>
      </div>
      <div>Status: {char.status}</div>
      <div>Species: {char.species}</div>
      <div>Type: {char.type}</div>
      <div>Gender: {char.gender}</div>
    </div>
  );
};

export default SingleCharacter;
