import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    height:100vh;
    .register-content{
        h1{
            color: black;
            font-size: 3.0rem;
            flex: 0 0 100%;
            text-align: center;
            height: auto;
        }
        .input-register{
            border: 1px solid black;
            background-color: white;
            flex: 0 0 30%;
            padding: 30px;
            height: auto;
            form{
                display: flex;
                flex-wrap: wrap;
                justify-content:center;
                input{
                    flex: 0 0 100%;
                    margin-bottom: 20px;
                    padding: 5px 5px;
                }
                .button-register{
                    cursor:pointer;
                    background-color:lightblue;
                    border:none;
                    flex: 0 0 45%;
                }
                .success-message{
                    width: 100%;
                    text-align: left;
                    color: green;
                    margin-bottom:10px;
                }
                .error-message{
                    width: 100%;
                    text-align: left;
                    color: red;
                    margin-bottom:10px;
                }
            }
            
        }
        
    }
`;