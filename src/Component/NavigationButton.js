import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationButton.css'; 

const NavigationButton = ({ to, buttonText }) => {
  return (
    <Link to={to} className="nav-button">
      {buttonText}
    </Link>
  );
}

export default NavigationButton;
