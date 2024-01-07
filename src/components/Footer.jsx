import React from 'react';
import Brand from './Brand';
import Nav from './Nav';
import Social from './Social';

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-container">
          <div className="col">
            <Brand />
            <Nav />
          </div>
          <div className="col">
            <Social />
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
