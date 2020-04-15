import { ILanguageReducer } from "./types";

const initialState: ILanguageReducer = {
  language: "ptBR",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};
