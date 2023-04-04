import * as React from "react";

const SvgExport = ({ title, titleId, ...props }) => (
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
      d="M4.566 21H3l1.16-1.023.001-.001.007-.006.027-.024a28.583 28.583 0 0 0 .499-.456c.331-.309.786-.742 1.28-1.243 1-1.014 2.116-2.26 2.717-3.286.634-1.083.953-2.448 1.109-3.576.034-.252.06-.49.08-.707H6.62c-1.082 0-1.62-1.272-.852-2.01l6.584-6.328a1.236 1.236 0 0 1 1.703 0l6.584 6.327c.768.739.23 2.01-.852 2.01H16.33c-.075.53-.188 1.199-.354 1.92-.383 1.664-1.075 3.745-2.34 5-.6.595-1.433 1.094-2.306 1.508-.88.416-1.84.764-2.72 1.04a33.681 33.681 0 0 1-3.19.83l-.052.01-.014.003h-.005l-.083-.404.082.405-.058.01h-.724ZM15.25 9.503l.003-.043.004-.043v-.012l.604.04.604.04v.006l-.001.012h3.323l-6.584-6.328L6.62 9.503h3.322V9.454l.605-.01.605-.007V9.606a16.698 16.698 0 0 1-.152 1.936c-.164 1.186-.51 2.725-1.256 4-.681 1.164-1.89 2.5-2.895 3.518-.172.175-.34.341-.499.497.53-.131 1.187-.308 1.888-.528.848-.267 1.75-.595 2.563-.98.82-.388 1.512-.817 1.97-1.272 1.01-1.001 1.646-2.79 2.024-4.434a22.208 22.208 0 0 0 .403-2.332v-.507h.053Z"
      fill="#EEE"
    />
  </svg>
);

export default SvgExport;