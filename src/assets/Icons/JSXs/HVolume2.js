import * as React from "react";

const SvgHVolume2 = ({ title, titleId, ...props }) => (
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
    <path
      d="M8.209 1.022c-.053.01-.137.037-.187.058-.23.093-.234.096-2.158 2.015C4.84 4.116 4.014 4.928 3.99 4.937c-.03.01-.398.017-1.11.017-.71 0-1.095.006-1.15.017a.966.966 0 0 0-.705.65C1.005 5.7 1 5.924 1 7.713v2.004l.037.112c.022.061.063.151.09.198.076.123.238.271.375.338.206.101.214.103 1.397.103.75 0 1.076.005 1.099.017.019.01.848.829 1.843 1.82.994.99 1.858 1.84 1.917 1.883.267.2.562.276.811.212.371-.097.606-.424.663-.923.012-.108.015-1.816.012-5.921-.005-5.561-.006-5.773-.034-5.871-.08-.284-.236-.486-.45-.592a.774.774 0 0 0-.551-.07Zm.274.607c.063.033.105.098.133.206.02.08.023.75.02 5.877l-.005 5.784-.034.101c-.037.109-.107.196-.171.212-.061.015-.144-.005-.237-.06-.064-.037-.605-.566-2.08-2.036-1.68-1.674-1.996-1.997-2.019-2.056-.025-.065-.027-.198-.027-1.954V5.818l.036-.077c.03-.064.376-.416 2.002-2.033a222.357 222.357 0 0 1 2.027-2c.125-.091.268-.124.355-.079ZM3.496 5.61c-.048.202-.05.272-.045 2.165.004 1.673.008 1.9.03 1.972l.024.082H2.68c-.81 0-.83 0-.896-.032a.31.31 0 0 1-.11-.097l-.042-.064V5.786l.042-.066c.05-.073.111-.11.214-.127.04-.007.42-.011.844-.01.676.002.771.005.765.025Z"
      fill="url(#HVolume2_svg__a)"
    />
    <path
      d="M11.586 3.805a.267.267 0 0 0-.181.159c-.042.09-.045.127-.019.213.025.086.09.148.292.271a3.847 3.847 0 0 1 1.794 2.626c.049.272.06.797.025 1.088a3.78 3.78 0 0 1-1.052 2.2c-.226.234-.476.429-.86.665-.166.103-.224.212-.196.367.022.115.167.224.301.225.081 0 .234-.076.482-.241.248-.165.39-.28.62-.505a4.412 4.412 0 0 0 1.226-2.14 4.49 4.49 0 0 0-.105-2.408 4.429 4.429 0 0 0-1.758-2.296c-.31-.205-.448-.26-.57-.224Z"
      fill="url(#HVolume2_svg__b)"
    />
    <path
      d="M10.313 5.717a.298.298 0 0 0-.232.288c-.001.162.094.257.345.348.446.158.785.532.912 1 .05.185.051.538 0 .723a1.46 1.46 0 0 1-.42.695 1.397 1.397 0 0 1-.486.3c-.212.085-.262.116-.309.195a.289.289 0 0 0 .002.302c.089.151.238.178.486.09a2.062 2.062 0 0 0 1.366-1.68c.01-.08.014-.225.01-.36A2.05 2.05 0 0 0 10.62 5.77c-.154-.056-.238-.07-.306-.053Z"
      fill="url(#HVolume2_svg__c)"
    />
    <defs>
      <linearGradient
        id="HVolume2_svg__a"
        x1={5.123}
        y1={14.421}
        x2={5.123}
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#103C66" />
        <stop offset={1} stopColor="#1F6BB3" />
      </linearGradient>
      <linearGradient
        id="HVolume2_svg__b"
        x1={12.752}
        y1={11.619}
        x2={12.752}
        y2={3.795}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#103C66" />
        <stop offset={1} stopColor="#1F6BB3" />
      </linearGradient>
      <linearGradient
        id="HVolume2_svg__c"
        x1={11.035}
        y1={9.708}
        x2={11.035}
        y2={5.71}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#103C66" />
        <stop offset={1} stopColor="#1F6BB3" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgHVolume2;
