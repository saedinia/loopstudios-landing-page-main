import React from 'react';

import mobile_curiosity from './../assets/images/mobile/image-curiosity.jpg';
import mobile_deep_earth from './../assets/images/mobile/image-deep-earth.jpg';
import mobile_fisheye from './../assets/images/mobile/image-fisheye.jpg';
import mobile_from_above from './../assets/images/mobile/image-from-above.jpg';
import mobile_grid from './../assets/images/mobile/image-grid.jpg';
import mobile_night_arcade from './../assets/images/mobile/image-night-arcade.jpg';
import mobile_pocket_borealis from './../assets/images/mobile/image-pocket-borealis.jpg';
import mobile_soccer_team from './../assets/images/mobile/image-soccer-team.jpg';

import desktop_curiosity from './../assets/images/desktop/image-curiosity.jpg';
import desktop_deep_earth from './../assets/images/desktop/image-deep-earth.jpg';
import desktop_fisheye from './../assets/images/desktop/image-fisheye.jpg';
import desktop_from_above from './../assets/images/desktop/image-from-above.jpg';
import desktop_grid from './../assets/images/desktop/image-grid.jpg';
import desktop_night_arcade from './../assets/images/desktop/image-night-arcade.jpg';
import desktop_pocket_borealis from './../assets/images/desktop/image-pocket-borealis.jpg';
import desktop_soccer_team from './../assets/images/desktop/image-soccer-team.jpg';

function Blog() {
  return (
    <div className="blog">
      <div className="wrapper">
        <div className="blog__container">
          <div className="blog__header">
            <h2>Our creations</h2>
            <button>See all</button>
          </div>

          <div className="blog__items">
            <div className="blog__item">
              <picture>
                <source
                  media="(min-width: 760px)"
                  srcSet={desktop_deep_earth}
                />
                <img src={mobile_deep_earth} />
              </picture>
              <h3>Deep Earth</h3>
            </div>

            <div className="blog__item">
              <picture>
                <source
                  media="(min-width: 760px)"
                  srcSet={desktop_night_arcade}
                />
                <img src={mobile_night_arcade} />
              </picture>
              <h3>Night Arcade</h3>
            </div>

            <div className="blog__item">
              <picture>
                <source
                  media="(min-width: 760px)"
                  srcSet={desktop_soccer_team}
                />
                <img src={mobile_soccer_team} />
              </picture>
              <h3>Soccer TeaM VR</h3>
            </div>

            <div className="blog__item">
              <picture>
                <source media="(min-width: 760px)" srcSet={desktop_grid} />
                <img src={mobile_grid} />
              </picture>
              <h3>
                The
                <br />
                Grid
              </h3>
            </div>

            <div className="blog__item">
              <picture>
                <source
                  media="(min-width: 760px)"
                  srcSet={desktop_from_above}
                />
                <img src={mobile_from_above} />
              </picture>
              <h3>From Up Above VR</h3>
            </div>

            <div className="blog__item">
              <picture>
                <source
                  media="(min-width: 760px)"
                  srcSet={desktop_pocket_borealis}
                />
                <img src={mobile_pocket_borealis} />
              </picture>
              <h3>Pocket Borealis</h3>
            </div>

            <div className="blog__item">
              <picture>
                <source media="(min-width: 760px)" srcSet={desktop_curiosity} />
                <img src={mobile_curiosity} />
              </picture>
              <h3>The Curiosity</h3>
            </div>

            <div className="blog__item">
              <picture>
                <source media="(min-width: 760px)" srcSet={desktop_fisheye} />
                <img src={mobile_fisheye} />
              </picture>
              <h3>Make It Fisheye</h3>
            </div>
          </div>

          <div className="blog__footer">
            <button>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
