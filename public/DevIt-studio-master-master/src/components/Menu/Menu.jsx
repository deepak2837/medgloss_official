// Menu.js

import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { data, images } from '../../constant';
import './Menu.css';
import ServicesSubMenu from './components/ServicesSubMenu.jsx';
import TechnologiesSubMenu from './components/TechnologiesSubMenu.jsx';
import IndustriesSubMenu from './components/IndustriesSubMenu.jsx';
import PortfolioSubMenu from './components/PortfolioSubMenu.jsx';

const Menu = () => {
  const handleNavbarClose = useCallback((e) => {
    const navbar = document.getElementById('responsive-navbar-nav');
    const isDropdownItem = e.target.closest('.nav-item.dropdown');

    if (navbar && navbar.classList.contains('show') && !isDropdownItem) {
      navbar.classList.remove('show');

      // Also close the dropdown if it's open
      const openDropdown = document.querySelector('.nav-item.dropdown.show');
      if (openDropdown) {
        openDropdown.classList.remove('show');
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleNavbarClose);

    return () => {
      document.removeEventListener('click', handleNavbarClose);
    };
  }, [handleNavbarClose]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-0">
      <Container>
        {/* Place Navbar.Toggle before Navbar.Brand */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Navbar.Brand stays in the middle of the Navbar */}
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={images.logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {data.Menu.map((item, index) => (
              <Nav.Link key={index} href={item.link}>
                {item.text === 'Services' ? (
                  <ServicesSubMenu />
                ) : item.text === 'Technologies' ? (
                  <TechnologiesSubMenu />
                ) : item.text === 'Industries' ? (
                  <IndustriesSubMenu />
                ) : item.text === 'Portfolio' ? (
                  <PortfolioSubMenu />
                ) : (
                  item.text
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
