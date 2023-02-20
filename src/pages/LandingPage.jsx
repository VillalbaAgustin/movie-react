import { MoviesGrid } from '../Components/MoviesGrid';
import { Search } from '../Components/Search';
import { useDebounce } from '../hooks/useDebounce';
import { useQuery } from '../hooks/useQuery';
import { ButtonScrollUp } from '../Components/ButtonScrollUp';

export const LandingPage = () => {
  const query = useQuery();
  const search = query.get('search');

  const debouncedSearch = useDebounce(search, 500);
  console.log(debouncedSearch);
  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
      <ButtonScrollUp/>
    </div>
  );
};
