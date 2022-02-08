import React from 'react';
import './cards.css';
import star from "../../../Images/star.png";

 export const Card = ({ data }) => {
  return(
    <div className='Container-Cards'>
      <div className='Container-Cards-Photo'>
        <img src={data.photo} alt='' />
      </div>
      <div className='Container-Cards-Text'>
            {data.superHost ? (
              <div className="SPhost">
                <p>SUPER HOST</p>
              </div>  ) : null}
            <p>
              {data.type} {data.beds ? `.${data.beds} beds` : null}
            </p> 
            <div className='rating-start'>
            <img src= {star} alt="star" /> 
            <p>
              {data.rating}
            </p>
          </div>
        </div>
          <div className='Container-Cards-Title'>
            <h3>{data.title}</h3>
          </div>
    </div>
  );
};