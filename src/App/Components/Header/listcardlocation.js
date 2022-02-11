import React from 'react';
import "./modal-header.css";
import { CardLocation } from "./cardlocation";

export const ListLocation = ({ locations, handleContext }) => {
  return (
    <div>
      {locations.map((loc, index) => (
        <CardLocation key={index} loc={loc} onClick={handleContext} />
      ))}
    </div>
  )
}