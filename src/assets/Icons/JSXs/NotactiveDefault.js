import * as React from "react";

const SvgNotactiveDefault = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={7.999} cy={6.222} r={4.833} stroke="#A3AFC3" />
    <circle cx={8} cy={6.222} r={2.222} fill="#A3AFC3" />
    <path
      d="M3.555 15.112s1.777-1.778 4.444-1.778 4.445 1.778 4.445 1.778"
      stroke="#A3AFC3"
      strokeLinecap="round"
    />
    <path
      d="M14.361 10.667a2.806 2.806 0 1 1-5.611 0 2.806 2.806 0 0 1 5.611 0Z"
      fill="#fff"
      stroke="#EF4F4F"
      strokeWidth={1.5}
    />
    <path
      d="m9.777 8.889 3.556 3.555"
      stroke="#EF4F4F"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgNotactiveDefault;
