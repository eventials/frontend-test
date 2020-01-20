import React, { Component } from "react";
import { Container, Form, Img } from "./styles";
import { Link, withRouter } from "react-router-dom";

import api from "../../api/api";
import { login, getToken, email } from "../../api/auth";

import logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";

import Button from "../../components/Button";

class SignIn extends Component {
  state = {
    valueInputEmail: "",
    valueInputPassword: ""
  };

  // Notification Success
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

  // Notification Error
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

  // after submit
  handleSubmit = async () => {
    event.preventDefault();

    try {
      const response = await api.post("/login", {
        email: this.state.valueInputEmail,
        password: this.state.valueInputPassword
      });

      login(response.data.accessToken);
      email(this.state.valueInputEmail);
      this.props.history.push("/main");
      this.notifySuccess("Login efetuado com sucesso!");
    } catch (error) {
      this.notifyError("Falha ao efetuar login!");
    }
  };

  componentDidMount() {
    if (getToken()) {
      this.props.history.push("/main");
    }
  }

  render() {
    return (
      <Container>
        <Img src={logo} alt="Globe" />
        <h2>Country Population</h2>
        <Form onSubmit={this.handleSubmit}>
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
          <a href="">Esqueceu sua senha?</a>
          <Link to="/signUp">Criar conta gratuita</Link>
          <Button type="submit" label="LOGIN"></Button>
        </Form>

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
      </Container>
    );
  }
}

export default withRouter(SignIn);
