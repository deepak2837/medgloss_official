// components/Card.js
import React from 'react';
import Link from 'next/link';

const Card = ({ title, href }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <Link href={href}>
        <a>View Papers</a>
      </Link>
    </div>
  );
};

export default Card;
