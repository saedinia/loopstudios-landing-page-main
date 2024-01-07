import React from 'react';
import icon_facebook from './../assets/images/icon-facebook.svg';
import icon_instagram from './../assets/images/icon-instagram.svg';
import icon_pinterest from './../assets/images/icon-pinterest.svg';
import icon_twitter from './../assets/images/icon-twitter.svg';

function Social() {
  return (
    <ul className="social__icons">
      <li className="icon">
        <a href="#">
          <img src={icon_facebook} alt="" />
        </a>
      </li>

      <li className="icon">
        <a href="#">
          <img src={icon_twitter} alt="" />
        </a>
      </li>

      <li className="icon">
        <a href="#">
          <img src={icon_pinterest} alt="" />
        </a>
      </li>

      <li className="icon">
        <a href="#">
          <img src={icon_instagram} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default Social;
