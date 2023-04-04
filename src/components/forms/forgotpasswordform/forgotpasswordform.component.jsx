import React, { useState } from "react";
import { Col, Form, Row, Select } from "antd";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
import ResetPasswordTXT from "../../forgot-password-items/resetpasswordtxt/resetpasswordtxt.component";
import axios from "axios";
import OpenNotification from "../../form-items/notification/notification.component";

import "./forgotpasswordform.styles.scss";
import Navigation from "../../generals-items/navigation/navigation.component";
// steps for registering proccess
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
  current,
  email,
  question1,
  question2,
  question3,
  next_2,
  prev,
  form,
}) => {
  // getiing question1Answer & question2Answer & question3Answer for register user
  const [inputs, setInputs] = useState({
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
  });

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  // check for question1 input is empty
  const [emptyQuestion1, setEmtyQuestion1] = useState("");
  // check for question2 input is empty
  const [emptyQuestion2, setEmtyQuestion2] = useState("");
  // check for question3 input is empty
  const [emptyQuestion3, setEmtyQuestion3] = useState("");
  // check for question1Answer input is empty
  const [emptyQuestion1Answer, setEmtyQuestion1Answer] = useState(false);
  // check for question2Answer input is empty
  const [emptyQuestion2Answer, setEmtyQuestion2Answer] = useState(false);
  // check for question3Answer input is empty
  const [emptyQuestion3Answer, setEmtyQuestion3Answer] = useState(false);

  // getting info from inputs & for inputs to not to be empty
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
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

  // submit the answers to API
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(inputs.question1Answer);
    console.log(inputs.question2Answer);
    console.log(inputs.question3Answer);
    // check the answers to not to be empty
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
    // check the answers to not to be empty
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
    // Send info to forgottpassword API
    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/get-recovery-token",
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
      (e) => {
        e.response.status === 404 &&
          OpenNotification("topRight", "", e.response.data.msg, "error");
        console.log(e);
      }
    );
  };
  return (
    <Row className="main_register_container">
      <Col className="form_register" span={24}>
        <Form
          labelCol={{
            span: 4,
          }}
          name="normal_login"
          className="set_password_form"
          initialValues={{ remember: true }}
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          {/* title  */}
          <ResetPasswordTXT
            span={10}
            offset={7}
            description={"Answer the questions for reset password"}
          />
          {/* question 1 */}
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
                ></Select>
              </Form.Item>
            </Col>
          </Row>
          {/* getting the question1Answer */}
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
          {/* question 2 */}
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
                ></Select>
              </Form.Item>
            </Col>
          </Row>
          {/* getting the question2Answer */}
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
          {/* question 3 */}
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
                ></Select>
              </Form.Item>
            </Col>
          </Row>
          {/* getting the question3Answer */}
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

          {/* navigate to next & pervius step in forgottpassword proccess */}
          <Navigation
            steps={steps}
            current={current}
            form={form}
            handleSubmit={handleSubmit}
            next={next_2}
            prev={prev}
          />
        </Form>
      </Col>
    </Row>
  );
};

export default FormForgotPassword;
