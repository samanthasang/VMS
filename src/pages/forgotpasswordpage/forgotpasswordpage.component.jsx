import { Col, Row } from "antd";
import React from "react";

import ForgotPassword from "../../components/forgot-password-items/forgotpassword/forgotpassword.component";

import "./forgotpasswordpage.styles.scss";

const ForgotPasswordPage = () => (
  <Row>
    {/* full wide div */}
    <Col span={24}>
      {/* render the forgottpassword container component */}
      <ForgotPassword />
    </Col>
  </Row>
);

export default ForgotPasswordPage;
