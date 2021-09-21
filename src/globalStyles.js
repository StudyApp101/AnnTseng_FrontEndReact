import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 90.27vw;
    margin-right: auto;
    margin-left: auto;
    padding-right: 3.47vw;
    padding-left: 3.47vw;

    @media screen and (max-width:991px) {
        padding-right: 2.08vw;
        padding-left: 2.08vw;
    }
`;

export const Button = styled.button`
    box-shadow: 0px 2px 15px #FCAECD;
    border-radius: 15px;
    background: #FFC9DF;
    white-space: nowrap;
    padding: 12px 64px;
    color: #000000;
    font-size: 1.25rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    margin-top: 30px;
    &:hover {
        box-shadow: 0px 2px 15px #FCAECD;
        transform: translateY(-7px);
        background-color: #FCAECD;
    }
    
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const Button2 = styled.button`
    border-radius: 15px;
    background: #142FA5;
    white-space: nowrap;
    padding: 12px 64px;
    color: #ffffff;
    font-size: 1.25rem;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background-color: ${({ primary }) => (primary ? '#3263CE' : '#142FA5')};
    }
    
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const Button3 = styled.button`
    box-shadow: 0px 2px 15px #DDDDDD;
    border-radius: 15px;
    background: #ffffff;
    white-space: nowrap;
    padding: 12px 64px;
    color: #000000;
    font-size: 1.25rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    margin-top: 30px;
    &:hover {
        box-shadow: 0px 2px 15px #8EC2FE;
        transform: translateY(-7px);
        background-color: #8EC2FE;
    }
    
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle