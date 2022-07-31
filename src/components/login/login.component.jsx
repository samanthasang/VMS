import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import InputForm from "../inputform/inputform.component";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import CheckBox from "../checkbox/checkbox.component";
import LinkTo from "../linkto/linkto.componrnt";


import LogoVISTAVMS from "../logovistavms/logovistavms.component";

import LogoLogin from "../../assets/Logo-Login.svg";
import LoginBG from "../../assets/login-bg.svg";
import LoginFormBG from "../../assets/login-form-bg.svg";
import "./login.styles.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(
      (inputs) => ({ ...inputs, [name]: value }),
      console.log(
        "username:" + inputs.username + "  name " + name + "  value " + value
      )
    );
  };
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password === "admin")
        navigate("/mainmenupage");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.username === "admin" || inputs.password === "admin")
      navigate("/mainmenupage");
  };

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
        <Row span={16}>
          <Col
            span={24}
            style={{
              border: "none",
              background: "transparent",
              margin: "0",
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100px",
              alignItems: "center",
            }}
          >
            <LogoVISTAVMS src={LogoLogin} />
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              width: "100%",
              margin: "0",
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Form
              labelCol={{
                span: 8,
              }}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col span={10} offset={7}>
                  <InputForm
                    inputs={"username"}
                    handleChange={handleChange}
                    type={"text"}
                    placeholder={"Email"}
                  />
                </Col>
              </Row>

              <Row style={{ height: "40px" }}>
                <Col span={10} offset={7}>
                  <InputPasswordForm
                    inputs={"password"}
                    handleChange={handleChange}
                    type={Text}
                    placeholder={"Password"}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={10} offset={7}>
                  <Form.Item>
                    <Row>
                      <Col className="txt_remember" span={12} offset={0}>
                        <CheckBox />
                      </Col>
                      <Col className="fg_password" span={12} offset={0}>
                        <LinkTo torouting={'/register'} text={"Forgot password?"} />
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={10} offset={7}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={handleSubmit}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={10} offset={7}>
                  <Link className="go_to_register" to={"/register"}>
                    Don't have an account yet? <b> register now!</b>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
