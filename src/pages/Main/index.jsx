import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";

import api from "../../api/api";

import { Form } from "./styles";
import Button from "../../components/Button";
import DropDown from "../../components/DropDown";
import TableContry from "../../components/TableCountry";

export default class Main extends Component {
  state = {
    valueDropDown: 1,
    valueInput: "",
    countries: [],
    countriesTable: []
  };

  notify() {
    toast.error("Falha ao carregar países, atualize a página!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  loadCountries = async () => {
    const response = await api.get("/countries");

    this.setState({ countries: response.data });
  };

  loadCountriesToTable = async () => {
    const response = await api.get(
      "/countries?_sort=population&_order=desc&_page=1&_limit=8"
    );

    // countries?_pages=10_sort=views&_order=asc

    this.setState({ countriesTable: response.data });
  };

  getCountry = async () => {
    const result = await await api.get(
      `/countries/${this.state.valueDropDown}`
    );

    return result;
  };

  addPopulation = async event => {
    const { id, name, code, population } = this.state.countries.find(
      element => element.id == this.state.valueDropDown
    );

    const newPopulation = population + parseFloat(this.state.valueInput);

    await api
      .put(`/countries/${id}`, {
        id: this.state.valueDropDown,
        name,
        code,
        population: newPopulation
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
  };

  componentDidMount() {
    this.loadCountries();
    this.loadCountriesToTable();
  }

  render() {
    return (
      <>
        <Form onSubmit={this.addPopulation}>
          <DropDown
            value={this.state.valueDropDown}
            onChange={event =>
              this.setState({ valueDropDown: event.target.value })
            }
          >
            {this.state.countries.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </DropDown>

          <input
            type="number"
            placeholder="população atual"
            value={this.state.valueInput}
            onChange={event =>
              this.setState({ valueInput: event.target.value })
            }
          />
          <Button type="submit" label="Enviar" />
        </Form>

        <TableContry>
          {this.state.countriesTable.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong>
              <span>{c.population}</span>
            </li>
          ))}
        </TableContry>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </>
    );
  }
}
