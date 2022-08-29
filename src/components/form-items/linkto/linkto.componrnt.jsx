import { Col } from "antd";
import React from "react";

import { Link } from "react-router-dom";

import "./linkto.styles.scss";

const LinkTo = ({ span, offset, torouting, text }) => {
    return (

        <Col className="fg_password" span={span} offset={offset}>
          <Link to={torouting}>{text}</Link>
        </Col>
    )
};

export default LinkTo;
