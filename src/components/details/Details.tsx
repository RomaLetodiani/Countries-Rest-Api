import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useDarkMode } from '@/contexts/DarkModeContext';

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [eng: string]: {
        common: string;
        official: string;
      };
    };
  };
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  tld: string[];
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  flags: {
    svg: string;
  };
};

const Details = () => {
  const { name } = useParams<string>() ?? '';
  const { elemnBg, textColor } = useDarkMode();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();
      setCountry(data[0]);
    };
    getCountries();
  }, [name]);
  return (
    <div className="w-full max-w-[1180px] mx-auto py-8 sm:py-12 px-4 sm:px-10">
      <Link to={`/`}>
        <button
          className={`flex justify-center items-center gap-2 shadow-lg my-10 ${elemnBg} ${textColor} font-bold py-3 px-5 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline`}
        >
          <BsArrowLeft /> Back
        </button>
      </Link>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full drop-shadow-xl rounded-xl overflow-hidden flex-[3] md:max-w-xl">
          <img
            className="w-full h-full object-center object-cover"
            src={country?.flags.svg}
            alt={country?.name.common}
          />
        </div>
        <div
          className={`${elemnBg} ${textColor} flex-[4] p-10 rounded-xl shadow-xl`}
        >
          <h1 className="font-bold text-3xl mb-5">
            {country?.name.common || 'Country Name'}
          </h1>
          <div className="flex flex-col min-[550px]:flex-row w-full justify-between gap-10">
            <div>
              <p className="text-sm leading-8">
                <span className="font-bold">Native Name:</span>{' '}
                {country?.name.nativeName[
                  Object.keys(country?.name.nativeName)[0]
                ].official || 'Unknown'}
              </p>
              <p className="text-sm leading-8">
                <span className="font-bold">Population:</span>{' '}
                {country?.population || 'Unknown'}
              </p>
              <p className="text-sm leading-8">
                <span className="font-bold">Region:</span>{' '}
                {country?.region || 'Unknown'}
              </p>
              <p className="text-sm leading-8">
                <span className="font-bold">Sub Region:</span>{' '}
                {country?.subregion || 'Unknown'}
              </p>
              <p className="text-sm leading-8">
                <span className="font-bold">Capital:</span>{' '}
                {country?.capital[0] || 'Unknown'}
              </p>
            </div>
            <div>
              <p className="text-sm leading-8">
                <span className="font-bold">Top Level Domain:</span>{' '}
                {country?.tld[0] || 'Unknown'}
              </p>
              <p className="text-sm leading-8">
                <span className="font-bold">Currencies:</span>{' '}
                {country?.currencies[Object.keys(country?.currencies)[0]]
                  .name || 'Unknown'}
              </p>
              <p className="text-sm leading-8">
                <span className="font-bold">Languages:</span>{' '}
                {Object.values(country?.languages ?? '').join(', ') ||
                  'Unknown'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
