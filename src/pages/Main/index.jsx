import React, { Component } from "react";

import Countrys from "../../api/country";

import { Form } from "./styles";

import Button from "../../components/Button";
import DropDown from "../../components/DropDown";

export default class Main extends Component {
  state = {
    country: "",
    countries: []
  };

  getCountry() {
    Countrys()
      .then(res => {
        this.setState({ countries: res });
        //console.log(JSON.stringify(this.state.countries[1].name));
        return res.map(r => r.name);
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  }

  componentDidMount() {
    this.getCountry();
  }

  render() {
    return (
      <Form>
        <DropDown label="Select your country">
          {this.state.countries.map(c => (
            <option key={c.code} value="grapefruit">
              {c.name}
            </option>
          ))}
        </DropDown>
        <input type="text" placeholder="População Atual" />
        <Button type="submit" label="Inserir" onClick={() => {}}></Button>
      </Form>
    );
  }
}
