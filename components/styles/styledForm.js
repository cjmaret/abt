import styled from 'styled-components';

export const FormComponent = styled.form`
  max-width: 635px;
  width: 50%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgb(140, 140, 180), rgb(226, 226, 226));
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: black;
  font-size: 45px;
  margin: 35px auto 0 auto;
  @media (max-width: 680px) {
    font-size: 35px;
    margin: 10px auto 0 auto;
  }
`;

export const FormSubtitle = styled.p`
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: black;
  font-size: 20px;
  text-align: left;
  width: 90%;
  margin: auto;
  margin-bottom: 15px;
  line-height: 1.5;
  @media (max-width: 500px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputGroup = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 15px;
  @media (max-width: 500px) {
    margin-bottom: 5px;
  }
`;

export const InputLabel = styled.label`
  font-size: 17px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const InputSelect = styled.select`
  font-family: 'Lato', sans-serif;
  line-height: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

export const Option = styled.option``;

export const InputCaptcha = styled.input``;

export const InputText = styled.input`
  width: 100%;
  margin: auto;
  height: 30px;
  background-color: white;
  border: none;
  font-family: 'Lato', sans-serif;
  border-radius: 5px;
  &::placeholder {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 30px;
    padding-top: auto;
    padding-bottom: auto;
    padding-left: 3px;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
    border: 2px solid #005;
  }
`;

export const InputTextarea = styled.input`
  width: 100%;
  height: 96px;
  background-color: white;
  border: none;
  margin: auto;
  font-family: 'Lato', sans-serif;
  border-radius: 5px;
  &::placeholder {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 30px;
    margin-top: 9px;
    padding-left: 3px;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
    border: 2px solid #005;
  }
  @media (max-width: 500px) {
    height: 50px;
  }
`;

export const InputGoogleCaptcha = styled.div`
  width: 90%;
  margin: auto;
`;

export const SubmitButton = styled.button`
  background-color: #005;
  border: none;
  transition: 0.4s ease;
  cursor: pointer;
  border-radius: 7px;
  color: white;
  margin: 20px 0 10px 0;
  font-family: 'Fjalla One', sans-serif;
  font-weight: 400;
  font-size: 35px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 50px;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 500px) {
    font-size: 25px;
    margin-top: 10px;
    padding: 5px 25px;
  }
`;
