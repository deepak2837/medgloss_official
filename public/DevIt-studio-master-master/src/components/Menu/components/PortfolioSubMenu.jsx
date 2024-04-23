import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const PortfolioSubMenu = () => {
  const handleDropdownItemClick = () => {
    // Find the parent navbar and close it
    const navbar = document.getElementById('responsive-navbar-nav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  const portfolioOptions = [

    { text: 'About Us', link: '/about' },
    { text: 'Leadership Team', link: 'teams' },
    { text: 'Case-studies', link: '/casestudy' },
   
    { text: 'Our Location', link: '/location' },
    { text: 'Privacy Policy', link: '/privacy' },
  ];

  return (
    <NavDropdown title="Portfolio" id="portfolio-dropdown">
      {portfolioOptions.map((option, index) => (
        <NavDropdown.Item
          key={index}
          as={Link}
          to={option.link}
          onClick={handleDropdownItemClick} // Add click event to close the navbar
        >
          {option.text}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default PortfolioSubMenu;
