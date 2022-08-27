import React from "react";
import { Col, Row } from "antd";

import LogoVISTAVMS from "../../logovistavms/logovistavms.component";
import FormLogin from '../../forms/formlogin/formlogin.component'

import {  LoginFormBg } from "../../../assets/Icons/JSXs/index";
import LoginBG from "../../../assets/login-bg.svg";

import "./login.styles.scss";

const Login = () => {
  return (
    <Row
      className="login_bg"
      justify="space-around"
      align="middle"
      style={{
        height: "100vh",
        background: `url(${LoginBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backdropFilter: "blur(100px",
      }}
    >
      <Col
        span={14}
        style={{
          height: "66vh",
          background: `url(${LoginFormBg})`,
          backdropFilter: "blur(100px)",
          borderRadius: "8px",
        }}
      >
        <LogoVISTAVMS />
        <FormLogin />
      </Col>
    </Row>
  );
};

export default Login;
