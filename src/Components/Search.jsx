import {
  searchContainer,
  searchBox,
  searchInput,
  searchButton,
} from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export const Search = () => {
  const navigate = useNavigate();

  const query = useQuery();
  const search = query.get('search');


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    navigate('/movie-react/?search=' + value);
  };

  return (
    <form className={searchContainer} onSubmit={handleSubmit}>
      <div className={searchBox}>
        <input
          className={searchInput}
          type="text"
          placeholder='Title...'
          aria-label='Search Movies'
          value={search ?? ""}
          onChange={handleChange}
        />
        <button className={searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};
