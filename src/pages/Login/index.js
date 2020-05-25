import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/Login/form-login';
import {Layout} from 'antd';
import {useHistory} from 'react-router-dom';
import sideImage from '../../assets/img/initial-image.png';
import {deleteUserSession} from '../../utils/auth';
const {Sider, Content} = Layout;

const WrapperImage = styled.div`
    width: 100%;
    margin-top: 70px;
    text-align: center;

    @media screen and (max-width: 768px) {
        margin-top: 150px;
        img {
            width: 90%;
        }
    }
`;

const WrapperFooter = styled.div`
    width: 100%;
    margin-top: 145px;
    text-align: center;
    font-family: 'Buda', cursive;
    color: #fff;

    @media screen and (max-width: 768px) {
        margin-top: 50px;
    }

    @media screen and (min-width: 425px) {
        margin-top: 30px;
    }
`;

const Login = (props) => {
    let history = useHistory();
    deleteUserSession();

    const redirectUser = () => {
        history.push('/countries');
    };

    return (
        <Layout style={{minWidth: '100vw', minHeight: '100vh'}}>
            <Sider
                width={420}
                breakpoint="md"
                collapsedWidth="100%"
                /*onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}*/
            >
                <LoginForm redirectUser={redirectUser} />
                <WrapperFooter>Developed by Matheus Palmeira</WrapperFooter>
            </Sider>
            <Layout>
                <Content style={{background: '#DCE9EF'}}>
                    <WrapperImage>
                        <img src={sideImage} alt={'countries'} />
                    </WrapperImage>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Login;
