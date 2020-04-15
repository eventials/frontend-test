import country from "./country";
import language from "./language";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
  countryState: country,
  languageState: language,
});
