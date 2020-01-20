import React, { Component } from "react";
import api from "../../api/api";
import Header from "../../components/Header";
import Button from "../../components/Button";

import logo from "../../assets/logo.svg";

import { Container, Form, Img, Buttons } from "./styles";
import Layout from "../../components/layout";
import { ToastContainer, toast } from "react-toastify";

export default class EditCountry extends Component {
  state = {
    id: "",
    code: "",
    valueInputName: "",
    valueInputPopulation: ""
  };

  // notification success
  notifySuccess(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
  // notification error
  notifyError(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  // load data for the inputs
  loadData = async () => {
    const { id } = this.props.location.state;

    try {
      const {
        data: { name, population, code }
      } = await api.get(`/countries/${id}`);

      this.setState({
        valueInputName: name,
        valueInputPopulation: population.toString(),
        code: code,
        id: id
      });
    } catch (error) {
      this.notifyError("Não foi possível carregar seus dados!");
    }
  };

  // after submit
  handleSubmit = async event => {
    const { id } = this.props.location.state;
    event.preventDefault();

    if (
      this.state.valueInputName !== "" &&
      this.state.valueInputPopulation !== ""
    ) {
      try {
        await api.put(`/countries/${id}`, {
          id: this.state.id,
          name: this.state.valueInputName,
          code: this.state.code,
          population: parseFloat(this.state.valueInputPopulation)
        });

        this.props.history.push("/main");
        this.notifySuccess("Dados atualizados!");
      } catch (error) {
        this.notifyError("População não adicionada!");
      }
    } else {
      this.notifyError("Preencha o campo de população atual!");
    }
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <>
        <Header />
        <Layout>
          <Container>
            <Img src={logo} alt="Globe" />
            <h2>Edit Country </h2>
            <Form onSubmit={this.handleSubmit}>
              <input
                type="name"
                placeholder="Nome"
                value={this.state.valueInputName}
                onChange={event =>
                  this.setState({ valueInputName: event.target.value })
                }
              />

              <input
                type="text"
                placeholder="População atual"
                value={this.state.valueInputPopulation}
                onChange={event =>
                  this.setState({ valueInputPopulation: event.target.value })
                }
              />

              <Buttons>
                <Button type="submit" label="SALVAR" />
              </Buttons>
            </Form>

            {/* for Toastify*/}
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
          </Container>
        </Layout>
      </>
    );
  }
}
