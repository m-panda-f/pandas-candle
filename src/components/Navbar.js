import React from 'react'
import { useState } from 'react';
import '../styles/home.css'
 const selectsection = (item) => {
   window.scrollTo({
     top: item.current.offsetTop,
     behavior: "smooth",
   });
};

function Navbar(props) {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 // 2. Function to flip the state
 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
 };
  return (
    <div>
      <nav>
        <a href="/" className="Logo">
          <h1 className="Logo">Panda's Candle</h1>
        </a>
        <button
          className={`mobile-nav-toggle ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li
            onClick={() => {
              selectsection(props.home);
              setIsMenuOpen(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              selectsection(props.about);
              setIsMenuOpen(false);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              selectsection(props.products);
              setIsMenuOpen(false);
            }}
          >
            Best Selling
          </li>
          <li
            onClick={() => {
              selectsection(props.contact);
              setIsMenuOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
