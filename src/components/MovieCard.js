import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ Poster, Title, Year, Type }) => {

  return (
    <div className="card-container">
        <div className="card-body">
            <img src={Poster==="N/A"?'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg':Poster} alt={Title} />
            <div className="movie-details">
                <p style={{fontSize: '19px', fontWeight: 'bolder'}}>{Title}</p>
                <p>{Year}</p>
                <p>{Type}</p>
            </div>
        </div>
    </div>
  )
};

export default MovieCard;