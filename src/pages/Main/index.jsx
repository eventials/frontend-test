import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";

import Countrys from "../../api/country";

import { Form } from "./styles";

import Button from "../../components/Button";
import DropDown from "../../components/DropDown";

export default class Main extends Component {
  state = {
    country: "",
    countries: []
  };

  notify() {
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  getCountry() {
    Countrys()
      .then(res => {
        this.setState({ countries: res });
        //console.log(JSON.stringify(this.state.countries[1].name));
        return res.map(r => r.name);
      })
      .catch(err => {
        console.log("Error: " + err);
        this.notify();
      });
  }

  componentDidMount() {
    this.getCountry();
  }

  render() {
    return (
      <>
        <Form>
          <DropDown label="Select your country">
            {this.state.countries.map(c => (
              <option key={c.code} value="grapefruit">
                {c.name}
              </option>
            ))}
          </DropDown>
          <input type="text" placeholder="População Atual" />
          <Button type="submit" label="Inserir" onClick={this.notify}></Button>
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
      </>
    );
  }
}
