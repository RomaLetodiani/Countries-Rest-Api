import { useEffect, useState } from 'react';
import useStore from '@/components/store/useStore';
import { useDarkMode } from '@/contexts/DarkModeContext';

const Filter = () => {
  const { elemnBg, textColor } = useDarkMode();
  const [region, setRegion] = useState('');
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const { getCountriesByRegion } = useStore();
  useEffect(() => {
    if (!region) return;
    getCountriesByRegion(region);
  }, [region, getCountriesByRegion]);

  return (
    <div>
      <select
        className={`block appearance-none w-full ${elemnBg} ${textColor} text-sm font-bold py-3 px-5 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline`}
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option className="hidden" value="">
          Filter by Region
        </option>
        {regions.map((region) => (
          <option className="py-2" key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
