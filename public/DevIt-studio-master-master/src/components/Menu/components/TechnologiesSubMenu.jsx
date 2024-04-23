import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TechnologiesSubMenu = () => {
  const handleDropdownItemClick = () => {
    // Find the parent navbar and close it
    const navbar = document.getElementById('responsive-navbar-nav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };
  const technologiesOptions = [
    { text: 'Front-end Development', link: '/frontend-development' },
    { text: 'Back-end Development', link: '/backend-development' },
    { text: 'React', link: '/react' },
    { text: 'Node.js', link: '/node' },
    { text: 'Angular', link: '/angular' },
    { text: 'Python', link: '/python' },
    { text: 'Java', link: '/java' },
    { text: '.NET', link: '/net' },
    // Add more options as needed
  ];
  return (
    <NavDropdown title="Technologies" id="technologies-dropdown">
      {technologiesOptions.map((option, index) => (
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

export default TechnologiesSubMenu;
