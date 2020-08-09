import React, { useEffect } from "react";
import Rellax from "rellax";
import "./minimal.scss";

// section 1
import Microplastics from "./assets/Scruffs_blue-only-microplastics.svg";
import { ReactComponent as Scruffs } from "./assets/Scruffs_blue-no-microplastics.svg";

// section 2
import Wind from "./assets/Wind-Gust.svg";

// section 3
import BottleSide from "./assets/Scruffs_side-no-microplastics.svg";
import Microplastics2 from "./assets/Scruffs_microplastics-only.svg";

// section 4
import Mountains from "./assets/Mountains_WhiteSnow-only-mountains.svg";
import Clouds from "./assets/Clouds.svg";
import Ripples from "./assets/Water-Ripples.svg";
import Drink from "./assets/Drink-Tahoe-Tap.svg";

const ParallaxSection = () => {
  // create rellax instance
  useEffect(() => {
    const rellax = new Rellax(".animate", {
      horizontal: true,
    });

    return () => {
      rellax.destroy();
    };
  }, []);

  return (
    <>
      {/* SECTION ONE */}
      <div class="flex-container-vert wrapper">
        <div class="flex-item-vert">
          <h1>Every molecule of plastic ever created still exists.</h1>
        </div>
        <div class="flex-item-vert">
          <Scruffs />
          <div className="parallax-items animate" data-rellax-speed={3}>
            <img
              className="microplastics"
              src={Microplastics}
              alt="microplastics"
            />
          </div>
        </div>
        <button
          type="button"
          className="substantiation-button"
          data-toggle="modal"
          data-target="#firstSlideSubstantiation"
        >
          Really?
        </button>
      </div>

      {/* SECTION TWO */}
      <div class="flex-container-horiz wrapper">
        <div class="flex-item-horiz">
          <h2>Our plastic problem comes mainly from litter.</h2>
          <h2>And you're like, "But I don't litter."</h2>
          <h2>And a gust of wind blows in like, "I disagree."</h2>
        </div>

        <div class="flex-item-horiz">
          <div
            className="parallax-items animate"
            // data-rellax-percentage=
            // data-rellax-speed=
            // data-rellax-vertical-speed=
            data-rellax-horizontal-speed={7}
            data-rellax-vertical-scroll-axis="x"
            // data-rellax-horizontal-scroll-axis=
            data-rellax-zindex={1}
            // data-rellax-min=
            // data-rellax-max=
            // data-rellax-min-x=
            // data-rellax-max-x=
            // data-rellax-min-y=
            // data-rellax-max-y=
          >
            <img className="wind" src={Wind} alt="wind"></img>
          </div>
        </div>
      </div>

      {/* SECTION THREE */}
      <div class="flex-container-horiz wrapper">
        <div class="flex-item-horiz">
          <h2>
            Bottles left outside break into tiny toxic pieces, which contaminate
            the environment in a process that scientists call "gross."
          </h2>
        </div>

        <div class="flex-item-horiz">
          <img
            className="scruffs"
            style={{ width: `100%` }}
            src={BottleSide}
            alt="bottle on side"
          />
          <div
            className="parallax-items animate"
            data-rellax-xs-speed="1"
            data-rellax-mobile-speed="2"
            data-rellax-tablet-speed="3"
            data-rellax-desktop-speed="3"
            style={{ top: `450px` }}
          >
            <img
              className="microplastics"
              style={{ width: `100%` }}
              src={Microplastics2}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION FOUR */}
      <div class="flex-container-horiz wrapper">
        <div class="flex-item-horiz" style={{ background: `#fff` }}>
          <div
            className="parallax-items animate"
            data-rellax-horizontal-speed={5}
          >
            <img className="clouds" src={Clouds} alt="clouds" />
          </div>
          <img
            className="drink-tahoe-tap"
            src={Drink}
            alt="drink tahoe water"
          />
          <img className="mountains" src={Mountains} alt="mountains" />
        </div>
        <div class="flex-item-horiz" style={{ background: `#74ccd8` }}>
          <img src={Ripples} alt="water ripples" style={{ width: `100%` }} />
        </div>
      </div>
    </>
  );
};

export default ParallaxSection;
