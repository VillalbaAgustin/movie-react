import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import { getMovieImg } from '../helpers/getMovieImg';

export const MovieCard = ({ movie }) => {
  const imgeUrl = getMovieImg(movie.poster_path, 300)

  const { movieCard, movieImage } = styles;
  
  return (
    <li className={movieCard}>
      <Link to={'/movies/' + movie.id}>
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
