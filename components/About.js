import {
  AboutComponent,
  Business,
  BusinessTitle,
  BusinessParagraph,
} from './styles/styledAbout';
import Lead from './Lead';
import { aboutLead } from '../lib/data-arrays/lead-data';

export default function About() {
  return (
    <AboutComponent>
      <Lead data={aboutLead} />


      <Business>
        <BusinessTitle>Our Business</BusinessTitle>
        <BusinessParagraph>
          As a single source for fire protection products and services, we can
          help you save valuable time by eliminating the problems of dealing
          with several service companies. As a full line resource, we provide
          complete consulting, engineering, installation and maintenance
          services.
        </BusinessParagraph>
      </Business>
      <Business>
        <BusinessTitle>Who We Are</BusinessTitle>
        <BusinessParagraph>
          ABT Design and Fire Protection was founded in 1996 with the belief
          that the latest in fire protection technology must be combined with
          the highest level of service in order to provide value to our
          customers. We have grown rapidly and today we are a leader in
          providing advanced fire protection and life safety technology.
        </BusinessParagraph>
        <BusinessParagraph>
          We specialize in meeting our customers requirements with creative,
          innovative and cost-effective solutions no matter how challenging the
          task. We help protect our customers from the ravages of fire, help
          save lives, protect their property and ensure business continuity.
        </BusinessParagraph>
      </Business>
    </AboutComponent>
  );
}
