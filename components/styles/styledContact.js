import styled from 'styled-components';

export const ContactComponent = styled.section`
  z-index: 10;
  background-color: white;
`;


export const ContactFormGroup = styled.div`
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 109px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
    margin-bottom: 75px;
  }
`;

export const FormGroupTitle = styled.h2`
  font-family: 'Fjalla One', serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 42px;
  letter-spacing: -0.36px;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const FormGroupDescription = styled.p`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  margin: 0;
  margin-top: 10px;
  &:first-of-type {
    margin-top: 25px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    margin: 0;
  }
`;

export const GoogleMap = styled.iframe`
  padding-top: 25px;
  width: 100%;
  height: 90%;
  border: none;
  @media (max-width: 1000px) {
    width: 600px;
    height: 300px;
  }
  @media (max-width: 680px) {
    width: 100%;
  }
`;
