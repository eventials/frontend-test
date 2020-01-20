import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { logout, getEmail } from "../../api/auth";
import api from "../../api/api";

import logo from "../../assets/logo.svg";
import { Container, Content, Right } from "./styles";

class Header extends Component {
  state = {
    name: ""
  };

  // make logout
  handleLogout() {
    logout();
    this.props.history.push("/");
  }

  // load name in the header
  loadName = async () => {
    try {
      const response = await api.get("/users", {
        params: {
          email: getEmail()
        }
      });

      const { name } = response.data[0];
      this.setState({ name });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.loadName();
  }
  render() {
    return (
      <Container>
        <Content>
          <nav>
            <Link to="/main">
              <img src={logo} alt="Country Population" style={{ height: 60 }} />
            </Link>
            <Link to="/main">Home</Link>
          </nav>

          <Right>
            <div>
              <strong>Bem vindo (a), {this.state.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button" onClick={() => this.handleLogout()}>
              Logout
            </button>
          </Right>
        </Content>
      </Container>
    );
  }
}

export default withRouter(Header);
