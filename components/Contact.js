import Lead from './Lead';
import {
  ContactComponent,
  ContactFormGroup,
  FormGroupDescription,
  FormGroupTitle,
  FormInfoContainer,
  GoogleMap,
} from './styles/styledContact';
import { contactLead } from '../lib/lead-data';
import Form from './Form';
import { contactInfo } from '../lib/contact-info';

export default function Contact() {
  const { companyName, streetAddress, townAddress, mainNumber, email } =
    contactInfo;

  return (
    <ContactComponent>
      <Lead data={contactLead} />
      <ContactFormGroup>
        <FormInfoContainer>
          <FormGroupTitle>Contact Us</FormGroupTitle>
          <FormGroupDescription>
            {companyName} - Corporate Office
          </FormGroupDescription>
          <FormGroupDescription>{streetAddress}</FormGroupDescription>
          <FormGroupDescription>{townAddress}</FormGroupDescription>
          <FormGroupDescription>Phone: {mainNumber}</FormGroupDescription>
          <FormGroupDescription>Email: {email}</FormGroupDescription>
          <GoogleMap
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12086.448161650214!2d-73.068479!3d40.7705569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x649500e34ba70c87!2sABT%20Design%20Fire%20Protection!5e0!3m2!1sen!2sth!4v1620639093763!5m2!1sen!2sth"
            width="300"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"></GoogleMap>
        </FormInfoContainer>
        <Form />
      </ContactFormGroup>
    </ContactComponent>
  );
}
