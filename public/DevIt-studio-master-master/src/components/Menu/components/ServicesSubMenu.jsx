import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ServicesSubMenu = () => {
  const handleDropdownItemClick = () => {
    // Find the parent navbar and close it
    const navbar = document.getElementById('responsive-navbar-nav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  const servicesOptions = [
    { text: 'Mobile Application Development', link: '/services/mobile-app-development' },
    { text: 'Web Application Development', link: '/services/web-app-development' },
    { text: 'Cloud Services', link: '/services/cloud-services' },
    { text: 'Software Testing', link: '/services/software-testing' },
    { text: 'Database Operations', link: '/services/database-operations' },
    { text: 'Data Engineering Services', link: '/services/data-engineering' },
    { text: 'CMS', link: '/services/cms' },
    { text: 'Internet of Things', link: '/services/internet-of-things' },
  ];

  return (
    <NavDropdown title="Services" id="services-dropdown">
      {servicesOptions.map((option, index) => (
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

export default ServicesSubMenu;
