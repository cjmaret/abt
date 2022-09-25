import styled from 'styled-components';

export const InfoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  padding: 25px;
  .card-image {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
  background-color: white;
`;

export const InfoGrid = styled.article`
  width: 100%;
  max-width: 1300px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  row-gap: 70px;
  column-gap: 70px;
  margin-top: 25px;
  @media (max-width: 1000px) {
    row-gap: 60px;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);

    row-gap: 50px;
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  max-width: 500px;
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 45px;
  line-height: 1.5;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const CardSubtitle = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const ServiceList = styled.ul`
  list-style-position: inside;
  width: 100%;
  padding: 0;
  font-family: 'Lato', sans-serif;
`;

export const ServiceListItem = styled.li`
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 17px;
  line-height: 1.5;
`;

export const CardDescription = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  font-family: 'Lato', sans-serif;
`;

export const PlaceList = styled.ul`
  margin: 0;
`;

export const PlaceListItem = styled.li``;
