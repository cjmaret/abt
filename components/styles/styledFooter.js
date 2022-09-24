import styled, { css } from 'styled-components';

export const FooterComponent = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #005;
  color: white;
  padding-top: 30px;
  position: sticky;
  bottom: 0;
  z-index: 0;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 50px;
  text-align: center;
  margin: 0;
  line-height: 1.5;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 25px;
  }
`;

export const Subtitle = styled.p`
  font-size: 30px;
  text-align: center;
  margin: 0;
  line-height: 1.5;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 17px;
  }
`;

export const Details = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

export const Item = styled.div`
  margin: auto;
  padding-bottom: 0;
  flex-basis: 200px;
`;

const mobileInfo = `
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  padding-bottom: 0;
`;

export const Info = styled(Item)`
  text-align: center;
  font-size: 20px;
  min-width: 50%;
  ${(props) =>
    props.isMobileWidth
      ? css`
          ${mobileInfo}
        `
      : ''}
`;

export const ImageWrapper = styled(Item)`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const TextGroup = styled.div`
  font-size: 18px;
  @media (max-width: 600px) {
    width: 50%;
    font-size: 15px;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const GoogleFrame = styled.iframe`
  margin-bottom: 15px;
  width: 700px;
  @media (max-width: 780px) {
    width: 80%;
  }
`;

export const Colin = styled.div`
  width: 100%;
  height: 45px;
  text-align: center;
  background-color: black;
  margin: auto;
  line-height: 45px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
