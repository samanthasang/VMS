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
} from "antd";
import { useNavigate } from "react-router-dom";
import InputForm from "../inputform/inputform.component";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import InputFormWithLabel from "../inputformwithlabel/inputformwithlabel.component";
import ResetPasswordTXT from "../resetpasswordtxt/resetpasswordtxt.component";

import "./forgotpasswordform.styles.scss";
const { Option } = Select;

const FormForgotPassword = ({ LoginAuth }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

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
    if (inputs.username === "admin" || inputs.password === "admin")
      navigate("/mainmenupage");
  };
  return (
    <Row>
      <Col
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
                  placeholder="What is your favorite children’s Book?"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
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
                inputs={"answer1"}
                handleChange={handleChange}
                type={"text"}
                label="Answer"
              />
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3} className="select_disabled">
              <Form.Item label="Question 2" className="select_form">
                <Select
                  disabled
                  placeholder="What is your favorite children’s Book?"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
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
                inputs={"answer2"}
                handleChange={handleChange}
                type={"text"}
                label="Answer"
              />
            </Col>
          </Row>
          <Row>
            <Col span={18} offset={3} className="select_disabled">
              <Form.Item label="Question 3" className="select_form">
                <Select
                  disabled
                  placeholder="What is the name of your favorite fruit?"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
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
                inputs={"answer3"}
                handleChange={handleChange}
                type={"text"}
                label="Answer"
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default FormForgotPassword;
