import React, { Component } from "react";

// icons
import {
  MdChevronLeft,
  MdChevronRight,
  MdDelete,
  MdEdit
} from "react-icons/md";

// tost warning
import { ToastContainer, toast } from "react-toastify";

// api
import api from "../../api/api";

// styles
import { Form, Paginate } from "./styles";

// components styles
import Button from "../../components/Button";
import DropDown from "../../components/DropDown";
import TableCountry from "../../components/TableCountry";

export default class Main extends Component {
  state = {
    valueDropDown: 1,
    valueInput: "empty",
    countries: [],
    countriesTable: [],
    pages: ""
  };

  notify(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  loadCountries = async () => {
    try {
      const response = await api.get("/countries");

      this.setState({
        countries: response.data,
        pages: Math.round(response.data.length / 10)
      });
    } catch (error) {
      this.notify("Falha ao carregar países, atualize a página!");
    }
  };

  loadCountriesToTable = async () => {
    try {
      const response = await api.get(
        "/countries?_sort=population&_order=desc&_page=1&_limit=8"
      );

      this.setState({ countriesTable: response.data });
    } catch (error) {
      this.notify("Falha ao carregar tabela, atualize a página!");
    }
  };

  handlePopulation = async event => {
    if (this.state.valueInput !== "empty") {
      const { id, name, code, population } = this.state.countries.find(
        element => element.id == this.state.valueDropDown
      );

      try {
        const newPopulation = population + parseFloat(this.state.valueInput);

        await api.put(`/countries/${id}`, {
          id: this.state.valueDropDown,
          name,
          code,
          population: newPopulation
        });
      } catch (error) {
        this.notify("População não adicionada!");
      }
    } else {
      this.notify("Preencha o campo de população atual!");
    }

    event.preventDefault();
  };

  componentDidMount() {
    this.loadCountries();
    this.loadCountriesToTable();
  }

  render() {
    return (
      <>
        <Form
          onSubmit={this.handlePopulation}
          withError={this.state.repositoryError}
        >
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
            type="text"
            placeholder="população atual"
            value=""
            onChange={event =>
              this.setState({ valueInput: event.target.value })
            }
          />
          <Button type="submit" label="ADICIONAR" />
        </Form>

        <TableCountry>
          {this.state.countriesTable.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong>
              <span>{c.population}</span>
              <div>
                <button type="button" onClick={() => {}}>
                  <MdDelete size={18} color="#F46357" />
                </button>
                <button type="button" onClick={() => {}}>
                  <MdEdit size={18} color="#F46357" />
                </button>
              </div>
            </li>
          ))}
        </TableCountry>

        <Paginate>
          <button type="button" onClick={() => {}}>
            <MdChevronLeft size={36} color="#F46357" />
          </button>
          {this.state.pages}
          <button type="button" onClick={() => {}}>
            <MdChevronRight size={36} color="#F46357" />
          </button>
        </Paginate>

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
