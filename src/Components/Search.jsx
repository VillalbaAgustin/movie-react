import {
  searchContainer,
  searchBox,
  searchInput,
  searchButton,
} from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

export const Search = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setSearchText(search || '');
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/?search=' + searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form className={searchContainer} onSubmit={handleSubmit}>
      <div className={searchBox}>
        <input
          className={searchInput}
          type="text"
          value={searchText}
          onChange={handleChange}
        />
        <button className={searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};
