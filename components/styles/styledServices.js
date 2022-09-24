import styled from 'styled-components';

export const ServicesComponent = styled.section`
  z-index: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.article`
  display: grid;
  grid-template-columns: ${(props) =>
    props.mobileWidth ? 'repeat(1, 1fr)' : 'repeat(2, auto)'};
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  justify-content: center;
  margin: auto;
  width: 95%;
  position: relative;
  margin: 45px 0;
  max-width: 1200px;
`;

export const MobileCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const MobileTitle = styled.h3`
  font-size: 4vw;
  margin: 0;
  text-align: center;
`;

export const MobileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5vw;
  & > * {
    margin: 0;
  }
`;

export const MobileCardOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  & > * {
    filter: blur(1px);
  }
`;

export const CardOverlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CardContainer = styled.div`
  position: relative;
  .card {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-self: center;
    position: relative;
    transition: transform 0.4s ease;
    overflow: hidden;
    &:hover {
      ${CardOverlay} {
        opacity: 0.9;
      }
      .card-image {
      }
    }
  }
  .popup {
    font-size: 18px;
    margin: 0 0px;
    position: absolute;
    background-color: white;
    z-index: 9999;
    top: 100%;
    left: 0;
    font-family: 'Lato', sans-serif;
    opacity: 0;
    visibility: hidden;
    border: 2px solid black;
    transition: opacity 0.4s ease-in;
    padding: 0 15px;
    &:hover {
      opacity: 1;
      visibility: visible;
    }
    font-size: 18px;
    @media (max-width: 1160px) {
      font-size: 15px;
    }
  }
  .card_inspection:hover + .popup_inspection,
  .popup_inspection:hover {
    opacity: 1;
    visibility: visible;
  }

  .card_extinguisher:hover + .popup_extinguisher,
  .popup_extinguisher:hover {
    opacity: 1;
    visibility: visible;
  }

  .card_systems:hover + .popup_systems,
  .popup_systems:hover {
    opacity: 1;
    visibility: visible;
  }

  .card_hood:hover + .popup_hood,
  .popup_hood:hover {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  height: auto;
  justify-self: center;
  overflow: hidden;
`;

export const CardTitleOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.4s linear;
  z-index: 1;
`;

export const CardTitle = styled.h3`
  position: absolute;
  font-size: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  line-height: 1.3;
  margin: 0;
  padding: 0 10px;
  @media (max-width: 1120px) {
    font-size: 3vw;
  }
`;

export const TextList = styled.ul`
  columns: 2;
  column-width: auto;
  color: ${(props) => (props.mobileWidth ? 'white' : 'black')};
  list-style-position: inside;
  padding: 0;
`;

export const TextListItem = styled.li`
  margin: 5px auto;
  width: 100%;
  line-height: 1.3;
  .list-item-span {
    position: relative;
    left: -5px;
  }
  @media (max-width: 780px) {
    width: 95%;
    margin: 2px auto;
  }
`;

export const Text = styled.p`
  width: 85%;
  margin: 15px auto;
  text-align: left;
  line-height: 1.3;
  @media (max-width: 500px) {
    margin: 10px 0;
  }
`;
