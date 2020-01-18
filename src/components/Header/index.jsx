import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../../api/auth";

import logo from "../../assets/logo.svg";
import { Container, Content, Right } from "./styles";

class Header extends Component {
  state = {};
  handleLogout() {
    logout();
    this.props.history.push("/");
  }
  render() {
    return (
      <Container>
        <Content>
          <nav>
            <img src={logo} alt="Country Population" style={{ height: 60 }} />
            <Link to="/main">Home</Link>
          </nav>

          <Right>
            <div>
              <strong>Daniel</strong>
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
