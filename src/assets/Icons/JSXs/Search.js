import * as React from "react";

const SvgSearch = ({ title, titleId, ...props }) => (
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
      d="M17.797 15.478a9.71 9.71 0 0 0 1.482-5.183c0-5.271-4.147-9.545-9.264-9.545C4.898.75.75 5.024.75 10.295c0 5.272 4.148 9.546 9.265 9.546 2.194 0 4.21-.786 5.798-2.1l4.375 4.508a1.5 1.5 0 1 0 2.153-2.09l-4.544-4.681Zm-7.782.953c-3.289 0-5.955-2.747-5.955-6.136 0-3.388 2.666-6.135 5.955-6.135 3.288 0 5.954 2.747 5.954 6.135 0 3.389-2.666 6.136-5.954 6.136Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgSearch;
