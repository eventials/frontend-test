import React, { Component } from "react";
import { api } from "../../../api/api";

import { Container } from "./styled";
import { Dropdown, Form } from "semantic-ui-react";
import H1 from "../../app/H1";
import InputMask from 'react-input-mask';



class Main extends Component{

    constructor (props){
        super(props);

        this.state ={
            options: [],
            id:"",
            name:"",
            code:"",
            population: "",
            errorMessage:"",
            disableInput: true,
            disableRegister: true,
            disableChange: true

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.loadDropdown();
    }

    loadDropdown = async() =>{
        await api.get('/countries?_sort=population&_order=desc')
        .then(response => {
            response.data.map( ({ id, name, population, code })=> {
                let obj = { key:name, text: name +' | population: '+ population, value: {id: id, name:name, population: population, code: code}};
                this.state.options.push(obj);
                
            });
            //console.log(this.state.options);
        })
        .catch(error => {
            console.log(error.response);
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

    handleSubmit(event){
        api.put("/countries/"+this.state.id,
            {
                id: this.state.id,
                name: this.state.name,
                code: this.state.code,
                population: this.state.population
            },
        ).then( response => {
            this.setState({
                id: "",
                name: "",
                code: "",
                population:"" 
            });
            window.location.reload(false);
            
        }).catch( error => {
            this.setState({
                errorMessage: "Error ! Please try again later."
            });
        
        });
        event.preventDefault();
    }
    handleReset(event){
        api.put("/countries/"+this.state.id,
            {
                id: this.state.id,
                name: this.state.name,
                code: this.state.code,
                population: 0
            },
        ).then( response => {
            this.setState({
                id: "",
                name: "",
                code: "",
                population:"" 
            });
            window.location.reload(false);
            
        }).catch( error => {
            this.setState({
                errorMessage: "Error ! Please try again later."
            });
        
        });
        event.preventDefault();
    }


    render(){
        
          
        return(
            <Container>
                <div>
                    <H1>
                        Density per countries
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
                                        id: value.id,
                                        name: value.name,
                                        code: value.code,
                                        population:value.population,
                                        disableInput:false
                                    });
                                    if(value.population == 0){
                                        this.setState({
                                            disableRegister: false,
                                            disableChange: true
                                        });
                                    }else{
                                        this.setState({
                                            disableRegister: true,
                                            disableChange: false
                                        });
                                    }
                                } }
                            />
                            <form className="register-pop-form" onSubmit={this.handleSubmit}>
                                <div className="input-section">
                                    <label>Country name:</label>
                                    <input placeholder="Country" name="country" value={this.state.name} disabled/>
                                </div>
                                <div className="input-section">
                                    <label>Population:</label>
                                    <input type="number" min="0" value={this.state.population} onChange={event =>this.setState({ population: event.target.value })} disabled={this.state.disableInput}/>                          
                                </div>
                            <button type="submit" className="submit" value="register" disabled={this.state.disableRegister}>Register</button>            
                            <button type="submit" className="change" value="change" disabled={this.state.disableChange}>Change</button>
                            <button type="submit" className="reset" value="reset" onClick={this.handleReset.bind(this)} disabled={this.state.disableChange}>Reset</button>
                            </form> 
                        </div>
                    </div>
                </div>
            </Container>
        );
    };
}
export default (Main);