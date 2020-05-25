import React from 'react';
import {Table} from 'antd';
import styled from 'styled-components';

export const WrapperTitle = styled.div`
    color: #001529;
    margin-top: 100px;
    margin-left: 20px;
    font-family: 'Buda', cursive;
    font-size: 30px;
    margin-bottom: 20px;

    @media screen and (max-width: 1024px) {
        margin-top: 80px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 70px;
    }
`;

export const WrapperContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin-left: 50px;

    @media screen and (max-width: 1024px) {
        width: 380px;
        margin-left: 30px;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
        margin-left: 30px;
    }
`;

const columnsTable = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'nameColumn',
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'codeColumn',
    },
    {
        title: 'Population',
        dataIndex: 'population',
        key: 'populationColumn',
    },
];

const TableCountries = (props) => {
    return (
        <WrapperContent>
            <WrapperTitle>Edited Countries</WrapperTitle>
            <Table
                columns={columnsTable}
                dataSource={props.editedCountries}
                size={'small'}
                style={{width: '100%'}}
                rowKey={'code'}
            />
        </WrapperContent>
    );
};

export default TableCountries;
