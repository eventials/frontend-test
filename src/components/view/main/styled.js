import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    height: 100vh;
    h1{
        margin-bottom: 20px;
        text-align:center;
    }
    .population-register{
        flex: 0 0 100%;
        display: flex;
        justify-content:center;
        .population-form{
            margin-bottom: 50px;
            border-radius: 10px;
            flex: 0 0 75%;
            border: 1px solid black;
            background-color:white;
            padding: 50px;

            .register-pop-form{
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .input-section{
                    flex: 0 0 45%;
                    margin-bottom: 10px;
                    label{
                        display: block;
                    }
                    input{
                        padding: 5px 10px;
                        border-radius: 5px;
                        border-color: black;
                        width: 100%;
                    }
                }
                .submit, 
                .reset, 
                .change{
                    flex: 0 0 30%;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 10px;
                    margin-top:20px;
                    width: 100px;
                }
                .submit{
                    background-color: lightblue;
                }
                .change{
                    background-color: lightgreen;
                }
                .reset{
                    background-color: lightpink;
                }
                
            }
        }
    }
    @media(max-width: 767px){
        .population-register{
            .population-form{
                flex: 0 0 100%;
            }
        }
    }
    @media(max-width: 575px){
        h1{
            font-size: 3.0rem;
        }
        .population-register{
            .population-form{
                .register-pop-form{
                    .input-section{
                        flex:0 0 100%;
                    }
                    .submit, 
                    .reset, 
                    .change{
                        flex: 0 0 100%;
                        padding: 10px 15px;
                        
                    }
                }
            }
        }
    }
`;
