import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: inline-block;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.7rem 0rem;
  margin: 1rem 0rem;
  display: block;
  border: none;
  border-bottom: 0.5px solid black;
  border-radius: 0px;
  box-sizing: border-box;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 820px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const InterFormInputWrapper = styled.div`
  padding: 0vw 5.51vw;
  justify-content: center;
  align-items: center;
`;

export const InterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 4vh;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #000000;
`;

export const EandPIndicator = styled.label`
  font-family: 'Raleway', sans-serif;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.1;
  color: #000000;
`;

export const ImgWrapper = styled.div`
  max-width: 70%;
  margin-left: 15%;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
