import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Antashchetna</h1>
          <p>Healing Minds, Nurturing Hope</p>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><a href="#gallery">Services</a></li>
            {/* <li><a href="#reviews">Reviews</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#reading-materials">Reading Materials</a></li>
             */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
