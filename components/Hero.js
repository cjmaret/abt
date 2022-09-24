import Image from 'next/image';
import HeroImage from '../public/hero.jpeg';
import {
  HeroComponent,
  HeroImageWrapper,
  HeroDetails,
  HeroTitle,
  HeroImageFade,
  HeroDescription,
} from './styles/styledHero';

export default function Hero() {
  return (
    <HeroComponent>
      <HeroDetails>
        <HeroTitle>ABT Design & Fire Protection</HeroTitle>
        <HeroDescription>Your Fire Protection Specialist</HeroDescription>
      </HeroDetails>
      <HeroImageWrapper>
        <img className="hero-image" src="/hero.jpeg" alt="" />
      </HeroImageWrapper>
    </HeroComponent>
  );
}
