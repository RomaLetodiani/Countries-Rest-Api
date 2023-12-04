import { create } from 'zustand';
import axios from 'axios';

type country = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    svg: string;
  };
};

type State = {
  countries: country[];
  getCountries: () => void;
  getCountriesByRegion: (region: string) => void;
  getCountriesByName: (name: string) => void;
};

const url = 'https://restcountries.com/v3.1/';

const useStore = create<State>((set) => ({
  countries: [],
  getCountries: async () => {
    const response = await axios.get(`${url}all`);
    set({ countries: response.data });
  },
  getCountriesByRegion: async (region: string) => {
    const response = await axios.get(`${url}region/${region}`);
    set({ countries: response.data });
  },
  getCountriesByName: async (name: string) => {
    const response = await axios.get(`${url}name/${name}`);
    set({ countries: response.data });
  },
}));

export default useStore;
