import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";

import { Container } from "./styled";
import H1 from "../../app/H1";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
            error:false,
            success:false,
            message:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        api.post("/users",
            {
                email: this.state.email,
                password: this.state.password
            },
        ).then( response => {
            this.setState({
                success:true,
                error: false,
                message: response.statusText
            });
            this.props.history.push('/');
        }).catch( error => {
            this.setState({
                success:false,
                error: true,
                message: error.response.data
            });
            console.log(error.response);
        });
        event.preventDefault();
    }


    render(){
        return(
            <Container> 
                <div className="register-content">
                    <H1>
                        Register
                    </H1>
                    <div className="input-register">
                        <form onSubmit={ this.handleSubmit }>
                            {
                                this.state.message
                                &&
                                <p className={this.state.success ? 'success-message' : 'error-message'}>
                                    {this.state.message}
                                </p>
                            }
                            <input  
                                type="text" 
                                placeholder="E-mail" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChange}
                                required
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handleChange}
                                required
                            />
                            <input 
                                type="submit" 
                                value="Register"
                                className="button-register"
                            />
                        </form>
                        
                    </div>
                </div>
            </Container>
        );
    }
};

export default Register;
