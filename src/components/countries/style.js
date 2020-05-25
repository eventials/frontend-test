import styled from 'styled-components';

export const WrapperFormTitles = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #ffff;
    margin-top: 100px;
    margin-left: 20px;
    font-family: 'Buda', cursive;
`;

export const WrapperSwitch = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40px;
    height: 40px;
    color: #fff;
    margin-left: 10px;
    bottom: 15px;
    position: inherit;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
        margin-left: 10px;
    }

    @media screen and (max-width: 425px) {
        width: 60px;
        height: 60px;
        margin-top: 20px;
    }

    @media screen and (max-width: 360px) {
        margin-left: 12px;
    }
`;

export const FormTitle = styled.div`
    font-size: 25pt;
    line-break: loose;
    width: 300px;
    text-align: left;
`;
export const FormSubtitle = styled.div`
    font-size: 12pt;
    line-break: loose;
    width: 300px;
    text-align: left;
`;

export const WrapperCountriesForm = styled.div`
    margin-top: 50px;
    margin-left: 15px;
    label {
        color: #fff;
    }
`;
