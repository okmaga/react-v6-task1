import React from 'react';
import episodes from "../data/episode.json";
import {useParams} from "react-router-dom";

const SingEpisode = () => {
  const { id } = useParams();
  const location = episodes.find(e => e.id.toString() === id.toString());
  const renderContent = (key, value) => {
    if (key === "created" || key === "air_date") {
      const date = new Date(value)
      return date.toLocaleDateString("en-GB",{
        day: "numeric",
        month: "short",
        year: "numeric"
      });

    } else {
      return value;
    }
  }
  return (
    <div>
      <h1>Episode</h1>
      {Object.entries(location).map(([key, value] )=> {
        return (
          <div key={key}>
            {key}: {renderContent(key, value)}
          </div>
        )
      })}
    </div>
  );
};

export default SingEpisode;
