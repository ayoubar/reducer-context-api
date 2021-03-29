import React, { useState } from 'react';
import MovieContext from './MovieContext';
const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=7e7346a600f3af0d821581f843c28779';

function MovieState({ children }) {
  const [movies, setMovies] = useState([]);

  async function getAllPoupularMovies() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovies(data.results);
  }
  return (
    <MovieContext.Provider
      value={{
        movies,
        getAllPoupularMovies,
      }}
    >
      {' '}
      {children}
    </MovieContext.Provider>
  );
}

export default MovieState;
