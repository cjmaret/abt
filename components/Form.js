import emailjs from '@emailjs/browser';
import { useState } from 'react';
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

export default function Form({ handleInputChange }) {
  const [inputs, setInputs] = useState({
    subject: 'accounts-receivable',
    name: 'Colin',
    company: 'Freelance',
    email: 'cjmaret@gmail.com',
    phone: '9',
    description: 'Halp',
  });

  function handleInputChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  console.log(inputs);

  function onSubmit(e) {
    e.preventDefault();
    emailjs
      .send('service_rrhc91b', 'template_45ftnjs', inputs, 'cW0sGTEjoOiTjuEa5')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <FormComponent onSubmit={onSubmit}>
      <FormTitle>Get In Touch</FormTitle>
      <FormSubtitle>
        Fill out the form or call ###-###-#### to request an estimate or more
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

        <InputCaptcha type="hidden" name="_captcha" value="false" />

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

        <InputGoogleCaptcha data-sitekey="#########################"></InputGoogleCaptcha>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Fieldset>
    </FormComponent>
  );
}
