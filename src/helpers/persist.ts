import { ICountry } from "../configs/country";
import { SuportedLanguages } from "../reducers/types";

const __COUNTRIES_KEY__ = "updatedCountries";
const __LANGUAGES_KEY__ = "selectedLanguage";

const Persist = {
  saveSelectedLanguage: (lang: SuportedLanguages) => {
    localStorage.setItem(__LANGUAGES_KEY__, lang);
  },

  loadSelectedLanguage: (): SuportedLanguages => {
    return localStorage.getItem(__LANGUAGES_KEY__) as SuportedLanguages;
  },

  insert: (country: ICountry) => {
    const storedCountries = Persist.load();

    const foundCountry = storedCountries.find(
      (storedCountry: ICountry) => storedCountry.code === country.code
    );

    let updatedCountries = null;

    if (foundCountry) {
      updatedCountries = storedCountries.map((storedCountry: ICountry) =>
        storedCountry.code !== country.code ? storedCountry : country
      );
    } else {
      updatedCountries = [...storedCountries, country];
    }

    localStorage.setItem(__COUNTRIES_KEY__, JSON.stringify(updatedCountries));
  },

  load: () => {
    const storedCountries = localStorage.getItem(__COUNTRIES_KEY__);
    return storedCountries ? JSON.parse(storedCountries) : [];
  },

  clear: () => {
    localStorage.removeItem(__COUNTRIES_KEY__);
  },

  hasItems: () => {
    const storedCountries = Persist.load();
    return storedCountries.length > 0;
  },
};

export default Persist;
