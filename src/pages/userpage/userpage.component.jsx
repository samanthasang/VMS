import React, { useRef, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

// const UserPage = () => {
//   return (
//     <div>UserPage</div>
//   )
// }

import Uploady from "@rpldy/uploady";
import UploadUrlInput from "@rpldy/upload-url-input";

const UserPage = () => {
  const [inputs, setInputs] = useState(null);
  const uploadRef = useRef(null);

  const onClick = () => {
    if (uploadRef && uploadRef.current) {
      uploadRef.current(); //initiate upload
    }
    console.log(uploadRef);
    console.log(uploadRef.current);
    console.log(uploadRef.current());
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(value);
    console.log("name:", inputs);
    console.log("value:", value);
  };
  const onFinish = (values) => {
    console.log("Succ:", values.username);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Uploady>
        <UploadUrlInput
          name="username"
          placeholder="URL to upload"
          uploadRef={uploadRef}
          onClick={handleChange}
        />

        <button onClick={onClick}>{inputs}</button>
      </Uploady>
      <input name="username" type={"url"} onChange={handleChange}></input>

      {inputs && <video src={inputs} controls />}

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserPage;
