import React, { Component } from "react";
import { api } from "../../../api/api";

import { Container } from "./styled";
import { Dropdown, Form } from "semantic-ui-react";
import H1 from "../../app/H1";
import country from "../../../configs/country";

class Main extends Component{

    constructor (props){
        super(props);

        this.state ={
            options: [],
            selected:"",
            errorMessage:"",

        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.loadDropdown();

    }

    loadDropdown = async() =>{
        await api.get('/countries')
        .then(response => {
            response.data.map( ({ id, name, population })=> {
                let obj = { key:name, text: name, value: {id: id, name:name, population: population}};
                this.state.options.push(obj);
            });
            console.log(this.state.options);
        })
        .catch(error => {
            this.setState({
                errorMessage: "Imposible to load the countries, please reload the page !"
            });
        });

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render(){
        return(
            <Container>
                {console.log(this.state.dropdown)}
                <H1>
                    Countries and populations
                </H1>
                <div className="population-register">
                    
                    <div className="population-form">
                        <Dropdown 
                            placeholder="Select Country"
                            fluid
                            search
                            selection
                            options={ this.state.options }
                            onChange={ (e,  {value} ) => {
                                this.setState({
                                    selected: value
                                });
                            } }
                        />
                        <form className="register-pop-form">
                            <div className="input-section">
                                <label>Country name:</label>
                                <input placeholder="Country" name="country" value={this.state.selected.name} disabled/>
                            </div>
                            <div className="input-section">
                                <label>Population:</label>
                                <input placeholder="Population" name="population" value={this.state.selected.population}/>
                            </div>
                           <button type="submit" className="submit" value="register">Register</button>            
                           <button type="submit" className="change" value="change">Change</button>
                           <button type="submit" className="delete" value="delete">Delete</button>
                        </form>
                        
                    </div>
                </div>
                <div className="population-table">

                </div>
            </Container>
        );
    };
}
export default (Main);