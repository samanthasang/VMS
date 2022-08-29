import { Col, Row } from "antd";
import React from "react";

import ForgotPassword from "../../components/forgot-password-items/forgotpassword/forgotpassword.component";

import "./forgotpasswordpage.styles.scss";

const ForgotPasswordPage = () => (
  <Row>
    <Col span={24}>
      <ForgotPassword />
    </Col>
  </Row>
);

export default ForgotPasswordPage;
