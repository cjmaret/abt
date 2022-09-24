import LogoImage from '../images/abt-logo.png';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import Image from 'next/image';
import {
  HeaderComponent,
  Logo,
  Nav,
  NavList,
  NavListItem,
  NavLink,
  IconWrapper,
  MobileNavLink,
  LogoWrapper,
} from './styles/styledHeader';
import CloseIcon from '../images/icons/close-icon.png';
import HamburgerIcon from '../images/icons/hamburger-icon.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();
  const iconRef = useRef();
  const isMobileWidth = useContext(MobileContext);

  function toggleMobileMenu() {
    isMobileMenuOpen ? setIsMobileMenuOpen(false) : setIsMobileMenuOpen(true);
  }

  // close menu on click outside
  useEffect(() => {
    function checkIfClickedOutside(e) {
      if (
        isMobileWidth &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('mousedown', checkIfClickedOutside);

    return () => window.removeEventListener('mousedown', checkIfClickedOutside);
  }, [isMobileMenuOpen, isMobileWidth]);

  // close menu with ESC key
  useEffect(() => {
    function keyPress(e) {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  });

  return (
    <HeaderComponent>
      <Logo>
        <Link href="/" onClick={toggleMobileMenu}>
          <LogoWrapper>
            <Image className="logo-image" alt="logo" src={LogoImage} />
          </LogoWrapper>
        </Link>
      </Logo>
      {isMobileWidth && (
        <IconWrapper ref={iconRef}>
          {isMobileMenuOpen && (
            <Image src={CloseIcon} alt="" onClick={toggleMobileMenu} />
          )}
          {!isMobileMenuOpen && (
            <Image src={HamburgerIcon} alt="" onClick={toggleMobileMenu} />
          )}
        </IconWrapper>
      )}
      <Nav isMobileWidth={isMobileWidth} isMobileMenuOpen={isMobileMenuOpen}>
        <NavList isMobileWidth={isMobileWidth} ref={menuRef}>
          <NavListItem>
            <NavLink href="/" onClick={toggleMobileMenu}>
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/services" onClick={toggleMobileMenu}>
              Services
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/about" onClick={toggleMobileMenu}>
              About Us
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/resources" onClick={toggleMobileMenu}>
              Resources and Information
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/contact" onClick={toggleMobileMenu}>
              Contact Us
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </HeaderComponent>
  );
}
