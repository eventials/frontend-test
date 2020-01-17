import React, { Component } from "react";

import logo from "../../assets/logo.svg";

import { Container, Form, Img } from "./styles";

import Button from "../../components/Button";

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <Img src={logo} alt="Globe" />

        <Form>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />

          <Button type="submit" label="Login"></Button>

          {/* <Link to="/register">Criar conta gratuita</Link> */}
        </Form>
      </Container>
    );
  }
}
