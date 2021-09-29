import styled from 'styled-components';

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const UploadText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    margin-top: 13.9vw;
    margin-bottom: 5vw;
`;

export const InputDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputFile = styled.input`
    font-size: 1.25rem
`;

export const SubmitButton = styled.button`
    margin: 10vh;
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
    &:hover {
        box-shadow: 0px 2px 15px #8EC2FE;
        transform: translateY(-7px);
        background-color: #8EC2FE;
    }
    
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

