import React from "react";
import PropTypes from "prop-types";

export const Loader = props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    aria-label={props.label}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

Loader.propTypes = {
  /**
    Height is a number in pixels
    */
  height: PropTypes.number,
  /**
    Width is a number in pixels
    */
  width: PropTypes.number,
  /**
    Color is a string
    */
  color: PropTypes.string,
  label: PropTypes.string
};

Loader.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "loading"
};
