import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getEmail } from "../../api/auth";
import api from "../../api/api";
import Header from "../../components/Header";
import Button from "../../components/Button";

import user from "../../assets/user.svg";

import { Container, Form, Img, Buttons } from "./styles";
import Layout from "../../components/layout";
// tost warning
import { ToastContainer, toast } from "react-toastify";

export default class Main extends Component {
  state = { valueInputEmail: "", valueInputName: "", valueInputPassword: "" };

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

  handleSubmit = async () => {
    try {
      const response = await api.get("/users", {
        params: {
          email: getEmail()
        }
      });

      const { name, email } = response.data[0];
      this.setState({ valueInputEmail: email, valueInputName: name });
    } catch (error) {}
  };

  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    return (
      <>
        <Header />
        <Layout>
          <Container>
            <Img src={user} alt="Globe" />
            <h2>User Profile </h2>
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
                type="email"
                placeholder="Seu e-mail"
                autoComplete="email"
                value={this.state.valueInputEmail}
                onChange={event =>
                  this.setState({ valueInputEmail: event.target.value })
                }
              />
              <input
                type="password"
                placeholder="Sua senha"
                autoComplete="current-password"
                value={this.state.valueInputPassword}
                onChange={event =>
                  this.setState({ valueInputPassword: event.target.value })
                }
              />
              <Buttons>
                <Button type="submit" label="SALVAR"></Button>
                <Button type="submit" label="CANCELAR"></Button>
              </Buttons>
            </Form>

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
          </Container>
        </Layout>
      </>
    );
  }
}
