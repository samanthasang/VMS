import React from "react";
import { Row, Col } from "antd";

import { Form, Input } from "antd";

import { UserOutlined } from "@ant-design/icons";

import "./inputform.styles.scss";

const InputForm = ({ span, offset,inputs, handleChange, type, placeholder }) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <Form.Item
          className="input_form"
          onChange={handleChange}
          type={type}
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            name={inputs}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={placeholder}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InputForm;
