import React, { useState, useEffect } from 'react';
import icon_hamburger from './../assets/images/icon-hamburger.svg';
import icon_close from './../assets/images/icon-close.svg';
import Brand from './Brand';
import Nav from './Nav';

function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 760) setShowNavMobile(false);
    });
  }, []);

  return (
    <header>
      <div className="wrapper">
        <div className="navbar">
          <Brand />
          <nav className={showNavMobile ? 'show' : ''}>
            <div className="header-mobile">
              <Brand />
              <img
                className="icon_close"
                src={icon_close}
                alt=""
                onClick={() => setShowNavMobile(false)}
              />
            </div>
            <Nav />
          </nav>
          <img
            className="icon_hamburger"
            src={icon_hamburger}
            alt=""
            onClick={() => setShowNavMobile(true)}
          />
        </div>
        <div className="stage">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
