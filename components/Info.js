import Image from 'next/image';
import CardImage1 from '../images/card-images/card-image-1.png';
import CardImage2 from '../images/card-images/card-image-2.jpeg';
import CardImage3 from '../images/card-images/card-image-3.jpeg';
import CardImage4 from '../images/card-images/card-image-4.jpeg';

import image1 from '../images/slideshow/slideshow-2.jpeg'
import {
  InfoSection,
  InfoGrid,
  Card,
  CardTitle,
  CardSubtitle,
  ServiceList,
  ServiceListItem,
  CardDescription,
  PlaceList,
  PlaceListItem,
} from './styles/styledInfo';

export default function Info() {
  return (
    <InfoSection>
      <InfoGrid>
        <Card>
          <CardTitle>Fire Prevention Service - New York</CardTitle>
          <CardSubtitle>Fire Protection Service of Long Island</CardSubtitle>
          <Image src={image1} alt="" />
        </Card>

        <Card>
          <CardTitle>Exhaust Hood & Fire Suppression Systems</CardTitle>
          <CardSubtitle></CardSubtitle>
          <Image src={image1} alt="" />
        </Card>

        <Card>
          <CardTitle>New York Fire Prevention Services</CardTitle>
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
          <CardTitle>Fire Prevention Services of New York</CardTitle>
          <CardDescription>
            ABT Design & Fire Protection is a licensed and insured provider
            headquartered in the Long Island, New York region. Distributing a
            variety of fire extinguishing equipment we provide complete service
            for all municipal, commercial, marine, and residential applications.
          </CardDescription>
          <Image src={image1} alt="" />
        </Card>

        <Card>
          <CardTitle>New York Fire Protection</CardTitle>
          <CardSubtitle>
            Providing restaurant hood and fire prevention products to the
            greater New York region of :
          </CardSubtitle>
          <PlaceList>
            <PlaceListItem>Suffolk County, NY</PlaceListItem>
            <PlaceListItem>Nassau County, NY</PlaceListItem>
            <PlaceListItem>Westchester County, NY</PlaceListItem>
          </PlaceList>
          <CardDescription>
            We design & develop commercial cooking areas and provide rapid sheet
            metal manufacturing options across the New York region. Located in
            Long Island, NY (11706) ABT Design & Fire Protection is a leader in
            fire prevention and mechanical fabrication company. Our services
            extend to design, fabrication and complete installation with state
            of the art ventilation and fire prevention systems in and around the
            New York metropolitan region.
          </CardDescription>
          <Image src={image1} alt="" />
        </Card>

        <Card>
          <CardTitle>Fire Extinguisher Sales and Inspection Service</CardTitle>
          <Image src={image1} alt="" />
        </Card>
      </InfoGrid>
    </InfoSection>
  );
}
