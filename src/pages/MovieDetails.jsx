import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import { get } from '../helpers/httpClient';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get('/movie/' + movieId).then((data) => {
    setIsLoading(false);
      setMovie(data);
      // console.log(data);
    });
  }, [movieId]);
  
  // console.log(movie);

  if (isLoading) {
    return <Loading/>
  }

  if (!movie) {
    return null;
  }

  const imgeUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        src={imgeUrl}
        alt={movie.title}
        className={`${styles.col} ${styles.movieImage}`}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={`${styles.firstItem}`}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
};
