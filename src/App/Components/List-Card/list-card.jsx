import React from 'react';
import { data } from '../../../services/stays';
import { Card } from '../Cards/cards';
import './list-card.css';

export function ListCard() {
  return (
    <>
        <div className='Container-title'>
          <h1 id='title'>Stays in Finland</h1>
          <p id='yers'>12+ stays</p>
         </div>
           <div className='ListCard-Container'>
          {data.map((item, index) => (
            <Card data={item} key={index} />
          ))}
      </div>
    </>
  );
}