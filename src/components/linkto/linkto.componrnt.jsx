import React from "react";

import { Link } from "react-router-dom";

import "./linkto.styles.scss";

const LinkTo = ({ torouting, text }) => {
    return <Link to={torouting}>{text}</Link>;
};

export default LinkTo;
