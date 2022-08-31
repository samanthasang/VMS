import React from "react";
import { Col, Row } from "antd";

import LogoVISTAVMS from "../logovistavms/logovistavms.component";
import FormLogin from "../../forms/formlogin/formlogin.component";

import LoginBG from "../../../assets/login-bg.webp";

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
        backdropFilter: "blur(100px)",
      }}
    >
      <Col
        style={{
          height: "520px",
          width: "930px",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(70px)",
        }}
      >
        <LogoVISTAVMS />
        <FormLogin />
      </Col>
    </Row>
  );
};

export default Login;
