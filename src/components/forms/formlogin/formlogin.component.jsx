import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/action/registerAction";

import InputForm from "../../inputform/inputform.component";
import InputPasswordForm from "../../inputpasswordform/inputpasswordform.component";
import SubminBTN from "../../submitbtn/submitbtn.component";
import RememberAndForgotPass from "../../rememberandforgotpass/rememberandforgotpass.component";
import GoToRegister from "../../gotoregister/gotoregister.omponent";
import "./formlogin.styles.scss";

const FormLogin = ({ LoginAuth, isLogedIn, loginUser }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [emptyEmail, setEmtyEmail] = useState(false);
  const [emptyUserName, setEmtyUserName] = useState(false);

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
  const onFinish = (inputs) => {
    LoginAuth();
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
    console.log(inputs.username + ' ' + inputs.password);
    loginUser(inputs);
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

export default connect(mapStateToProps, { loginUser })(FormLogin);
// export default FormLogin;
