import * as React from "react";

const SvgHDelete = ({ title, titleId, ...props }) => (
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
      d="M9.466 2c-.653 0-1.182.53-1.182 1.183v1.555h-5.57a.715.715 0 0 0 0 1.431h1.882c-.006.065-.007.13-.002.198l1.075 14.537c.046.618.56 1.096 1.178 1.096h10.306c.619 0 1.132-.478 1.178-1.096l1.075-14.537a1.184 1.184 0 0 0-.002-.198h1.882a.715.715 0 0 0 0-1.43h-5.57V3.182c0-.653-.53-1.183-1.182-1.183H9.466Zm5.068 2.738V3.183H9.466v1.555h5.068Zm2.619 16.079 1.075-14.538H5.772l1.075 14.538h10.306ZM10.125 8.26c.326 0 .59.265.59.591v8.765a.591.591 0 1 1-1.18 0V8.852c0-.326.264-.591.59-.591Zm4.34.591a.591.591 0 1 0-1.18 0v8.765a.591.591 0 1 0 1.18 0V8.852Z"
      fill="url(#HDelete_svg__a)"
    />
    <defs>
      <linearGradient
        id="HDelete_svg__a"
        x1={12}
        y1={2}
        x2={12}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgHDelete;
