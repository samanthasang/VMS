import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Row } from "antd";

import "./groupform.styles.scss";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
const FormGroup = ({ ModalName, handleSubmit }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [inputs, setInputs] = useState({
    name: "",
    groupID: 0,
  });
  const [nameEmpty, setNameEmpty] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (inputs.name !== "") {
      setNameEmpty(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col span={24}>
        <Form
          name="normal_login"
          className="manual-add-inputs"
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <InputFormWithLabel
            span={10}
            offset={7}
            id="name"
            inputs={"name"}
            placeholder={ModalName + " Name"}
            label={ModalName + " Name"}
            type="text"
            handleChange={handleChange}
            value={inputs.name}
            required={true}
            empty={nameEmpty}
          />
        </Form>
      </Col>
    </Row>
  );
};

export default FormGroup;
