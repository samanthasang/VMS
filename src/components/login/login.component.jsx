import React from "react";
import { Col, Row } from "antd";

import LogoVISTAVMS from "../logovistavms/logovistavms.component";
import FormLogin from "../formlogin/formlogin.component";

import LogoLogin from "../../assets/Logo-Login.svg";
import LoginBG from "../../assets/login-bg.svg";
import LoginFormBG from "../../assets/login-form-bg.svg";
import "./login.styles.scss";

const Login = ({ LoginAuth }) => {
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
          background: `url(${LoginFormBG})`,
          backdropFilter: "blur(100px)",
        }}
      >
        <LogoVISTAVMS src={LogoLogin} />
        <FormLogin LoginAuth={LoginAuth} />
      </Col>
    </Row>
  );
};

export default Login;
