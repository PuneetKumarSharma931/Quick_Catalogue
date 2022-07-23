import React, { useContext } from 'react';
import '../styles/MovieDetails.css';
import MovieContext from '../context/MovieContext';


const MovieDetails = () => {

  const { movie, loading } = useContext(MovieContext);

  let Movie;

  if(movie===undefined) {

    Movie = JSON.parse(sessionStorage.getItem('movie'));

  }

  const Capatalize = (str)=>{

    return ( str.charAt(0).toUpperCase() + str.slice(1));
  }

  return (
    <>
    {loading?<span className="loader search"></span>:<div className="movie-container">
      <div className="poster-container">
        <img src={movie?(movie.Poster==="N/A"?'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg':movie.Poster):(Movie.Poster==="N/A"?'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg':Movie.Poster)} alt={movie?movie.Title:Movie.Title} />
      </div>
      <div className="movie-details-container">
        <div className="basic-details">
          <p className="title">{movie?(movie.Title?movie.Title:"N/A"):(Movie.Title?Movie.Title:"N/A")}</p>
          <p className="year">{movie?(movie.Year?movie.Year:"N/A"):(Movie.Year?Movie.Year:"N/A")}</p>
          <p className="type">{Capatalize(movie?(movie.Type?movie.Type:"N/A"):(Movie.Type?Movie.Type:"N/A"))}</p>
        </div>
        <div className="full-details">
          <p className="rated">Rated: {movie?(movie.Rated?movie.Rated:"N/A"):(Movie.Rated?Movie.Rated:"N/A")}</p>
          <p className="released">Released: {movie?(movie.Released?movie.Released:"N/A"):(Movie.Released?Movie.Released:"N/A")}</p>
          <p className="runtime">Runtime: {movie?(movie.Runtime?movie.Runtime:"N/A"):(Movie.Runtime?Movie.Runtime:"N/A")}</p>
          <p className="genre">Genre: {movie?(movie.Genre?movie.Genre:"N/A"):(Movie.Genre?Movie.Genre:"N/A")}</p>
          {(movie?movie.Type==="series":Movie.Type==="series") && <p className="seasons">Total Seasons: {movie?(movie.totalSeasons?movie.totalSeasons:"N/A"):(Movie.totalSeasons?Movie.totalSeasons:"N/A")}</p>}
          <p className="director">Director: {movie?(movie.Director?movie.Director:"N/A"):(Movie.Director?Movie.Director:"N/A")}</p>
          <p className="writer">Writer: {movie?(movie.Writer?movie.Writer:"N/A"):(Movie.Writer?Movie.Writer:"N/A")}</p>
          <p className="actors">Actors: {movie?(movie.Actors?movie.Actors:"N/A"):(Movie.Actors?Movie.Actors:"N/A")}</p>
          <p className="plot">Plot: {movie?(movie.Plot?movie.Plot:"N/A"):(Movie.Plot?Movie.Plot:"N/A")}</p>
          <p className="language">Language: {movie?(movie.Language?movie.Language:"N/A"):(Movie.Language?Movie.Language:"N/A")}</p>
          <p className="country">Country: {movie?(movie.Country?movie.Country:"N/A"):(Movie.Country?Movie.Country:"N/A")}</p>
          <p className="awards">Awards: {movie?(movie.Awards?movie.Awards:"N/A"):(Movie.Awards?Movie.Awards:"N/A")}</p>
          <p className="ratings-title">Ratings</p>
           {(movie?movie:Movie).Ratings.map(rating=><p key={rating.Source} className="ratings">{rating.Source}: {rating.Value}</p>)}
           {(movie?movie:Movie).Ratings.length===0 && <p>No Ratings</p>}
          <p className="metascore">Metascore: {movie?(movie.Metascore?movie.Metascore:"N/A"):(Movie.Metascore?Movie.Metascore:"N/A")}</p>
          <p className="imdbRating">imdbRating: {movie?(movie.imdbRating?movie.imdbRating:"N/A"):(Movie.imdbRating?Movie.imdbRating:"N/A")}</p>
          <p className="imdbVotes">imdbVotes: {movie?(movie.imdbVotes?movie.imdbVotes:"N/A"):(Movie.imdbVotes?Movie.imdbVotes:"N/A")}</p>
          <p className="dvd">DVD: {movie?(movie.DVD?movie.DVD:"N/A"):(Movie.DVD?Movie.DVD:"N/A")}</p>
          <p className="BoxOffice">BoxOffice: {movie?(movie.BoxOffice?movie.BoxOffice:"N/A"):(Movie.BoxOffice?Movie.BoxOffice:"N/A")}</p>
          <p className="production">Production: {movie?(movie.Production?movie.Production:"N/A"):(Movie.Production?Movie.Production:"N/A")}</p>
          <p className="website">Website: {movie?(movie.Website?movie.Website:"N/A"):(Movie.Website?Movie.Website:"N/A")}</p>
        </div>
      </div>
    </div>}
    </>
  )
}

export default MovieDetails;