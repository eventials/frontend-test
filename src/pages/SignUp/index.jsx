import React, { Component } from "react";
import { Container, Form, Img } from "./styles";
import { Link, withRouter } from "react-router-dom";

import api from "../../api/api";

import logo from "../../assets/logo.svg";
// tost warning
import { ToastContainer, toast } from "react-toastify";

import Button from "../../components/Button";

class SignUp extends Component {
  state = {
    valueInputName: "",
    valueInputEmail: "",
    valueInputPassword: ""
  };

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
    event.preventDefault();

    try {
      await api.post("/users", {
        name: this.state.valueInputName,
        email: this.state.valueInputEmail,
        password: this.state.valueInputPassword
      });
      this.props.history.push("/");
      this.notifySuccess("Cadastro efetuado com sucesso!");
    } catch (error) {
      this.notifyError("Falha ao cadastrar usuário!");
    }
  };

  render() {
    return (
      <Container>
        <Img src={logo} alt="Globe" />
        <h2>User Registration</h2>
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
          <Link to="/">Já tenho uma conta!</Link>
          <Button type="submit" label="REGISTER"></Button>
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
    );
  }
}

export default withRouter(SignUp);
