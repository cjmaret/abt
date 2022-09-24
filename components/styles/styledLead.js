import styled from 'styled-components';

export const LeadComponent = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  text-align: center;
  color: white;
  padding: 50px 0;
  @media (max-width: 1000px) {
    padding: 5vw 0;
  }
`;

export const DetailsGroup = styled.div`
  max-width: 1080px;
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 65px;
  }
  @media (max-width: 570px) {
    font-size: 50px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 40px;
  width: 90%;
  line-height: 1.5;
  letter-spacing: 1.5px;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 570px) {
    font-size: 20px;
  }
`;
