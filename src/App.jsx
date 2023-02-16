import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import styles from './App.module.css';
import { MoviesGrid } from './Components/MoviesGrid';
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  return (
    <Router>
      <header>
        <Link to="/*">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
};
