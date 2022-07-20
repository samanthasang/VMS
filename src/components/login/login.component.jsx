import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react'


import Picture2 from "../../assets/Untitled2.png"
import './login.styles.scss'

const { Meta } = Card;

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password == "admin") console.log('Success:', inputs);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <Row justify="space-around" align="middle">
        <Col span={12} style={{height: '100vh'}} >

      <Card
    style={{
        margin: '0',
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',width: '300px',
        alignItems: 'center'}}
      name="basic"
      >
        <Meta style={{justifyContent: 'center'}}
          avatar={<Avatar src={Picture2} />}
          title="Dideh Negar Hooshno"
        />
      </Card>
    <Form
    style={{
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'}}
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
      autoComplete="off"onSubmit={handleSubmit}
    >
      <Form.Item
        label="Username"
        type="text" 
        name="username"
        value={inputs.username} 
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input 
        name="username"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        type="text" 
        value={inputs.password} 
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
        name="password"/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </Col>
    </Row>
    );
}

export default Login;