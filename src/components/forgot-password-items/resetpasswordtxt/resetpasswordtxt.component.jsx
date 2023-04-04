import React from "react";
import { Row, Col } from "antd";

import "./resetpasswordtxt.styles.scss";

const ResetPasswordTXT = ({ span, offset, title, description }) => {
  return (
    <Row>
      {/* title of reset password apge */}
      <Col className="resetpasswordtxt" span={span} offset={offset}>
        {title && <h2>{title}</h2>}
        {description && <span>{description}</span>}
      </Col>
    </Row>
  );
};

export default ResetPasswordTXT;
