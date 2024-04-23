import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const IndustriesSubMenu = () => {
  const handleDropdownItemClick = () => {
    // Find the parent navbar and close it
    const navbar = document.getElementById('responsive-navbar-nav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  const industriesOptions = [
    { text: 'Healthcare', link: '/healthcare' },
    { text: 'Insurance', link: '/insurance' },
    { text: 'Finance', link: '/finance' },
    { text: 'Software and HiTech', link: '/software' },
    { text: 'Automotive', link: '/automative' },
    { text: 'Telecommunication', link: '/telecommunication' },
    { text: 'Retail', link: '/retail' },
  ];
  return (
    <NavDropdown title="Industries" id="industries-dropdown">
      {industriesOptions.map((option, index) => (
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

export default IndustriesSubMenu;
