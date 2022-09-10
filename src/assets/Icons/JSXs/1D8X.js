import * as React from "react";

const Svg1D8X = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#1D8X_svg__a)">
      <path
        d="M.38 5.6v-.83h1.88V12h-.92V5.6H.38Zm7.73 2.64c-.374-.147-.66-.36-.86-.64-.2-.28-.3-.62-.3-1.02 0-.36.09-.683.27-.97.18-.293.446-.523.8-.69.36-.173.792-.26 1.3-.26.506 0 .936.087 1.29.26.36.167.63.397.81.69.186.287.28.61.28.97 0 .387-.104.727-.31 1.02-.208.287-.49.5-.85.64.413.127.74.35.98.67.246.313.37.693.37 1.14 0 .433-.107.813-.32 1.14-.214.32-.518.57-.91.75-.387.173-.834.26-1.34.26-.508 0-.954-.087-1.34-.26-.38-.18-.678-.43-.89-.75a2.038 2.038 0 0 1-.32-1.14c0-.447.12-.83.36-1.15.24-.32.566-.54.98-.66Zm2.71-1.55c0-.407-.134-.72-.4-.94-.268-.22-.634-.33-1.1-.33-.46 0-.824.11-1.09.33-.268.22-.4.537-.4.95 0 .373.136.673.41.9.28.227.64.34 1.08.34.446 0 .806-.113 1.08-.34.28-.233.42-.537.42-.91Zm-1.5 1.95c-.494 0-.898.117-1.21.35-.314.227-.47.57-.47 1.03 0 .427.15.77.45 1.03.306.26.716.39 1.23.39.512 0 .92-.13 1.22-.39.3-.26.45-.603.45-1.03 0-.447-.154-.787-.46-1.02-.307-.24-.71-.36-1.21-.36Zm6.928-.12 2.14 3.48h-1.03l-1.67-2.72-1.59 2.72h-1.01l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
        fill="#EFEFEF"
      />
      <path
        d="m5.65 5.082-1.872 6.544"
        stroke="#EFEFEF"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="1D8X_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Svg1D8X;
