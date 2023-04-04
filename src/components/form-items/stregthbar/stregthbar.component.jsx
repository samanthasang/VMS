import React from "react";
import { Row, Col } from "antd";

import PasswordStrengthBar from "react-password-strength-bar";

import "./stregthbar.styles.scss";

const StrengthBar = ({ minLength, password, span, offset }) => {
  return (
    <Row>
      <Col span={span} offset={offset} className="pass_stren">
        <PasswordStrengthBar
          minLength={minLength}
          password={password}
        />
      </Col>
    </Row>
  );
};

export default StrengthBar;
