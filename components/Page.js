import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import { MobileContext } from '../contexts/mobileContext';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

  :root {
    --blue: #005;
    --fullwidth: 100%;
  }

  html {
    --red: #b00; 
    --black: #393939;
    --grey: #424B54;
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --white: #ffffff;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
    background-color: black;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Fjalla One', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    @media (min-width: 1080px) {
      margin: auto;
    }
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Fjalla One', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  /* max-width: var(--maxWidth); */
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page({ children }) {
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  // measures pageWidth for mobile menu
  useEffect(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia('(max-width: 780px)');
      if (windowWidth.matches) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  });

  return (
    <MobileContext.Provider value={isMobileWidth}>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </MobileContext.Provider>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
