import * as React from "react";

const SvgAdmin2 = ({ title, titleId, ...props }) => (
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
      d="M11.733 12.667c2.578 0 4.667-2.756 4.667-5.334a4.667 4.667 0 1 0-9.333 0c0 2.578 2.089 5.334 4.666 5.334Zm-3.471 1.008c-1.75-.377-2.83-.61-5.104 1.119-1.858 1.413-1.872 4.434-1.806 5.563a.469.469 0 0 0 .477.437h20.345a.47.47 0 0 0 .479-.445c.051-1.142.006-4.186-1.801-5.555-2.445-1.852-3.605-1.57-5.334-1.152-.92.223-2 .485-3.52.485-1.64 0-2.787-.247-3.736-.452Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgAdmin2;
