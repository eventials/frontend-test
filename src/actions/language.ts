import { SuportedLanguages } from "../reducers/types";

export const SET_LANGUAGE = "SET_LANGUAGE";

export const setLanguage = (language: SuportedLanguages) => ({
  type: SET_LANGUAGE,
  payload: {
    language,
  },
});
