import { Button, Col, Form, Row, Select } from "antd";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./setpassword.styles.scss";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";

import OpenNotification from "../../form-items/notification/notification.component";
import axios from "axios";

const { Option } = Select;
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
];

const SetPassword = ({ current, next, prev, form, endForm, email }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    question1: "",
    question2: "",
    question3: "",
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
  });

  const [emptyQuestion1, setEmtyQuestion1] = useState("");
  const [emptyQuestion2, setEmtyQuestion2] = useState("");
  const [emptyQuestion3, setEmtyQuestion3] = useState("");
  const [emptyQuestion1Answer, setEmtyQuestion1Answer] = useState(false);
  const [emptyQuestion2Answer, setEmtyQuestion2Answer] = useState(false);
  const [emptyQuestion3Answer, setEmtyQuestion3Answer] = useState(false);
  const [questions1, setQuestions1] = useState([]);
  const [questions2, setQuestions2] = useState([]);
  const [questions3, setQuestions3] = useState([]);

  const getUsers = async () => {
    const users = await axios.get(
      process.env.REACT_APP_HTTP + "/api/auth/questions"
    );
    // setQuestions(users.data.data);
    setQuestions1(users.data.data.FirstType);
    setQuestions2(users.data.data.SecondType);
    setQuestions3(users.data.data.ThirdType);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password === "admin")
      navigate("/mainmenupage");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.question1 === "") {
      setEmtyQuestion1Answer(true);
      setEmtyQuestion1("Choose The Question");
    }
    if (inputs.question2 === "") {
      setEmtyQuestion2Answer(true);
      setEmtyQuestion2("Choose The Question");
    }
    if (inputs.question3 === "") {
      setEmtyQuestion3Answer(true);
      setEmtyQuestion3("Choose The Question");
    }
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
    console.log("q:", email);
    console.log("question1:", inputs.question1);
    console.log("question2:", inputs.question2);
    console.log("question3:", inputs.question3);
    console.log("question1Answer:", inputs.question1Answer);
    console.log("question2Answer:", inputs.question2Answer);
    console.log("question3Answer:", inputs.question3Answer);

    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/register/questions",
      data: {
        email: email,
        question1ID: parseInt(inputs.question1),
        question2ID: parseInt(inputs.question2),
        question3ID: parseInt(inputs.question3),
        question1Answer: inputs.question1Answer,
        question2Answer: inputs.question2Answer,
        question3Answer: inputs.question3Answer,
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Row>
            <Col span={18} offset={3}>
              <Form.Item
                inputs={"question1"}
                label="Question 1"
                className="select_form"
              >
                <Select
                  placeholder="Select a Question"
                  optionFilterProp="children"
                  name="question1"
                  id="question1"
                  onChange={(value, id) => (
                    console.log(id.id),
                    setEmtyQuestion1Answer(false),
                    setInputs((inputs) => ({
                      ...inputs,
                      ["question1"]: id.id,
                    }))
                  )}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {questions1.map((question) => (
                    <Option
                      key={question.id}
                      id={question.id}
                      value={question.title}
                      name="question1"
                    >
                      {question.title}
                    </Option>
                  ))}
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
            <Col span={18} offset={3}>
              <Form.Item
                inputs={"question2"}
                label="Question 2"
                className="select_form"
              >
                <Select
                  placeholder="Select a Question"
                  optionFilterProp="children"
                  onChange={(value, id) => (
                    console.log(id.id),
                    setEmtyQuestion2Answer(false),
                    setInputs((inputs) => ({
                      ...inputs,
                      ["question2"]: id.id,
                    }))
                  )}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {questions2.map((question) => (
                    <Option
                      key={question.id}
                      id={question.id}
                      value={question.title}
                      name="question1"
                    >
                      {question.title}
                    </Option>
                  ))}
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
            <Col span={18} offset={3}>
              <Form.Item
                inputs={"question3"}
                label="Question 3"
                className="select_form"
              >
                <Select
                  placeholder="Select a Question"
                  optionFilterProp="children"
                  onChange={(value, id) => (
                    console.log(id.id),
                    setEmtyQuestion3Answer(false),
                    setInputs((inputs) => ({
                      ...inputs,
                      ["question3"]: id.id,
                    }))
                  )}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {questions3.map((question) => (
                    <Option
                      key={question.id}
                      id={question.id}
                      value={question.title}
                      name="question1"
                    >
                      {question.title}
                    </Option>
                  ))}
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
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Back
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button className="btn_next" type="primary" onClick={next}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    className="btn_next"
                    type="primary"
                    onClick={handleSubmit}
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

export default SetPassword;
