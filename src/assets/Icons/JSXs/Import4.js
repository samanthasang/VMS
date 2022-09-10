import * as React from "react";

const SvgImport4 = ({ title, titleId, ...props }) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 17A2.5 2.5 0 0 1 1 14.5v-3a.5.5 0 0 1 1 0v3A1.5 1.5 0 0 0 3.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 1 0v3a2.5 2.5 0 0 1-2.5 2.5h-11Zm4-15.5v6.75H5.002L9 12.29l3.998-4.04H10.5V1.5h-3Zm4 5.75V1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5.75H5.002c-.888 0-1.335 1.072-.71 1.703l3.997 4.04a1 1 0 0 0 1.422 0l3.998-4.04c.625-.631.177-1.703-.711-1.703H11.5Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgImport4;
