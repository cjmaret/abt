import styled, { css } from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100vw;
  background-color: white;
`;

export const Logo = styled.div`
  width: 100px;
  margin: 15px 0 15px 30px;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 600px) {
    width: 65px;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const mobileNav = `
position: absolute;
right: 10px;
top: 80px;
width: 200px;
background-color: white;
border-radius: 5px;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
`;

export const mobileNavList = `
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

function setMenuDisplay(props) {
  if (props.isMobileWidth) {
    if (props.isMobileMenuOpen) {
      return 'block';
    } else {
      return 'none';
    }
  } else {
    return 'block';
  }
}

export const Nav = styled.nav`
  display: ${(props) => setMenuDisplay(props)};
  margin-right: 20px;
  ${(props) =>
    props.isMobileWidth
      ? css`
          ${mobileNav}
        `
      : ''}
`;

export const mobileNavListItem = `
  width: 70%;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const NavListItem = styled.li`
  margin-right: 10px;
`;

export const NavList = styled.ul`
  font-size: ${(props) => (props.isMobileWidth ? '16px' : '20px')};
  color: black;
  display: flex;
  list-style: none;
  padding: 0;
  ${(props) =>
    props.isMobileWidth
      ? css`
          ${mobileNavList}
        `
      : ''}
  ${NavListItem} {
    ${(props) =>
      props.isMobileWidth
        ? css`
            ${mobileNavListItem}
          `
        : ''}
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.7;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 20px;
  }
`;
