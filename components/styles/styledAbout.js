import styled from 'styled-components';

export const AboutComponent = styled.section`
  z-index: 1;
  background-color: white;
`;

export const Business = styled.div`
  width: 100%;
  margin: 75px 0;
  padding: 0 30px;
  letter-spacing: 2px;
  @media (max-width: 750px) {
    margin: 40px 0;
  }
`;

export const BusinessTitle = styled.div`
  text-align: center;
  font-size: 65px;
  line-height: 1.5;
  @media (max-width: 1000px) {
    font-size: 55px;
  }
  @media (max-width: 750px) {
    font-size: 45px;
  }
  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

export const BusinessParagraph = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 35px;
  line-height: 1.5;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 750px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
