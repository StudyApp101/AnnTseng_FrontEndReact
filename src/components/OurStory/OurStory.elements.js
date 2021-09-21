import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 4vh;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #000000;
`;

export const MissionText = styled.p`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 4vh;
  font-size: 1rem;
  line-height: 1.1;
  color: #000000;
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
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;

  @media screen and (max-width: 820px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const PCDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 10%;

  @media screen and (max-width: 820px) {
    max-width: 100%;
    display: inline-block;
    justify-content: center;
    margin-left: 10%;
    margin-right: 20%;
  }
`;


export const PersonCard = styled.button`
    text-align: center;
    padding: 2rem 2rem;
    border: 0;
    width: 100%;
    box-shadow: 0px 2px 15px #FCAECD;
    border-radius: 15px;
    background: #ffffff;
    white-space: nowrap;
    color: #000000;
    font-size: 1.25rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    margin: 2rem;
    &:hover {
        box-shadow: 0px 2px 15px #FCAECD;
        transform: translateY(-7px);
        background: #ffffff;
    }
    
    @media screen and (max-width: 100%) {
      width: 100%;
    }
`;