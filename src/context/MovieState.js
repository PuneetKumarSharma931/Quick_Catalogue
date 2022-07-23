import React, { useState } from 'react';
import MovieContext from './MovieContext';

const MovieState = (props) => {

    const [movies, setMovies] = useState([]);
    const [id, setId] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [results, setResults] = useState();
    const [Title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState();

    const fetchMovies = async (title)=>{

        setLoading(true);
        setHasMore(false);
        document.getElementById('movies').scrollTop = document.getElementById('movies').scrollHeight;

        setMovies([]);

        try {

            const Movies = await fetch(`https://www.omdbapi.com/?apikey=422baf91&s=${title}&page=1`);

            const MoviesData = await Movies.json();

            if(MoviesData.Response==="True") {
                
                setMovies(MoviesData.Search);
                setPage(2);
                setResults(MoviesData.totalResults);
                setTitle(title);
                setHasMore(true);    
            }
            else {
                setMovies([]);
            }
            
        } catch (error) {
            
            alert("Some Internal Server Error Occured!");
        }

        setLoading(false);
    }

    const fetchMoreMovies = async ()=>{
        
        if(movies.length>=results) {

            setHasMore(false);
            return;
        }

        try {
            
            const Movies = await fetch(`https://www.omdbapi.com/?apikey=422baf91&s=${Title}&page=${page}`);

            const MoviesData = await Movies.json();

            let fetchedMovies = movies.concat(MoviesData.Search);
            setMovies(fetchedMovies);
            setPage(page + 1);

        } catch (error) {
            
            alert("Some Internal Server Error Occured!");
        }

    }

    const fetchMovie = async (ID)=>{

        setLoading(true);
        setId(ID);
        sessionStorage.setItem('id', ID);

        try {
            
            const Movie = await fetch(`https://www.omdbapi.com/?apikey=422baf91&i=${ID}&plot=Full`);

            const MovieData = await Movie.json();
            setMovie(MovieData);
            sessionStorage.setItem('movie', JSON.stringify(MovieData));

        } catch (error) {
            
            alert("Some Internal Server Error Occured!");
        } 

        setLoading(false);
    }

  return (
    <MovieContext.Provider value={{movies, fetchMovies, fetchMoreMovies, hasMore, loading, results, fetchMovie, movie, id }}>
        {props.children};
    </MovieContext.Provider>
  )
};

export default MovieState;