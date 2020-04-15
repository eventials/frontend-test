import { ILanguageReducer } from "./types";
import Persist from "../helpers/persist";

const initialState: ILanguageReducer = {
  language: Persist.loadSelectedLanguage() || "ptBR",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      Persist.saveSelectedLanguage(action.payload.language);
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};
