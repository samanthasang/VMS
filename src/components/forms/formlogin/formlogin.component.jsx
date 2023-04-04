import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import { useDispatch } from "react-redux";

import { LoginUser } from "../../../redux/login_redux/loginAction";

import InputForm from "../../form-items/inputform/inputform.component";
import InputPasswordForm from "../../form-items/inputpasswordform/inputpasswordform.component";
import SubminBTN from "../../form-items/submitbtn/submitbtn.component";
import RememberAndForgotPass from "../../login-items/rememberandforgotpass/rememberandforgotpass.component";
import GoToRegister from "../../login-items/gotoregister/gotoregister.omponent";
import OpenNotification from "../../form-items/notification/notification.component";
import "./formlogin.styles.scss";
import { LoadMenu } from "../../../redux/layout_redux/layoutAction";
import axios from "axios";

const FormLogin = () => {
  const dispatch = useDispatch();

  // getting username & password & remmber the user from user for sending to the login API
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    checked: true,
  });
  // check for email input is empty
  const [emptyEmail, setEmtyEmail] = useState(false);
  // check for password input is empty
  const [emptyPassword, setEmtyPassword] = useState(false);

  // validation for email
  function isValidEmail(email) {
    const a = /\S+@\S+\.\S+/.test(email);
    console.log(a);
    return /\S+@\S+\.\S+/.test(email);
  }

  // getting info from inputs & for inputs to not to be empty
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));

    if (inputs.username !== "") {
      setEmtyEmail(false);
    }
    if (inputs.password !== "") {
      setEmtyPassword(false);
    }
  };

  // check the remmember checkbox
  const handleChangecheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);

    const value = e.target.checked;
    setInputs((inputs) => ({ ...inputs, checked: value }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // submit the username & password & remmber checkbox to API
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.username === "") {
      setEmtyEmail(true);
    }
    if (inputs.password === "") {
      setEmtyPassword(true);
    }
    if (inputs.username === "" || inputs.password === "") {
      return;
    }
    if (isValidEmail(inputs.username) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Isn`t Valid", "", "error");
      return;
    }
    console.log(inputs.username + " " + inputs.password + " " + inputs.checked);
    dispatch(LoadMenu("/liveview"));
    LogInUserDispatch();
  };
  const LogInUserDispatch = () => {
    // send info to login API
    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/login",
      data: {
        email: inputs.username,
        password: inputs.password,
        remember: inputs.checked,
      },
    }).then(
      (response) => {
        console.log(response.data);
        response.data.ok && dispatch(LoginUser(response.data.data));
        OpenNotification("topRight", "", response.data.msg, "");
        console.log(response.data);
        console.log(response.data.msg);
      },
      (error) => {
        error.response.status === 401 &&
          OpenNotification("topRight", "", error.response.data.msg, "error");
        error.response.status === 403 &&
          OpenNotification("topRight", "", error.response.data.msg, "error");
        console.log(error);
        console.log(error.response.status);
      }
    );
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
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          {/* getting the username */}
          <InputForm
            span={10}
            offset={7}
            inputs={"username"}
            handleChange={handleChange}
            type={"email"}
            placeholder={"Email"}
            empty={emptyEmail}
          />

          {/* getting password */}
          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"password"}
            handleChange={handleChange}
            type={Text}
            placeholder={"Password"}
            empty={emptyPassword}
          />

          {/* remmeber checkbox & navigate to forgotpassword page */}
          <RememberAndForgotPass
            span={10}
            offset={7}
            handleChangecheckbox={handleChangecheckbox}
          />
          {/* submit login form */}
          <SubminBTN
            text="Log in"
            handleSubmit={handleSubmit}
            span={10}
            offset={7}
          />
          {/* navigate to register page */}
          <GoToRegister span={10} offset={7} />
        </Form>
      </Col>
    </Row>
  );
};

export default FormLogin;
