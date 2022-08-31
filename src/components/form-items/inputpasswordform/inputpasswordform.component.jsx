import React from "react";
import { Row, Col, Form, Input, Tooltip } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";
import { Lock } from "../../../assets/Icons/JSXs";

import "./inputpasswordform.styles.scss";

const InputPasswordForm = ({
  span,
  offset,
  inputs,
  handleChange,
  type,
  placeholder,
  empty,
  tittle,
}) => {
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
              prefix={<Lock className="site-form-item-icon" />}
              placeholder={placeholder}
              suffix={
                <Tooltip
                  title={`${tittle ? "Password Dosn`t Match" : "Required"}`}
                >
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(255,0,0,.8)",
                    }}
                  />
                </Tooltip>
              }
            />
          ) : (
            <Tooltip
              // trigger={["focus"]}
              title={
                "Use 8 or more characters with a mix of letters, numbers & symbols"
              }
              placement="topLeft"
              overlayClassName="numeric-input"
            >
              <Input.Password
                name={inputs}
                prefix={<Lock className="site-form-item-icon" />}
                placeholder={placeholder}
              />
            </Tooltip>
          )}
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InputPasswordForm;
