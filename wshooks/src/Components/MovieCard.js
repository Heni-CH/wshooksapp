import React from 'react';
import './MovieCard.css';
import Rate from './Rate';

 const MovieCard = ( {
     movie : {posterUrl,title,date,rating,description},
    } ) => {

    return(
     <div className="card">
        <div className="card_left">
          <img src={posterUrl} alt="poster"/>
        </div>
        <div className="card_right">
          <h1>{title}</h1>
          <div className="card_right__details">
            <ul>
              <li>{date}</li>
              
              <div className='star'>
              <Rate rating={rating}/>
              </div>
            </ul>
            <div className="card_right__review">
              <p>{description}</p>
            </div>
            <div className="card_right__button">
             <button>WATCH TRAILER</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MovieCard;