import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Steps
} from "antd";
import { useNavigate } from "react-router-dom";
import InputForm from "../inputform/inputform.component";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import InputFormWithLabel from "../inputformwithlabel/inputformwithlabel.component";
import ResetPasswordTXT from "../resetpasswordtxt/resetpasswordtxt.component";
import axios from "axios";
import OpenNotification from "../notification/notification.component";

import "./forgotpasswordform.styles.scss";
const { Option } = Select;
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

const FormForgotPassword = ({
  LoginAuth,
  current,
  email,
  question1,
  question2,
  question3,
  next_2,
  prev,
  form,
}) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
  });

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [emptyQuestion1, setEmtyQuestion1] = useState("");
  const [emptyQuestion2, setEmtyQuestion2] = useState("");
  const [emptyQuestion3, setEmtyQuestion3] = useState("");
  const [emptyQuestion1Answer, setEmtyQuestion1Answer] = useState(false);
  const [emptyQuestion2Answer, setEmtyQuestion2Answer] = useState(false);
  const [emptyQuestion3Answer, setEmtyQuestion3Answer] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(
      (inputs) => ({ ...inputs, [name]: value }),
    );
    if (inputs.question1Answer !== "") {
      setEmtyQuestion1Answer(false);
    }
    if (inputs.question2Answer !== "") {
      setEmtyQuestion2Answer(false);
    }
    if (inputs.question3Answer !== "") {
      setEmtyQuestion3Answer(false);
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
    console.log(email);
    console.log(inputs.question1Answer);
    console.log(inputs.question2Answer);
    console.log(inputs.question3Answer);
    if (inputs.question1Answer === "") {
      setEmtyQuestion1Answer(true);
      setEmtyQuestion1("Required");
    }
    if (inputs.question2Answer === "") {
      setEmtyQuestion2Answer(true);
      setEmtyQuestion2("Required");
    }
    if (inputs.question3Answer === "") {
      setEmtyQuestion3Answer(true);
      setEmtyQuestion3("Required");
    }
    if (
      inputs.question1 === "" ||
      inputs.question2 === "" ||
      inputs.question3 === "" ||
      inputs.question1Answer === "" ||
      inputs.question2Answer === "" ||
      inputs.question3Answer === ""
    ) {
      return;
    }
    axios({
      method: "post",
      url: "http://192.168.1.32:8000/api/auth/get-recovery-token",
      data: {
        email: email,
        question1Answer: inputs.question1Answer,
        question2Answer: inputs.question2Answer,
        question3Answer: inputs.question3Answer,
      },
    }).then(
      (response) => {
        console.log(response.data.data.token);
        response.data.ok && next_2(response.data.data.token);
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
        className="form_forgot_2"
        span={24}
        style={{
          width: "100%",
          margin: "0",
          position: "absolute",
          top: "2000%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          name="normal_login"
          className="set_password_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <ResetPasswordTXT
            span={10}
            offset={7}
            description={"Answer the Questions for Reset Password"}
          />
          <Row>
            <Col span={18} offset={3} className="select_disabled">
              <Form.Item label="Question 1" className="select_form">
                <Select
                  disabled
                  placeholder={question1}
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="What is your favorite children’s Book?">
                    What is your favorite children’s Book?
                  </Option>
                  <Option value="What was the first name of your first boos?">
                    What was the first name of your first boos?
                  </Option>
                  <Option value="What is the name of your favorite fruit?">
                    What is the name of your favorite fruit?
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3}>
              <InputFormWithLabel
                inputs={"question1Answer"}
                handleChange={handleChange}
                type={"text"}
                label="Answer"
                empty={emptyQuestion1Answer}
                tittle={emptyQuestion1}
              />
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3} className="select_disabled">
              <Form.Item label="Question 2" className="select_form">
                <Select
                  disabled
                  placeholder={question2}
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="What is your favorite children’s Book?">
                    What is your favorite children’s Book?
                  </Option>
                  <Option value="What was the first name of your first boos?">
                    What was the first name of your first boos?
                  </Option>
                  <Option value="What is the name of your favorite fruit?">
                    What is the name of your favorite fruit?
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3}>
              <InputFormWithLabel
                inputs={"question2Answer"}
                handleChange={handleChange}
                type={"text"}
                label="Answer"
                empty={emptyQuestion2Answer}
                tittle={emptyQuestion2}
              />
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3} className="select_disabled">
              <Form.Item label="Question 3" className="select_form">
                <Select
                  disabled
                  placeholder={question3}
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="What is your favorite children’s Book?">
                    What is your favorite children’s Book?
                  </Option>
                  <Option value="What was the first name of your first boos?">
                    What was the first name of your first boos?
                  </Option>
                  <Option value="What is the name of your favorite fruit?">
                    What is the name of your favorite fruit?
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3}>
              <InputFormWithLabel
                inputs={"question3Answer"}
                handleChange={handleChange}
                type={"text"}
                label="Answer"
                empty={emptyQuestion3Answer}
                tittle={emptyQuestion3}
              />
            </Col>
          </Row>
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
                  <Button
                    className="btn_next"
                    type="primary"
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    className="btn_next"
                    type="primary"
                    onClick={() => OpenNotification("topRight")}
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
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

export default FormForgotPassword;
