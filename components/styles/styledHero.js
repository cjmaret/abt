import styled from 'styled-components';

export const HeroComponent = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const HeroDetails = styled.div`
  width: 100%;
  text-align: center;
  z-index: 3;
  background-color: rgba(0, 0, 85, 1);
  padding: 10px 0;
`;

export const HeroTitle = styled.h1`
  font-size: 55px;
  color: white;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.6;
  @media (max-width: 780px) {
    font-size: 40px;
  }
  @media (max-width: 580px) {
    font-size: 6.5vw;
  }
`;

export const HeroDescription = styled.p`
  font-size: 30px;
  color: white;
  margin: 0;
  line-height: 1.3;
  @media (max-width: 780px) {
    font-size: 25px;
  }
  @media (max-width: 580px) {
    font-size: 4.5vw;
  }
`;

export const HeroImageWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const HeroImageFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 89, 0.2);
  z-index: 2;
`;
