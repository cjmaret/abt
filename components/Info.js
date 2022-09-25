import Image from 'next/image';
import SprinklerImage from '../images/info-images/sprinkler.jpeg';
import ExtinguisherImage from '../images/info-images/extinguisher-check.jpeg';
import ExtinguisherSystemImage from '../images/info-images/extinguisher-system.jpeg';

import {
  InfoSection,
  InfoGrid,
  Card,
  CardTitle,
  CardSubtitle,
  ServiceList,
  ServiceListItem,
  CardDescription,
  ImageWrapper,
} from './styles/styledInfo';

export default function Info() {
  return (
    <InfoSection>
      <InfoGrid>
        <Card>
          <CardTitle>Fire Prevention Services of New York</CardTitle>
          <CardDescription>
            ABT Design & Fire Protection is a licensed and insured provider
            headquartered in the Long Island, New York region. Distributing a
            variety of fire extinguishing equipment we provide complete service
            for all municipal, commercial, marine, and residential applications.
          </CardDescription>
          <ImageWrapper>
            <Image src={SprinklerImage} alt="" />
          </ImageWrapper>
        </Card>
        <Card>
          <CardTitle>Our Services</CardTitle>
          <ServiceList>
            <ServiceListItem>
              Mechanical Ventilation Hood Design
            </ServiceListItem>
            <ServiceListItem>Fire Protection System Design</ServiceListItem>
            <ServiceListItem>
              Commercial Exhaust Hood Installation
            </ServiceListItem>
            <ServiceListItem>Stainless Steel Hood Manufacturer</ServiceListItem>
            <ServiceListItem>Grease Hood and Duct Installer</ServiceListItem>
            <ServiceListItem>
              Kitchen Exhaust Fan Repair & Replacement
            </ServiceListItem>
            <ServiceListItem>Return Make Up Air Installation</ServiceListItem>
            <ServiceListItem>Fire Safety Products</ServiceListItem>
            <ServiceListItem>
              Industrial Fire Suppression Systems
            </ServiceListItem>
            <ServiceListItem>
              Fire Extinguisher Sales and Service
            </ServiceListItem>
          </ServiceList>
        </Card>
        <Card>
          <CardTitle>Exhaust Hood & Fire Suppression Systems</CardTitle>
          <CardSubtitle></CardSubtitle>
          <ImageWrapper>
            <Image src={ExtinguisherImage} alt="" />
          </ImageWrapper>
        </Card>
        <Card>
          <CardTitle>Fire Extinguisher Sales and Inspection Service</CardTitle>
          <ImageWrapper>
            <Image src={ExtinguisherSystemImage} alt="" />
          </ImageWrapper>
        </Card>
      </InfoGrid>
    </InfoSection>
  );
}
