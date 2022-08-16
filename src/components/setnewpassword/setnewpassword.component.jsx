import {
  Col,
  Form,
  Row,
  Select,
  Steps,
  Button
} from "antd";
import React, { useState } from "react";

import axios from "axios";
import OpenNotification from "../notification/notification.component";

import { Navigate, useNavigate } from "react-router-dom";
import "./setnewpassword.styles.scss";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import StrengthBar from "../stregthbar/stregthbar.component";
import ResetPasswordTXT from "../resetpasswordtxt/resetpasswordtxt.component";

const { Step } = Steps;
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



const SetNewPassword = ({ token, current, prev, form  }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    repeatPassword: "",
  });

  const [passwordTittle, setPasswordTittle] = useState(false);
  const [emptyPassword, setEmtyPassword] = useState(false);
  const [emptyRepeatPassword, setEmtyRepeatPassword] = useState(false);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
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

  const handleSubmit = (event) => {
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
      url: "http://192.168.1.32:8000/api/auth/recover-password",
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
        navigate("/login"); 
      },
      (error) => {
          OpenNotification("topRight", "", error.response.data.msg, "error");
        console.log(error);
      }
    );
  };

  return (
    <Row>
      <Col
        className="form_forgot_3"
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
            placeholder={"Password (alphabet and number)"}
            empty={emptyPassword}
            tittle={passwordTittle}
          />
          <StrengthBar
            minLength={8}
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
          <Row>
            <Col className="navigation_registeration" span={24}>
              <div className="steps-action">
                {current > 0 && (
                  <Button
                    className="btn_pre"
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={prev}
                  >
                    Back
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button className="btn_next" type="primary">
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    className="btn_next"
                    type="primary"
                    onClick={handleSubmit}
                  >
                    Done
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SetNewPassword;
