import movie from './movie.json';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
  const imgeUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img src={imgeUrl} alt={movie.title} className={`${styles.col} ${styles.movieImage}`} />
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
