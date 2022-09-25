import {
  HeroComponent,
  HeroImageWrapper,
  HeroDetails,
  HeroTitle,
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
