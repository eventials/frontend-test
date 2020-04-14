import { ICountry } from "../configs/country";

export interface ICountryReducer {
  countries: Array<ICountry>;
  selectedCountry: ICountry | null;
}
