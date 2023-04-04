import { Col, Form, Row, Select } from "antd";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./setpassword.styles.scss";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";

import OpenNotification from "../../form-items/notification/notification.component";
import axios from "axios";
import Navigation from "../../generals-items/navigation/navigation.component";

const { Option } = Select;
// steps for registering proccess
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

const SetQuestion = ({ current, next, prev, form, endForm, email }) => {
  const navigate = useNavigate();
  // getiing questions & answers for register user
  const [inputs, setInputs] = useState({
    question1: "",
    question2: "",
    question3: "",
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
  });

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
  const [questions1, setQuestions1] = useState([]);
  const [questions2, setQuestions2] = useState([]);
  const [questions3, setQuestions3] = useState([]);

  const getQuestions = async () => {
    // get questions from API
    const users = await axios.get(
      process.env.REACT_APP_HTTP + "/api/auth/questions"
    );
    setQuestions1(users.data.data.FirstType);
    setQuestions2(users.data.data.SecondType);
    setQuestions3(users.data.data.ThirdType);
  };

  useEffect(() => {
    getQuestions();
  }, []);

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

  // submit the questions & answers to API
  const handleSubmitForm = (event) => {
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

    // Send info to questions API
    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/register/questions",
      data: {
        email: email,
        question1ID: inputs.question1,
        question2ID: inputs.question2,
        question3ID: inputs.question3,
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
        navigate("/login");
      },
      (e) => {
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
          autoComplete="off"
          onSubmit={handleSubmitForm}
        >
          {/* select a question in case of forgotting the pasword */}
          <Row>
            <Col span={18} offset={3}>
              <Form.Item
                inputs={"question1"}
                label="Question 1"
                className="select_form"
              >
                <Select
                  dropdownStyle={{
                    background: "#C8CCD5!important",
                    color: "#070709!important",
                  }}
                  overlayClassName="select_register"
                  placeholder="Select a Question"
                  optionFilterProp="children"
                  name="question1"
                  id="question1"
                  className="drop_down"
                  style={{
                    background: "#C8CCD5!important",
                    color: "#070709!important",
                  }}
                  onChange={(value, id) => {
                    setEmtyQuestion1Answer(false);
                    setInputs((inputs) => ({
                      ...inputs,
                      question1: id.id,
                    }));
                  }}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {questions1.map((question) => (
                    <Option
                      className="drop_down"
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
          {/* getting answer for the slected question */}
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
          {/* select a question in case of forgotting the pasword */}
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
                  onChange={(value, id) => {
                    setEmtyQuestion2Answer(false);
                    setInputs((inputs) => ({
                      ...inputs,
                      question2: id.id,
                    }));
                  }}
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
          </Row>{" "}
          {/* getting answer for the slected question */}
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
          </Row>{" "}
          {/* select a question in case of forgotting the pasword */}
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
                  onChange={(value, id) => {
                    setEmtyQuestion3Answer(false);
                    setInputs((inputs) => ({ ...inputs, question3: id.id }));
                  }}
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
          {/* getting answer for the slected question */}
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
          {/* navigate to next & pervius step in register proccess */}
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

export default SetQuestion;
