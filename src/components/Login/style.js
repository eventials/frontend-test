import styled from 'styled-components';

export const WrapperLoginForm = styled.div`
    width: 300px;
    text-align: center;
    justify-content: 'center';
    margin-left: 60px;

    label {
        color: #fff;
        font-size: 14pt;
    }

    @media screen and (max-width: 375px) {
        margin-left: 40px;
    }

    @media screen and (max-width: 375px) {
        margin-left: 30px;
    }
`;

export const WrapperTitles = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #ffff;
    justify-content: center;
    margin-top: 100px;
    font-family: 'Buda', cursive;
`;

export const LoginTitle = styled.div`
    font-size: 25pt;
    line-break: loose;
    width: 300px;
    text-align: right;
`;
export const LoginSubtitle = styled.div`
    font-size: 12pt;
    line-break: loose;
    width: 300px;
    text-align: right;
`;
