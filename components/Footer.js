import Image from 'next/image';
import { useContext } from 'react';
import AnsulImage from '../images/footer/ansul.jpeg';
import PyrochemImage from '../images/footer/pyrochem.jpeg';
import { MobileContext } from '../contexts/mobileContext';
import {
  FooterComponent,
  Title,
  Subtitle,
  Details,
  ImageWrapper,
  Info,
  Company,
  Address,
  Number,
  GoogleFrame,
  Colin,
  AddressGroup,
  NumberGroup,
  Text,
  TextGroup,
  FooterLink,
} from './styles/styledFooter';
import { contactInfo } from '../lib/data-arrays/contact-info';
import Link from 'next/link';

export default function Footer() {
  const isMobileWidth = useContext(MobileContext);
  const { fullAddress, mainNumber, faxNumber, textNumber, email } = contactInfo;

  return (
    <FooterComponent>
      <Title>ABT Design & Fire Protection</Title>
      <Subtitle>Your Fire Protection Specialist</Subtitle>
      <Details>
        {!isMobileWidth && (
          <ImageWrapper>
            <Image src={PyrochemImage} alt="" />
          </ImageWrapper>
        )}
        <Info isMobileWidth={isMobileWidth}>
          <TextGroup>
            <Text>ABT Design & Fire Protection</Text>
            <Text>{fullAddress}</Text>
          </TextGroup>
          <TextGroup>
            <Text>Phone: {mainNumber}</Text>
            <Text>Fax: {faxNumber}</Text>
            <Text>Text: {textNumber}</Text>
            <Text>
              Email:{' '}
              <Link href="/contact">
                <FooterLink>{email}</FooterLink>
              </Link>
            </Text>
          </TextGroup>
        </Info>
        {!isMobileWidth && (
          <ImageWrapper>
            <Image src={AnsulImage} alt="" />
          </ImageWrapper>
        )}
      </Details>
      <GoogleFrame
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12086.448161650214!2d-73.068479!3d40.7705569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x649500e34ba70c87!2sABT%20Design%20Fire%20Protection!5e0!3m2!1sen!2sth!4v1620639093763!5m2!1sen!2sth"
        width="300"
        height="200"
        allowfullscreen=""
        loading="lazy"></GoogleFrame>
      <Colin>Designed and built by Colin Maretsky, ©2022</Colin>
    </FooterComponent>
  );
}
