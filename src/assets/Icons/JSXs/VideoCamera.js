import * as React from "react";

const SvgVideoCamera = ({ title, titleId, ...props }) => (
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
      d="M15.424 6.05A2.13 2.13 0 0 0 14 5.5H4c-.57 0-1.12.232-1.528.65a2.268 2.268 0 0 0-.639 1.583v8.2c0 .597.232 1.166.64 1.584.407.418.956.65 1.527.65h10a2.13 2.13 0 0 0 1.424-.55c.396-.356.654-.85.724-1.39l.087-.671 4.764 2.17a.805.805 0 0 0 .784-.065.855.855 0 0 0 .28-.311.894.894 0 0 0 .104-.418V6.735a.894.894 0 0 0-.104-.418.854.854 0 0 0-.28-.312.812.812 0 0 0-.785-.064l-4.763 2.17-.087-.672a2.254 2.254 0 0 0-.724-1.39ZM14 4.5a3.13 3.13 0 0 1 2.092.806c.413.37.72.84.898 1.362l3.593-1.636a1.806 1.806 0 0 1 1.753.14c.257.17.466.403.61.676.145.273.22.577.22.886v10.198c0 .309-.075.614-.22.886a1.855 1.855 0 0 1-.61.676 1.813 1.813 0 0 1-1.751.141l-3.595-1.637a3.238 3.238 0 0 1-.898 1.363 3.13 3.13 0 0 1-2.092.806H4c-.844 0-1.65-.344-2.243-.952a3.268 3.268 0 0 1-.924-2.282v-8.2c0-.853.331-1.674.924-2.282A3.134 3.134 0 0 1 4 4.5h10Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgVideoCamera;