import styled from 'styled-components';
import EmilySong from '../../images/Members/EmilySong.jpeg';

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

  @media screen and (max-width: 820px) {
    max-width: 100%;
    display: inline-block;
    justify-content: center;
  }
`;


export const PersonCard = styled.button`
    text-align: center;
    border: 0;
    width: 100%;
    box-shadow: 0px 2px 15px #FCAECD;
    border-radius: 15px;
    border: 0.5px solid #8EC2FE;
    background: #ffffff;
    white-space: nowrap;
    color: #000000;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 2rem;
    margin: 2rem;
    &:hover {
        box-shadow: 0px 2px 15px #8EC2FE;
        background: #ffffff;
        border: 0.5px solid #8EC2FE;
    }
    
    @media screen and (max-width: 100%) {
      width: 100%;
    }
`;

export const PCFrontName = styled.h1`
  margin-top: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  white-space: normal;
  text-align: left;
  width: 100%;
  padding-bottom: 0.5rem;
`;

export const PCFrontRole = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 0.875rem;
  white-space: normal;
  text-align: left;
  width: 100%;
`;

export const ProfileImgWrapper = styled.div`
  width: 8rem;
  clip-path: circle(60px at center);
  border: 0.5px solid #8EC2FE;
`;