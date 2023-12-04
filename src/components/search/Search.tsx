import { useDarkMode } from '@/contexts/DarkModeContext';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useStore from '../store/useStore';
const Search = () => {
  const { elemnBg, textColor, inputText } = useDarkMode();
  const [search, setSearch] = useState('');
  const { getCountriesByName } = useStore();

  useEffect(() => {
    if (search) {
      getCountriesByName(search);
    }
  }, [search, getCountriesByName]);

  return (
    <div
      className={`font-bold shadow leading-tight flex gap-3 p-3 justify-center items-center rounded-md ${textColor} ${elemnBg} `}
    >
      <FaSearch />
      <input
        className={`${inputText} leading-tight text-sm bg-transparent outline-none`}
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default Search;
