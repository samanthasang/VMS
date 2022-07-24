import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react'

import { LockOutlined, UserOutlined } from '@ant-design/icons';

import Picture2 from "../../assets/Untitled2.png"
import './login.styles.scss'
import { Link } from 'react-router-dom';

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
    if (inputs.username === "admin" || inputs.password === "admin") console.log('Success:', inputs);
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
      labelCol={{
        span: 8,
      }}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Form.Item
        name="username"
        value={inputs.username} 
        onChange={handleChange}
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={inputs.password} 
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to={'/register'}>Forgot password!</Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to={'/register'}>register now!</Link>
      </Form.Item>
    </Form>
        </Col>
    </Row>
    );
}

export default Login;