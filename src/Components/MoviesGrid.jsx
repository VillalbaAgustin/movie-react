import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { get } from '../helpers/httpClient';
import { Empty } from './Empty';
import { Loading } from './Loading';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';

export const MoviesGrid = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const searchUrl = search
      ? '/search/movie?query=' + search + '&page=' + page
      : '/discover/movie?page=' + page;

    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Loading />}
      >
        <ul className={styles.moviesGrid}>
          {movies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </InfiniteScroll>
  );
};
