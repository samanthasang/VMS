import { Col, Row } from "antd";
import React from "react";

import Login from "../../components/login-items/login/login.component";

import "./loginpage.styles.scss";

const LoginPage = () => (
  <Row>
    <Col span={24}>
      <Login />
    </Col>
  </Row>
);

export default LoginPage;
