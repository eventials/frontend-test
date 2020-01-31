import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    h1{
        margin-bottom: 20px;
    }
    .population-register{
        flex: 0 0 100%;
        display: flex;
        justify-content:center;
        .population-form{
            flex: 0 0 50%;
            border: 1px solid black;
            background-color:white;
            padding: 50px;
            .register-pop-form{
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                .input-section{
                    flex: 0 0 50%;
                    margin-bottom: 10px;
                    padding: 0px 20px;
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
                .delete, 
                .change{
                    padding: 5px 15px;
                    border: none;
                    border-radius: 10px;
                    margin-right: 20px;
                    margin-top:20px;
                    width: 100px;
                }
                .submit{
                    background-color: lightblue;
                }
                .change{
                    background-color: lightgreen;
                }
                .delete{
                    background-color: lightpink;
                }
                
            }
        }
    }
`;
