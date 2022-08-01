import React from "react";

import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import "./gotoregister.styles.scss";

const GoToRegister = ({ span, offset }) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <Link className="go_to_register" to={"/register"}>
          Don't have an account yet? <b> register now!</b>
        </Link>
      </Col>
    </Row>
  );
};

export default GoToRegister;
