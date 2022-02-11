import React, { useContext } from 'react';
import "./modal-header.css";
import ContextProvider from "../../Context/contexthotel";

export const CardLocation = ({ loc }) => {
  const { handleContext } = useContext(ContextProvider);
  const handleClick = () => {
    handleContext(loc);
  }
  return (
    <p onClick={handleClick} className="citys"> {loc} </p>
  )
}