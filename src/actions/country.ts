import { ICountry } from "../configs/country";

export const LOAD_COUNTRIES = "LOAD_COUNTRIES";
export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const UPDATE_SELECTED_COUNTRY = "UPDATE_SELECTED_COUNTRY";
export const DELETE_SELECTED_COUNTRY = "DELETE_SELECTED_COUNTRY";

export const loadCountries = (countries: Array<ICountry>) => ({
  type: LOAD_COUNTRIES,
  payload: {
    countries,
  },
});

export const selectCountry = (country: ICountry) => ({
  type: SELECT_COUNTRY,
  payload: {
    country,
  },
});

export const updateSelectedCountry = (country: ICountry) => ({
  type: UPDATE_SELECTED_COUNTRY,
  payload: {
    country,
  },
});

export const deleteSelectedCountry = () => ({
  type: DELETE_SELECTED_COUNTRY,
});
