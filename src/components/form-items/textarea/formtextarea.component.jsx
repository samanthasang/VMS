import React from "react";
import { Row, Col, Tooltip } from "antd";

import { Form, Input } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";
import { User } from "../../../assets/Icons/JSXs";

import "./formtextarea.styles.scss";
import TextArea from "antd/lib/input/TextArea";

const TextareaForm = ({
  span,
  offset,
  inputs,
  handleChange,
  type,
  placeholder,
  empty,
  value,
  gutter,
}) => {
  return (
    <Row gutter={gutter}>
      <Col span={span} offset={offset} style={{ display: "inline-block" }}>
        <span>Remark:</span>
        <Form.Item
          className={` ${empty ? "border_red" : "input_form"}`}
          onChange={handleChange}
          value={value}
          type={type}
        >
          {empty ? (
            <TextArea
              autoComplete="on"
              name={inputs}
              prefix={<User className="site-form-item-icon" />}
              placeholder={placeholder}
              suffix={
                <Tooltip title="Required">
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(255,0,0,.8)",
                    }}
                  />
                </Tooltip>
              }
            />
          ) : (
            <TextArea
              name={inputs}
              prefix={<User className="site-form-item-icon" />}
              placeholder={placeholder}
            />
          )}
        </Form.Item>
      </Col>
    </Row>
  );
};

export default TextareaForm;
