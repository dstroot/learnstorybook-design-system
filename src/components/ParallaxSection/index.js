import React, { useEffect } from "react";
import Rellax from "rellax";
import "./minimal.scss"; // Import  stylesheet

//images
import { ReactComponent as Scruffs } from "./assets/Scruffs_blue-no-microplastics.svg";
// import { ReactComponent as Wind } from "./assets/Wind-Gust.svg";
// import Mountains from "./assets/Mountains_WhiteSnow-only-mountains.svg";

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
              src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Scruffs_blue-only-microplastics.svg"
              alt=""
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
            <img
              className="wind"
              src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Wind-Gust.svg"
              alt=""
            ></img>
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
            src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Scruffs_woMicroplastics.svg"
            alt=""
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
              src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Scruffs_microplastics-only.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="flex-container-horiz wrapper">
        <div
          class="flex-item-horiz"
          style={{
            background: `#fff`,
            // background: `url("./Mountains_WhiteSnow-only-mountains.svg") no- repeat`,
            // backgroundSize: `cover`,
            // backgroundPosition: `bottom -25px`,
            // backgroundPosition: `bottom -18vh right -27vw`,
          }}
        >
          <div
            className="parallax-items animate"
            data-rellax-horizontal-speed={5}
          >
            <img
              className="clouds"
              src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Clouds.svg"
              alt=""
            />
          </div>
          <img
            className="drink-tahoe-tap"
            src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign//Drink%20Tahoe%20Tap-2c.svg"
            alt=""
          />
          <img
            className="mountains"
            src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Mountains_WhiteSnow-only-mountains.svg"
            alt=""
          />
        </div>
        <div class="flex-item-horiz" style={{ background: `#74ccd8` }}>
          <img
            src="https://takecaretahoe.org/wp-content/themes/adam/images/campaign/Water-Ripples.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ParallaxSection;
