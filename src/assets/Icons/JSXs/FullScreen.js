import * as React from "react";

const SvgFullScreen = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5V2a.997.997 0 0 1 1-1h6.5v1H4.999c-.463 0-.901.105-1.292.292L9.27 7.855A1 1 0 0 1 7.855 9.27L2.292 3.707C2.105 4.098 2 4.537 2 5v3.5H1V5Zm14.5-3V1H22a.997.997 0 0 1 1 1v6.5h-1V5c0-.463-.105-.902-.292-1.293L16.145 9.27a1 1 0 1 1-1.415-1.415l5.563-5.563A2.988 2.988 0 0 0 19 2h-3.5ZM22 15.5h1V22a.997.997 0 0 1-1 1h-6.5v-1H19c.463 0 .902-.105 1.293-.292l-5.975-5.976a1 1 0 0 1 1.414-1.414l5.976 5.976c.187-.392.292-.83.292-1.294v-3.5ZM8.5 22v1H2a.997.997 0 0 1-1-1v-6.5h1v3.502c0 .462.105.9.292 1.291l5.563-5.563a1 1 0 0 1 1.415 1.415l-5.563 5.563c.391.187.83.292 1.293.292h3.5Z"
      fill="url(#FullScreen_svg__a)"
    />
    <defs>
      <linearGradient
        id="FullScreen_svg__a"
        x1={12}
        y1={1}
        x2={12}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#ADACAC" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgFullScreen;
