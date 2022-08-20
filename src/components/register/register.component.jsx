import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Registration from "../registration/registration.component";
import SetPassword from "../setpassword/setpassword.component";
import RegistrationNavigation from "../registerationnavigation/registerationnavigation.component";
import FormRegister from "../forms/formregister/formregister.component";
import LoginBG from "../../assets/login-bg.jpg";
import LoginFormBG from "../../assets/login-form-bg.svg";
import OpenNotification from "../notification/notification.component";

import "./register.styles.scss";

const { Meta } = Card;

const Register = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    question1: "",
    question2: "",
    question3: "",
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
  });

  useEffect(() => {
    forceUpdate({});
  }, []);
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const next = (firstName, lastName, email, password, repeatPassword) => {
    console.log(
      "onChange:",
      firstName,
      lastName,
      email,
      password,
      repeatPassword
    );
    setCurrent(current + 1);
    setInputs({ firstName, lastName, email, password, repeatPassword });
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const endForm = (
    question1,
    question2,
    question3,
    question1Answer,
    question2Answer,
    question3Answer
  ) => {
    setInputs(
      {
        question1,
        question2,
        question3,
        question1Answer,
        question2Answer,
        question3Answer,
      },
      console.log("question1:", inputs.firstName),
      console.log("question2:", inputs.lastName),
      console.log("question3:", inputs.email),
      console.log("question1:", inputs.password),
      console.log("question2:", inputs.repeatPassword),
      console.log("question1:", question1),
      console.log("question2:", question2),
      console.log("question3:", question3),
      console.log("question1Answer:", question1Answer),
      console.log("question2Answer:", question2Answer),
      console.log("question3Answer:", question3Answer),
      axios({
        method: "post",
        url: "http://81.29.243.50:8000/api/auth/register",
        data: {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
          repeatPassword: inputs.repeatPassword,
          question1ID: parseInt(question1),
          question2ID: parseInt(question2),
          question3ID: parseInt(question3),
          question1Answer: question1Answer,
          question2Answer: question2Answer,
          question3Answer: question3Answer,
        },
      }).then(
        (response) => {
          console.log(response.data.ok);
          response.data.ok &&
            OpenNotification(
              "topRight",
              "Your account will confirm by Admin",
              "Notification",
              ""
            );
          navigate("/");
        },
        (error) => {
          OpenNotification("topRight", "", error.response.data.msg, "error");
          console.log(error);
        }
      )
    );
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
          borderRadius: "8px",
        }}
      >
        <Registration
          current={current}
          // ChangeCurrent={onChange}
          // next={next}
          // prev={prev}
        />
        <Row className="main_container_form">
          <Col span={24}>
            {current === 0 && (
              <FormRegister
                form={form}
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
              />
            )}
            {current === 1 && (
              <SetPassword
                form={form}
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
                endForm={endForm}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Register;
