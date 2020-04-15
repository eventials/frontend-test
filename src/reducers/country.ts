import { ICountryReducer } from "./types";
import { ICountry } from "../configs/country";
import {
  LOAD_COUNTRIES,
  SELECT_COUNTRY,
  UPDATE_SELECTED_COUNTRY,
  DELETE_SELECTED_COUNTRY,
} from "../actions/country";

const initialState: ICountryReducer = {
  countries: [],
  selectedCountry: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.payload.countries,
      };
    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload.country,
      };
    case UPDATE_SELECTED_COUNTRY:
      return {
        ...state,
        countries: state.countries.map((country: ICountry) =>
          country.code !== state.selectedCountry?.code
            ? country
            : action.payload.country
        ),
      };
    case DELETE_SELECTED_COUNTRY:
      return {
        countries: state.countries.filter(
          (country: ICountry) => country.code !== state.selectedCountry?.code
        ),
        selectedCountry: null,
      };
    default:
      return state;
  }
};
