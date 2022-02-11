import React, { useContext } from 'react';
import { Card } from '../Cards/cards';
import ContextProvider from "../../Context/contexthotel";
import './list-card.css';

export function ListCard() {
  const { state } = useContext(ContextProvider);

  return (
    <>
      <div className='Container-title'>
        <h1 id='title'>Stays in Finland</h1>
        <p id='yers'>12+ stays</p>
      </div>
      <div className='ListCard-Container'>
        {state.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  );
}