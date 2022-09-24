import styled from 'styled-components';

export const ResourcesComponent = styled.section`
  z-index: 10;
  background-color: white;
`;

export const UsefulLinkGroup = styled.div`
  display: grid;
  grid-template-areas:
    'ansul nfpa fdny'
    'pyrochem nfpa badger';
  width: 75%;
  margin: auto;
  align-items: center;
  margin-top: 75px;
  text-align: center;
`;

export const UsefulLink = styled.a`
  transition: all 0.4s ease;
  &:hover {
    opacity: 0.6;
    transform: translate(-3px, -3px);
    cursor: pointer;
  }
`;

export const UsefulLinkAnsul = styled(UsefulLink)`
  grid-area: ansul;
`;

export const UsefulLinkNFPA = styled(UsefulLink)`
  grid-area: nfpa;
`;

export const UsefulLinkFDNY = styled(UsefulLink)`
  grid-area: fdny;
`;

export const UsefulLinkPyrochem = styled(UsefulLink)`
  grid-area: pyrochem;
`;

export const UsefulLinkBadger = styled(UsefulLink)`
  grid-area: badger;
`;

export const UsefulImage = styled.p`
  width: 300px;
  height: auto;
  transition: opacity 0.4s ease, transform 0.4s ease;
`;

export const InfoGroup = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 95px;
`;

export const InfoTitleGroup = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

export const InfoTitle = styled.h2`
  font-size: 60px;
  text-align: center;
  margin: 0;
  line-height: 1.5;
`;

export const InfoSubtitle = styled.p`
  font-size: 35px;
  text-align: center;
  margin: 0 0 10px 0;
`;

export const ExtinguisherClass = styled.div``;

export const ExtinguisherClassTitle = styled.p`
  font-size: 35px;
  margin: 0 0 0 0;
`;

export const ExtinguisherClassDescription = styled.p`
  font-size: 25px;
  font-family: 'Lato', sans-serif;
  margin: 0 0 35px 0;
`;

export const InfoDescription = styled.p`
  display: block;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  line-height: 1.7;
  width: 95%;
  margin: auto;
  margin-bottom: 25px;
`;

export const InfoLink = styled.a`
  width: 50%;
  box-sizing: border-box;
  font-size: 35px;
  display: block;
  padding: 5px;
  line-height: 85px;
  margin: 75px auto 50px auto;
  text-align: center;
  border: 3px solid #005;
  border-radius: 40px;
  align-self: center;
  color: #005;
  transition: 0.4s ease;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: #005;
    color: white;
    cursor: pointer;
  }
`;
