import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  FormComponent,
  FormTitle,
  FormSubtitle,
  Fieldset,
  InputCaptcha,
  InputGoogleCaptcha,
  InputGroup,
  InputLabel,
  InputSelect,
  InputText,
  InputTextarea,
  Option,
  SubmitButton,
  FormSubmitResponse,
} from './styles/styledForm';
import { contactInfo } from '../lib/data-arrays/contact-info';
import validate from '../lib/data-arrays/validate';
import FormErrors from './FormErrors';

export default function Form() {
  const initialInputState = {
    subject: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  };
  const [inputs, setInputs] = useState(initialInputState);
  const [errorText, setErrorText] = useState({
    nameError: '',
    emailError: '',
    messageError: '',
  });
  const [responseText, setResponseText] = useState('');
  const { mainNumber } = contactInfo;

  function handleInputChange(e) {
    const field = e.target.name;
    setInputs({
      ...inputs,
      [field]: e.target.value,
    });
    validate(e, errorText, setErrorText);
  }

  function onSubmit(e) {
    e.preventDefault();
    emailjs
      .send('service_a0venhp', 'template_45ftnjs', inputs, 'cW0sGTEjoOiTjuEa5')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setInputs(initialInputState);
        setResponseText('Thank you, staff at ABT will reply to you shortly');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setResponseText(
          'Sorry, there has been an error. Please try again later'
        );
      });
  }

  function isSubmitDisabled() {
    return errorText.nameError || errorText.emailError || errorText.messageError
      ? true
      : false;
  }

  return (
    <FormComponent onSubmit={onSubmit} className="form">
      <FormTitle>Get In Touch</FormTitle>
      <FormSubtitle>
        Fill out the form or call {mainNumber} to request an estimate or more
        information. We look forward to assisting you!
      </FormSubtitle>
      <FormSubmitResponse>{responseText}</FormSubmitResponse>
      <Fieldset>
        <InputGroup>
          <InputLabel htmlFor="subject">Subject: </InputLabel>
          <InputSelect
            name="subject"
            id="subject"
            required
            onChange={handleInputChange}
            value={inputs.subject}>
            <Option value>Subject</Option>
            <Option value="accounts-receivable">Accounts Receievable</Option>
            <Option value="accounts-payable">Accounts Payable</Option>
            <Option value="human-resources">Human Resources</Option>
            <Option value="quotes-estimates">Quotes/Estimates</Option>
            <Option value="w9-certificates">
              W9/Certificates of Insurance
            </Option>
            <Option value="careers">Careers</Option>
            <Option value="general-feedback">General Feedback</Option>
            <Option value="request-service">Request Service</Option>
          </InputSelect>
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="name">Name*:</InputLabel>
          <InputText
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={inputs.name}
            onChange={handleInputChange}
          />
          {errorText.nameError && (
            <FormErrors formError={errorText.nameError} />
          )}
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="company">Company:</InputLabel>
          <InputText
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            onChange={handleInputChange}
            value={inputs.company}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="email">Email*:</InputLabel>
          <InputText
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            required
            onChange={handleInputChange}
            value={inputs.email}
          />
          {errorText.emailError && (
            <FormErrors formError={errorText.emailError} />
          )}
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="phone">Phone number:</InputLabel>
          <InputText
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={handleInputChange}
            value={inputs.phone}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="message">Message*:</InputLabel>
          <InputTextarea
            type="textarea"
            name="message"
            id="message"
            placeholder="How Can We Help?"
            onChange={handleInputChange}
            value={inputs.message}></InputTextarea>
          {errorText.messageError && (
            <FormErrors formError={errorText.messageError} />
          )}
        </InputGroup>
        <SubmitButton type="submit" disabled={isSubmitDisabled()}>
          Submit
        </SubmitButton>
      </Fieldset>
    </FormComponent>
  );
}
