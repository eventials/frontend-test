const sortCountriesPopulation = countries => {
  countries.sort(function(a, b) {
    return a.population - b.population;
  });
  return countries;
};

const reducer = (state, action) => {
  if (action.type === "ADD_COUNTRY") {
    let countries = [...state.countries, action.country];
    countries = sortCountriesPopulation(countries);
    return { ...state, countries };
  }
  if (action.type === "DEL_COUNTRY") {
    const countries = state.countries.filter(
      item => item.code !== action.country
    );
    return { ...state, countries };
  }
  if (action.type === "UPDATE_COUNTRY") {
    const [country] = state.countries.filter(item => item.code === action.code);
    let countries = state.countries.filter(item => item.code !== action.code);

    const data = {
      ...country,
      population: action.population
    };

    countries = [...countries, data];
    countries = sortCountriesPopulation(countries);

    return { ...state, countries };
  }

  return state;
};

export default reducer;
