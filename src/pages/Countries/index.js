import React, {useState} from 'react';
import {Layout} from 'antd';
import styled from 'styled-components';
import imgCountries1 from '../../assets/img/footer-contries.PNG';
import FormCountries from '../../components/countries/form-countries';
import TableCountries from '../../components/countries/table-countries';
const {Sider, Content} = Layout;

const WrapperFooter = styled.div`
    width: 100%;
    margin-top: 150px;
    text-align: center;
    font-family: 'Buda', cursive;
    color: #fff;

    @media screen and (max-width: 1024px) {
        margin-top: 60px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 70px;
    }

    @media screen and (max-width: 425px) {
        margin-top: 30px;
    }
`;

const WrapperImage = styled.div`
    width: 80%;
    margin-left: 50px;
    margin-top: 80px;

    @media screen and (max-width: 1024px) {
        width: 80%;
        margin-left: 30px;
        margin-top: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: 30px;
        margin-top: 80px;
    }
`;

const Countries = () => {
    const [editedCountries, setEditedCountries] = useState([]);

    const getEditedCountries = (country) => {
        const newEditedCountries = [...editedCountries, country];
        setEditedCountries(newEditedCountries);
    };

    const orderEditedCountries = (order) => {
        const editedCountriesOrdered = editedCountries;

        if (order)
            editedCountriesOrdered.sort((a, b) => a.population - b.population);
        else
            editedCountriesOrdered.sort((a, b) => a.name.localeCompare(b.name));

        setEditedCountries(editedCountriesOrdered);
    };

    const deleteEditedCountries = (countryCode) => {
        const newEditedCountries = editedCountries.filter(
            (country) => country.code !== countryCode
        );

        setEditedCountries(newEditedCountries);
    };

    return (
        <Layout style={{minWidth: '100vw', minHeight: '100vh'}}>
            {/*<WrapperSider>
            </WrapperSider>*/}
            <Sider
                width={window.innerWidth <= 768 ? 420 : 550}
                breakpoint="md"
                collapsedWidth="100%"
                /*onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}*/
            >
                <FormCountries
                    getEditedCountries={getEditedCountries}
                    deleteEditedCountries={deleteEditedCountries}
                    orderEditedCountries={orderEditedCountries}
                />
                <WrapperFooter>Developed by Matheus Palmeira</WrapperFooter>
            </Sider>
            <Layout>
                <Content style={{background: '#DCE9EF'}}>
                    <TableCountries editedCountries={editedCountries} />
                    <WrapperImage>
                        <img
                            src={imgCountries1}
                            alt={'countries-1'}
                            width={'100%'}
                        />
                    </WrapperImage>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Countries;

/*                <WrapperImage>
                    <img src={sideImage} alt={'countries'} />
                </WrapperImage>*/
