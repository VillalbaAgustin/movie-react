import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  const imgeUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
  const { movieCard, movieImage } = styles;
  // console.log(styles);
  return (
    <li className={movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          src={imgeUrl}
          alt={movie.title}
          className={movieImage}
          width={300}
          height={450}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
};
