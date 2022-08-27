import { Col, Row } from "antd";
import React from "react";

import Login from "../../components/loginpage/login/login.component";

import "./loginpage.styles.scss";

const LoginPage = () => (
  <Row>
    <Col span={24}>
      <Login />
    </Col>
  </Row>
);

export default LoginPage;
