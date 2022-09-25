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
} from './styles/styledForm';
import { contactInfo } from '../lib/contact-info';

export default function Form({ handleInputChange }) {
  const initialInputState = {
    subject: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    description: '',
  };
  const [inputs, setInputs] = useState(initialInputState);
  const { mainNumber } = contactInfo;

  function handleInputChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    emailjs
      .send('service_05ri4hs', 'template_45ftnjs', inputs, 'cW0sGTEjoOiTjuEa5')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setInputs(initialInputState);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <FormComponent onSubmit={onSubmit}>
      <FormTitle>Get In Touch</FormTitle>
      <FormSubtitle>
        Fill out the form or call {mainNumber} to request an estimate or more
        information. We look forward to assisting you!
      </FormSubtitle>
      <Fieldset>
        <InputGroup>
          <InputLabel htmlFor="subject">Subject: </InputLabel>
          <InputSelect
            name="subject"
            id="subject"
            required
            onChange={handleInputChange}
            value={inputs.subject}>
            <Option value>Subject*</Option>
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
          <InputLabel htmlFor="name">Name:</InputLabel>
          <InputText
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={inputs.name}
            onChange={handleInputChange}
          />
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
          <InputLabel htmlFor="email">Email:</InputLabel>
          <InputText
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            required
            onChange={handleInputChange}
            value={inputs.email}
          />
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
          <InputLabel htmlFor="description">Description:</InputLabel>
          <InputTextarea
            type="textarea"
            name="description"
            id="description"
            placeholder="How Can We Help?"
            onChange={handleInputChange}
            value={inputs.description}></InputTextarea>
        </InputGroup>
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Fieldset>
    </FormComponent>
  );
}
