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
  Steps,
} from "antd";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import SubminBTN from "../submitbtn/submitbtn.component";
import "./setpassword.styles.scss";
import InputFormWithLabel from "../inputformwithlabel/inputformwithlabel.component";
import { Link } from "react-router-dom";

import OpenNotification from "../notification/notification.component";

const { Option } = Select;
const { Step } = Steps;
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




const SetPassword = ({ current, next, prev, form, endForm }) => {
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

  const onChange = (event) => {
    // console.log(`selected ${event.target.value}`);
    const name = event.target.id;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
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
    // if (
    //   inputs.question1 === "" ||
    //   inputs.question2 === "" ||
    //   inputs.question3 === "" ||
    //   inputs.question1Answer === "" ||
    //   inputs.question2Answer === "" ||
    //   inputs.question3Answer === ""
    // ) {
    //   return;
    // }
    console.log("question1:", inputs.question1);
    console.log("question2:", inputs.question2);
    console.log("question3:", inputs.question3);
    console.log("question1Answer:", inputs.question1Answer);
    console.log("question2Answer:", inputs.question2Answer);
    console.log("question3Answer:", inputs.question3Answer);
    endForm(
      inputs.question1,
      inputs.question2,
      inputs.question3,
      inputs.question1Answer,
      inputs.question2Answer,
      inputs.question3Answer
    );
    // if (inputs.username === "admin" || inputs.password === "admin")
    //   navigate("/mainmenupage");
  };

  return (
    <Row>
      <Col
        className="form_register_2"
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
                  // value=''
                  onChange={(value, id) => (
                    console.log(id.id),
                    setEmtyQuestion1Answer(false),
                    setInputs((inputs) => ({
                      ...inputs,
                      ["question1"]: id.id,
                    }))
                  )}
                  // onChange={onChange}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option
                    value="What is your favorite children’s Book?"
                    name="question1"
                    id="1"
                  >
                    What is your favorite children’s Book?
                  </Option>
                  <Option
                    value="What was the first name of your first boos?"
                    name="question2"
                    id="2"
                  >
                    What was the first name of your first boos?
                  </Option>
                  <Option
                    value="What is the name of your favorite fruit?"
                    name="question3"
                    id="3"
                  >
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
                  <Option
                    value="What is your favorite children’s Book?"
                    name="question1"
                    id="1"
                  >
                    What is your favorite children’s Book?
                  </Option>
                  <Option
                    value="What was the first name of your first boos?"
                    name="question2"
                    id="2"
                  >
                    What was the first name of your first boos?
                  </Option>
                  <Option
                    value="What is the name of your favorite fruit?"
                    name="question3"
                    id="3"
                  >
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
                  <Option
                    value="What is your favorite children’s Book?"
                    name="question1"
                    id="1"
                  >
                    What is your favorite children’s Book?
                  </Option>
                  <Option
                    value="What was the first name of your first boos?"
                    name="question2"
                    id="2"
                  >
                    What was the first name of your first boos?
                  </Option>
                  <Option
                    value="What is the name of your favorite fruit?"
                    name="question3"
                    id="3"
                  >
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
          {/* <SubminBTN handleSubmit={handleSubmit} span={10} offset={7} /> */}

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
