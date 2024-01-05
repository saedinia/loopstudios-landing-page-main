import React, { useState, useEffect } from 'react';
import logo from './../assets/images/logo.svg';
import icon_hamburger from './../assets/images/icon-hamburger.svg';
import icon_close from './../assets/images/icon-close.svg';

function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 760) setShowNavMobile(false);
    });
  }, []);

  return (
    <header className="layout-flex">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className={showNavMobile ? 'show' : ''}>
        <div className="header-mobile">
          <img src={logo} alt="" />
          <img
            className="icon_close"
            src={icon_close}
            alt=""
            onClick={() => setShowNavMobile(false)}
          />
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
      <img
        className="icon_hamburger"
        src={icon_hamburger}
        alt=""
        onClick={() => setShowNavMobile(true)}
      />
    </header>
  );
}

export default Header;
