import { Col, Form, Row } from "antd";
import React, { useEffect, useState } from "react";

import axios from "axios";
import OpenNotification from "../../form-items/notification/notification.component";

import checkPasswordStrength from "check-password-strength";
import { useNavigate } from "react-router-dom";
import "./setnewpassword.styles.scss";
import InputPasswordForm from "../../form-items/inputpasswordform/inputpasswordform.component";
// import StrengthBar from "../../form-items/stregthbar/stregthbar.component";
import ResetPasswordTXT from "../resetpasswordtxt/resetpasswordtxt.component";
import Navigation from "../../generals-items/navigation/navigation.component";
import { UserLogOut } from "../../../redux/login_redux/loginAction";
import { useDispatch } from "react-redux";

// steps for forgot password proccess
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // getiing password & repeat pssword for reset user pssword
  const [inputs, setInputs] = useState({
    password: "",
    repeatPassword: "",
  });

  // set title
  const [passwordTittle, setPasswordTittle] = useState(false);
  // check for password input is empty
  const [emptyPassword, setEmtyPassword] = useState(false);
  // check for repeat password input is empty
  const [emptyRepeatPassword, setEmtyRepeatPassword] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    // check the strenght for password
    inputs.password === ""
      ? setStrength({ id: 15 })
      : setStrength(checkPasswordStrength.passwordStrength(inputs.password));
  }, [inputs.password]);

  // getting info from inputs & for inputs to not to be empty
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(
      (inputs) => ({ ...inputs, [name]: value }),
      console.log("name " + name + " value " + value)
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
    // check the password & repeat password to not to be empty
    if (inputs.password === "") {
      setEmtyPassword(true);
    }
    if (inputs.repeatPassword === "") {
      setEmtyRepeatPassword(true);
    }
    // check the strenght for password
    if (inputs.password.length < 8) {
      setEmtyPassword(true);
      setInputs({ ...inputs, password: "" });
      OpenNotification("topRight", "Password is too Short", "", "error");
      return;
    }
    // check for password & repeatpwssword to be the same
    if (inputs.password !== inputs.repeatPassword) {
      setPasswordTittle(true);
      setEmtyPassword(true);
      setEmtyRepeatPassword(true);
      setInputs({ ...inputs, password: "" });
      OpenNotification("topRight", "Password Dosn`t Match", "", "error");
      return;
    }
    console.log(token);
    console.log(inputs.password);
    console.log(inputs.repeatPassword);
    // Send info to forgot password API
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
        navigate("/login");
      },
      (e) => {
        // notiffication for show massage return from API
        OpenNotification("topRight", "", e.response.data.msg, "error");
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
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
          {/* title for Reset Password TXT */}
          <ResetPasswordTXT
            span={10}
            offset={7}
            title={"Enter Your New Password"}
          />
          {/* getting the password */}
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
          {/* check the strenght for password */}
          <Col id="color-indicators" span={10} offset={7}>
            <span className={`valid${strength.id}`}></span>
            <span className={`valid${strength.id}`}></span>
            <span className={`valid${strength.id}`}></span>
            <span className={`valid${strength.id}`}></span>
            <span>{strength.value}</span>
          </Col>

          {/* getting the repeatPassword */}
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
          {/* navigate to next & pervius step in forgot password proccess */}
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
