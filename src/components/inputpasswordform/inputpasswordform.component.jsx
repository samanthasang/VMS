import React from 'react'
import { Row, Col, Form, Input } from "antd";

import { LockOutlined } from '@ant-design/icons';

import './inputpasswordform.styles.scss'

const InputPasswordForm = ({ span, offset,inputs, handleChange, type, placeholder}) => {
  return (
    <Row >
      <Col span={span} offset={offset}>
        <Form.Item
          className="input_password_form"
          onChange={handleChange}
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            name={inputs}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={placeholder}
            value={inputs.password}
            onChange={handleChange}
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default InputPasswordForm