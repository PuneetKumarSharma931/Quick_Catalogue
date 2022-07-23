import React, { useContext } from 'react';
import '../styles/Catalogue.css';
import MovieCard from './MovieCard';
import MovieContext from '../context/MovieContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

const Catalogue = () => {

    const { movies, fetchMoreMovies, hasMore, loading, results, fetchMovie } = useContext(MovieContext);

    const Capatalize = (str)=>{

      return ( str.charAt(0).toUpperCase() + str.slice(1));
    }

  return (
    <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreMovies}
          hasMore={hasMore}
          loader={<span className="loader"></span>}>
     {(!loading && results!==undefined ) && (movies.length===0?<h2 className="Results">Total Titles Found: 0</h2>:<h2 className="Results">{`Total Titles Found: ${results}`}</h2>)}
     {loading && <span className="loader search"></span>}
    <div className="container" id="movies">
        {(results===undefined && loading!==true) && <h1>Please, Search a Title to Get Results Here</h1>}
        { !loading && movies.map(movie=>{
            return (
                <Link className="movie-link" to={movie.imdbID} key={movie.imdbID} onClick={()=>{fetchMovie(movie.imdbID)}}><MovieCard Poster={movie.Poster} Title={movie.Title} Year={movie.Year} Type={Capatalize(movie.Type)} /></Link>
            )
        })
        }
      </div>
    </InfiniteScroll>
  )
}

export default Catalogue;