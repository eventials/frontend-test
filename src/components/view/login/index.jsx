import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";


import { Container } from "./styled";
import H1 from "../../app/H1";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
            loginErrors:'',
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
        api.post("/login",
            {
                email: this.state.email,
                password: this.state.password
            },
        ).then( response => {

            localStorage.setItem('token', response.data.accessToken);
            this.props.history.push('/main');
            return;
        }).catch( error => {
            this.setState({
                loginErrors: "Invalid login !"
            })
        
        });
        event.preventDefault();
    }

    render(){
        return(
            <Container> 
                <div className="login-content">
                    <H1>
                        Login
                    </H1>
                    <div className="input-login">
                        <form onSubmit={ this.handleSubmit }>
                            {
                                this.state.loginErrors
                                &&
                                <p className='error-message'>
                                    {this.state.loginErrors}
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
                                value="Login"
                                className="button-login"
                            />
                            <Link to={ "/register" }>
                                <button className="button-register">
                                    Registrar
                                </button>
                            </Link>
                        </form>
                        
                    </div>
                </div>
            </Container>
        );
    }
};

export default Login;

