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
  margin-bottom: 13vh;
  font-size: 1rem;
  line-height: 1.1;
  color: #000000;
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 90px 0;
  background: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
`;

export const PDFviewer = styled.iframe`
  height: 80vh;
  width: 40vw;
  border: none;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
`;

export const Noteviewer = styled.textarea`
  height: 80vh;
  width: 40vw;
  margin-left: 30px;
  color: grey;
`;