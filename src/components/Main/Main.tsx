import { useEffect, useState } from 'react';
import Card from '../card/Card';
import Filter from '../filter/Filter';
import Search from '../search/Search';
import useStore from '../store/useStore';
import { useDarkMode } from '@/contexts/DarkModeContext';

const Main = () => {
  const { elemnBg, textColor } = useDarkMode();
  const { countries, getCountries } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = 0;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto py-8 sm:py-12 px-4 sm:px-10">
      <div className="flex flex-col gap-5 min-[600px]:flex-row justify-between items-center w-full mb-10">
        <Search />
        <Filter />
      </div>
      <div>
        <div className="w-full flex flex-wrap gap-8 justify-center">
          {currentCountries &&
            currentCountries.map((country) => {
              if (!country.capital) {
                country.capital = ['Unknown'];
              }
              const { name, population, region, capital, flags } = country;
              return (
                <Card
                  key={name.common}
                  name={name.common}
                  official={name.official}
                  pop={population}
                  reg={region}
                  cap={capital[0]}
                  img={flags.svg}
                />
              );
            })}
        </div>
        {countries.length - 1 > indexOfLastCountry && (
          <button
            className={`block mx-auto shadow-lg mt-10 ${elemnBg} ${textColor} font-bold py-3 px-5 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline`}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
