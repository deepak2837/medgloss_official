// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>Medgloss</a>
          </Link>
        </div>
        <div className="menu">
          <Link href="/about">
            <a>About</a>
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
