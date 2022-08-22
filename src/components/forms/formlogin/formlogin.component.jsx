import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../../redux/action/registerAction";

import InputForm from "../../inputform/inputform.component";
import InputPasswordForm from "../../inputpasswordform/inputpasswordform.component";
import SubminBTN from "../../submitbtn/submitbtn.component";
import RememberAndForgotPass from "../../rememberandforgotpass/rememberandforgotpass.component";
import GoToRegister from "../../gotoregister/gotoregister.omponent";
import OpenNotification from "../../notification/notification.component";
import "./formlogin.styles.scss";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogedIn = useSelector((state) => state.register.isLogedIn);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [emptyEmail, setEmtyEmail] = useState(false);
  const [emptyUserName, setEmtyUserName] = useState(false);
  const [passwordTittle, setPasswordTittle] = useState(false);

  function isValidEmail(email) {
    const a = /\S+@\S+\.\S+/.test(email);
    console.log(a);
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    // console.log("Failed:", value);

    if (inputs.username !== "") {
      setEmtyEmail(false);
    }
    if (inputs.password !== "") {
      setEmtyUserName(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.username === "") {
      setEmtyEmail(true);
    }
    if (inputs.password === "") {
      setEmtyUserName(true);
    }
    if (inputs.username === "" || inputs.password === "") {
      return;
    }
    if (isValidEmail(inputs.username) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Isn`t Valid", "", "error");
      return;
    }
    console.log(inputs.username + " " + inputs.password);
    console.log("1: " + isLogedIn);
    dispatch(LoginUser(inputs));
    console.log("2:" + isLogedIn);
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
          <InputForm
            span={10}
            offset={7}
            inputs={"username"}
            handleChange={handleChange}
            type={"email"}
            placeholder={"Email"}
            empty={emptyEmail}
          />

          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"password"}
            handleChange={handleChange}
            type={Text}
            placeholder={"Password"}
            empty={emptyUserName}
          />
          <RememberAndForgotPass span={10} offset={7} />
          <SubminBTN handleSubmit={handleSubmit} span={10} offset={7} />
          <GoToRegister span={10} offset={7} />
        </Form>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  isLogedIn: state.isLogedIn,
});

// export default connect(mapStateToProps, { LoginUser })(FormLogin);
export default FormLogin;
