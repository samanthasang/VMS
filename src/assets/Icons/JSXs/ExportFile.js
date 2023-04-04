import * as React from "react";

const SvgExportFile = ({ title, titleId, ...props }) => (
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
      d="M3.75 2A1.75 1.75 0 0 0 2 3.75v17.364c0 .967.784 1.75 1.75 1.75h17.364a1.75 1.75 0 0 0 1.75-1.75V8.328c0-.464-.184-.91-.512-1.237l-4.578-4.578A1.75 1.75 0 0 0 16.536 2H3.75ZM3.5 3.75a.25.25 0 0 1 .25-.25h12.786a.25.25 0 0 1 .177.073l4.578 4.578a.25.25 0 0 1 .073.177v12.786a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25V3.75Zm11.16 2.873a1 1 0 0 1 1 1v3.164a1 1 0 0 1-1 1H7.623a1 1 0 0 1-1-1V7.623a1 1 0 0 1 1-1h7.037Zm-4.164 1.79a.5.5 0 0 1 .5-.5h2.872a.5.5 0 0 1 .5.5v1.583a.5.5 0 0 1-.5.5h-2.872a.5.5 0 0 1-.5-.5V8.414Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgExportFile;
