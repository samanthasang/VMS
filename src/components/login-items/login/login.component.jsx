import React from "react";
import { Col, Row } from "antd";

import LogoVISTAVMS from "../logovistavms/logovistavms.component";
import FormLogin from "../../forms/formlogin/formlogin.component";

import LoginBG from "../../../assets/login-bg.webp";

import "./login.styles.scss";

const Login = () => {
  return (
    // background image for login page
    <Row
      className="login_bg"
      justify="space-around"
      align="middle"
      style={{
        background: `url(${LoginBG})`,
      }}
    >
      {/* center div for login form & logo */}
      <Col className="login_bg_container">
        {/* logo in login page */}
        <LogoVISTAVMS />
        {/* login form component */}
        <FormLogin />
      </Col>
    </Row>
  );
};

export default Login;
