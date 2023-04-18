// import placeholder from './assets/placeholder.jpg';

export const getMovieImg = (path, width) => {
  return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    :  './assets/placeholder.jpg';
};
