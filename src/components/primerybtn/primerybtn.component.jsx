import React from "react";

import { Button, Form, Input } from "antd";

import "./primerybtn.styles.scss";

const PrimaryBtn = ({ handleSubmit }) => {
  return (
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="btn_primary"
        onClick={handleSubmit}
      >
        Log in
      </Button>
    </Form.Item>
  );
};

export default PrimaryBtn;
