import React, { useState } from "react";
import { Row, Col, Form } from "antd";

import { useNavigate } from "react-router-dom";

import InputForm from "../inputform/inputform.component";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import SubminBTN from "../submitbtn/submitbtn.component";
import RememberAndForgotPass from "../rememberandforgotpass/rememberandforgotpass.component";
import GoToRegister from "../gotoregister/gotoregister.omponent";
import "./formlogin.styles.scss";

const FormLogin = ({ LoginAuth }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password === "admin")
      // navigate("/mainmenupage");
      LoginAuth();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.username === "admin" || inputs.password === "admin")
      // navigate("/mainmenupage");
      LoginAuth();
  };
  return (
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
          <InputForm
            span={10}
            offset={7}
            inputs={"username"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"Email"}
          />

          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"password"}
            handleChange={handleChange}
            type={Text}
            placeholder={"Password"}
          />
          <RememberAndForgotPass span={10} offset={7} />
          <SubminBTN handleSubmit={handleSubmit} span={10} offset={7} />
          <GoToRegister span={10} offset={7}/>
        </Form>
      </Col>
    </Row>
  );
};

export default FormLogin;

