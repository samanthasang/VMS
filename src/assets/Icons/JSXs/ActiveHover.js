import * as React from "react";

const SvgActiveHover = ({ title, titleId, ...props }) => (
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
    <circle cx={7.999} cy={6.222} r={4.833} stroke="#EFEFEF" />
    <circle cx={8} cy={6.222} r={2.222} fill="#EFEFEF" />
    <path
      d="M3.555 15.112s1.777-1.778 4.444-1.778 4.445 1.778 4.445 1.778"
      stroke="#EFEFEF"
      strokeLinecap="round"
    />
    <circle cx={11.556} cy={10.667} fill="#4FEF7C" r={3.556} />
  </svg>
);

export default SvgActiveHover;
