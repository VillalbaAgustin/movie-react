import { useEffect } from 'react';
import { MovieCard } from './MovieCard';

import styles from './MoviesGrid.module.css';

export const MoviesGrid = () => {
  // console.log(movies);
  let movies = [];
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDYwZTUwYzM4ZGY3ZjRlNmQyOTY4YjFmN2E0YWY3MSIsInN1YiI6IjYzYjcxMTNiNDMyNTBmMDBkYTQwZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G70ApqVUjtIag-u5zkFgjTJhIp_v2H2C0D0N1PEoY9Y',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((result) => result.json())
      .then((data) => {
        movies = data.result;
        console.log(movies);
      });
  });
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};
