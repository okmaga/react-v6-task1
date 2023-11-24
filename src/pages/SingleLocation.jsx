import React from 'react';
import locations from "../data/location.json";
import {useParams} from "react-router-dom";

const SingleLocation = () => {
  const { id } = useParams();
  const location = locations.find(l => l.id.toString() === id.toString());
  const renderContent = (key, value) => {
    if (key === "created") {
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
      <h1>Location</h1>
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

export default SingleLocation;
