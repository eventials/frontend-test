import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import api from "../../api/api";

import { Form } from "./styles";
import Layout from "../../components/layout";

import Button from "../../components/Button";
import DropDown from "../../components/DropDown";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

class Main extends Component {
  state = {
    valueDropDown: 0,
    valueInput: 0,
    countries: [],
    pagesMax: 0,
    updateChildren: false
  };

  // Notification
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

  // for children change the parent state
  updateState() {
    this.setState({ updateChildren: false });
  }

  // load data of countries
  loadCountries = async () => {
    try {
      const response = await api.get("/countries");

      this.setState({
        countries: response.data,
        pagesMax: Math.round(response.data.length / 10),
        valueDropDown: response.data[0].id
      });
    } catch (error) {
      this.notify("Falha ao carregar países, atualize a página!");
    }
  };

  // add population in a country
  handlePopulation = async event => {
    event.preventDefault();

    if (this.state.valueInput !== "") {
      const { id, name, code, population } = this.state.countries.find(
        element => element.id == this.state.valueDropDown
      );

      try {
        const newPopulation = population + parseFloat(this.state.valueInput);

        if (newPopulation > 0) {
          await api.put(`/countries/${id}`, {
            id: this.state.valueDropDown,
            name,
            code,
            population: newPopulation
          });
          this.setState({ updateChildren: true, valueInput: 0 });
        } else {
          this.notify("A população não pode ser menor que zero!");
        }
      } catch (error) {
        this.notify("População não adicionada!");
      }
    } else {
      this.notify("Preencha o campo de população atual!");
    }
  };

  componentDidMount() {
    this.loadCountries();
  }

  render() {
    return (
      <>
        <Header />
        <Layout>
          <Form onSubmit={this.handlePopulation}>
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
              value={this.state.valueInput}
              onChange={event =>
                this.setState({ valueInput: event.target.value })
              }
            />
            <Button type="submit" label="ADICIONAR" />
          </Form>

          <Pagination
            handleClick={this.loadCountries.bind(this)}
            update={this.state.updateChildren}
            updateState={this.updateState.bind(this)}
          />
        </Layout>

        {/* for toastify */}
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

        <ToastContainer />
      </>
    );
  }
}

Main.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  population: PropTypes.number
};

export default Main;
