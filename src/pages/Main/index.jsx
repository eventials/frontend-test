import React, { useEffect, useState, useReducer } from "react";

import Button from "../../components/Button";
import { Form, Container, Info } from "./styles";

import apiCountries from "../../api/country";

import reducer from "../../reducers";

import Country from "../../components/Country";
import Alert from "../../components/Alert";

const Main = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    country: "",
    population: ""
  });

  const [data_state, dispatch] = useReducer(reducer, {
    countries: []
  });

  useEffect(() => {
    async function getCountriesData() {
      const promise = await apiCountries();
      setCountriesData(promise);
    }
    getCountriesData();
  }, []);

  const onChange = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    });
  };

  const getCountry = (countries, code) => {
    return countries.filter(country => country.code === code);
  };

  const addCountry = () => {
    const isCountry =
      getCountry(data_state.countries, form.country).length === 0;

    if (!form.country) {
      setError("Informe o País");
      return;
    }
    if (!form.population) {
      setError("Informe o tamanho da população");
      return;
    }

    if (isCountry) {
      const [countries] = getCountry(countriesData, form.country);
      const { code, name } = countries;
      const country = {
        code,
        name,
        population: form.population
      };

      dispatch({ type: "ADD_COUNTRY", country });

      setForm({ country: "", population: "" });
    } else {
      setError("Este País já foi adicionado");
    }
  };

  const deleteCountry = country => {
    dispatch({ type: "DEL_COUNTRY", country });
  };

  const updateCountry = (code, population) => {
    dispatch({ type: "UPDATE_COUNTRY", code, population });
  };

  const closeError = () => {
    setError(null);
  };

  return (
    <div>
      <Info>* Para alterar a população de um País clique em cima do valor</Info>
      {error && <Alert closeError={closeError}>{error}</Alert>}
      <Form>
        <select
          name="country"
          value={form.country}
          onChange={onChange("country")}
        >
          <option>Selecione um País</option>
          {countriesData.map(country => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="population"
          value={form.population}
          placeholder="População"
          onChange={onChange("population")}
        />
        <Button type="submit" label="Adicionar" onClick={addCountry}></Button>
      </Form>
      <Container>
        {data_state.countries.map(country => (
          <Country
            key={country.code}
            country={country}
            deleteCountry={deleteCountry}
            updateCountry={updateCountry}
          />
        ))}
      </Container>
    </div>
  );
};

export default Main;
