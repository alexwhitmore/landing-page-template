import React, { useState, useEffect } from 'react';

import { HeaderWrapper } from '@styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/" className="site-logo" aria-label="homepage">
        Landing Page
      </a>
      <nav className="main-nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
