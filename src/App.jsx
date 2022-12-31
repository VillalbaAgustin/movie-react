import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
  Link,
} from 'react-router-dom';

import styles from './App.module.css';
import { MoviesGrid } from './Components/MoviesGrid';
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';

export const App = () => {
  return (
    <Router>
      <header>
        {/* <h1 className={styles.title}>Movies</h1> */}
        <Link to= "/">Home</Link>
        <br />
        <Link to= "/movie">Movie</Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie" element={<MovieDetails/>}/>
          <Route path="/"  element={<LandingPage/>}/>
        </Routes>
        {/* <MoviesGrid /> */}
      </main>
    </Router>
  );
};
