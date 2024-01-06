import React from 'react';
import hero_desktop from './../assets/images/desktop/image-interactive.jpg';
import hero_mobile from './../assets/images/mobile/image-interactive.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="inner left">
          <div className="hero__image">
            <picture>
              <source media="(min-width: 760px)" srcSet={hero_desktop} />
              <img src={hero_mobile} alt="" />
            </picture>
          </div>

          <div className="hero__content">
            <h2>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
