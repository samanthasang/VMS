import React from 'react'
import { Row, Col, Form, Input, Tooltip } from "antd";

import { InfoCircleOutlined, LockOutlined } from "@ant-design/icons";

import './inputpasswordform.styles.scss'

const InputPasswordForm = ({ span, offset,inputs, handleChange, type, placeholder, empty, tittle}) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <Form.Item
          className={` ${empty ? "border_red_pass" : "input_password_form"}`}
          onChange={handleChange}
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          {empty ? (
            <Input
              name={inputs}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder={placeholder}
              suffix={
                <Tooltip title={`${tittle ? 'Password Dosn`t Match' : "Required"}`}>
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(255,0,0,.8)",
                    }}
                  />
                </Tooltip>
              }
            />
          ) : (
            <Input.Password
              name={inputs}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder={placeholder}
            />
          )}
        </Form.Item>
      </Col>
    </Row>
  );
}

export default InputPasswordForm