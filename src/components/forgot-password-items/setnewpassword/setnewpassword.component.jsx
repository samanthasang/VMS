import { Col, Form, Row, Button } from "antd";
import React, { useState } from "react";

import axios from "axios";
import OpenNotification from "../../form-items/notification/notification.component";

import { useNavigate } from "react-router-dom";
import "./setnewpassword.styles.scss";
import InputPasswordForm from "../../form-items/inputpasswordform/inputpasswordform.component";
import StrengthBar from "../../form-items/stregthbar/stregthbar.component";
import ResetPasswordTXT from "../resetpasswordtxt/resetpasswordtxt.component";
import Navigation from "../../generals-items/navigation/navigation.component";

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
];

const SetNewPassword = ({ token, current, next, prev, form }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    repeatPassword: "",
  });

  const [passwordTittle, setPasswordTittle] = useState(false);
  const [emptyPassword, setEmtyPassword] = useState(false);
  const [emptyRepeatPassword, setEmtyRepeatPassword] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(
      (inputs) => ({ ...inputs, [name]: value }),
      console.log(
        "username:" + inputs.username + "  name " + name + "  value " + value
      )
    );
    if (inputs.password !== "") {
      setEmtyPassword(false);
    }
    if (inputs.repeatPassword !== "") {
      setEmtyRepeatPassword(false);
    }
  };
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password === "admin")
      navigate("/mainmenupage");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (inputs.password === "") {
      setEmtyPassword(true);
    }
    if (inputs.repeatPassword === "") {
      setEmtyRepeatPassword(true);
    }
    if (inputs.password.length < 8) {
      setEmtyPassword(true);
      OpenNotification("topRight", "Password is too Short", "", "error");
      return;
    }
    if (inputs.password !== inputs.repeatPassword) {
      setPasswordTittle(true);
      setEmtyPassword(true);
      setEmtyRepeatPassword(true);
      OpenNotification("topRight", "Password Dosn`t Match", "", "error");
      return;
    }
    console.log(token);
    console.log(inputs.password);
    console.log(inputs.repeatPassword);
    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/recover-password",
      data: {
        token: `${token}`,
        password: `${inputs.password}`,
        repeatPassword: `${inputs.repeatPassword}`,
      },
    }).then(
      (response) => {
        console.log(response.data.ok);
        response.data.ok &&
          OpenNotification(
            "topRight",
            "Your password changed",
            "Notification",
            ""
          );
        navigate("/");
      },
      (error) => {
        OpenNotification("topRight", "", error.response.data.msg, "error");
        console.log(error);
      }
    );
  };

  return (
    <Row className="main_register_container">
      <Col className="form_register" span={24}>
        <Form
          labelCol={{
            span: 8,
          }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          onSubmit={handleSubmitForm}
        >
          <ResetPasswordTXT
            span={10}
            offset={7}
            title={"Enter Your New Password"}
          />
          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"password"}
            handleChange={handleChange}
            type={Text}
            placeholder={"Password"}
            empty={emptyPassword}
            tittle={passwordTittle}
          />
          <StrengthBar
            minLength={1}
            password={inputs.password}
            span={10}
            offset={7}
          />

          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"repeatPassword"}
            handleChange={handleChange}
            type={Text}
            placeholder={"Confirm Password"}
            empty={emptyRepeatPassword}
            tittle={passwordTittle}
          />
          <Navigation
            steps={steps}
            current={current}
            form={form}
            handleSubmitForm={handleSubmitForm}
            next={next}
            prev={prev}
          />
        </Form>
      </Col>
    </Row>
  );
};

export default SetNewPassword;
