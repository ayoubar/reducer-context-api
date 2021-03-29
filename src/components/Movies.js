import React, { useContext, useEffect } from 'react';
import MovieContext from './../context/movies/MovieContext';
function Movies() {
  const movieContext = useContext(MovieContext);
  const { getAllPoupularMovies, movies } = movieContext;
  useEffect(() => {
    getAllPoupularMovies();
  });
  return (
    <ul>
      {movies.map((movie) => (
        <li> {movie.title}</li>
      ))}
    </ul>
  );
}

export default Movies;
