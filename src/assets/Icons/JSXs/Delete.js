import * as React from "react";

const SvgDelete = ({ title, titleId, ...props }) => (
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
      d="M7.1 1.5a.887.887 0 0 0-.887.888v1.166H2.036a.536.536 0 0 0 0 1.073h1.41a.898.898 0 0 0 0 .148l.806 10.903c.034.463.42.822.883.822h7.73c.464 0 .849-.358.883-.822l.807-10.903a.904.904 0 0 0-.002-.148h1.411a.536.536 0 0 0 0-1.073h-4.177V2.388A.887.887 0 0 0 10.9 1.5H7.099Zm3.8 2.054V2.388H7.1v1.166h3.8Zm1.965 12.058L13.67 4.71H4.33l.805 10.902h7.73ZM7.594 6.196c.244 0 .443.198.443.443v6.574a.443.443 0 1 1-.886 0V6.64c0-.245.198-.443.443-.443Zm3.255.443a.443.443 0 1 0-.886 0v6.574a.443.443 0 1 0 .886 0V6.64Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgDelete;
