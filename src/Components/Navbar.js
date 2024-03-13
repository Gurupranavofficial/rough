import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarc.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">Name</Link>
        </li>
        <li className="nav-item">
          <Link to="/Count" className="nav-link">Count</Link>
        </li>
        <li className="nav-item">
          <Link to="/onoff" className="nav-link">Onoff</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;