import React, { Component } from "react";
import { getEmail } from "../../api/auth";
import api from "../../api/api";
import Header from "../../components/Header";

import user from "../../assets/user.svg";

import { Container, Form, Img } from "./styles";
import Layout from "../../components/layout";
import { ToastContainer, toast } from "react-toastify";

export default class Profile extends Component {
  state = {
    valueInputName: "",
    valueInputEmail: ""
  };
  // Notification
  notify() {
    toast.error("Não foi possível carregar seus dados!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
  // load profile data
  loadData = async () => {
    try {
      const response = await api.get("/users", {
        params: {
          email: getEmail()
        }
      });

      const { name, email } = response.data[0];
      this.setState({ valueInputName: name, valueInputEmail: email });
    } catch (error) {
      this.notify();
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
            <Img src={user} alt="Globe" />
            <h2>User Profile </h2>
            <Form>
              <input
                type="name"
                placeholder="Nome"
                value={this.state.valueInputName}
                disabled={true}
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                autoComplete="email"
                value={this.state.valueInputEmail}
                disabled={true}
              />
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
