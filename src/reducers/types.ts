import { ICountry } from "../configs/country";

export type SuportedLanguages = "ptBR" | "enUS";
export interface ICountryReducer {
  countries: Array<ICountry>;
  selectedCountry: ICountry | null;
}

export interface ILanguageReducer {
  language: SuportedLanguages;
}
