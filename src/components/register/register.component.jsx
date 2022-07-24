import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import Picture2 from "../../assets/Untitled2.png"
import './register.styles.scss'

const { Meta } = Card;

const Register = () => {

    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatpassword: ''
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
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)'}}
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      layout='vertical'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"onSubmit={handleSubmit}
    >
      <Row >
        <Col span={11}>
      <Form.Item
        label="firstname"
        type="text" 
        name="firstname"
        value={inputs.firstname} 
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input 
        name="firstname"/>
      </Form.Item>
      </Col>
        <Col span={11} offset={2}>
      <Form.Item
        label="lastname"
        type="text" 
        name="lastname"
        value={inputs.lastname} 
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input 
        name="lastname"/>
      </Form.Item>
      </Col>
      </Row>
      <Form.Item
        label="email"
        type="text" 
        name="email"
        value={inputs.firstname} 
        onChange={handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input 
        name="email"/>
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
        label="Repeat Password"
        name="repeatpassword"
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
        name="repeatPassword"/>
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
          Register
        </Button>
        <Link to={'/login'}>Login now!</Link>
      </Form.Item>
    </Form>
        </Col>
    </Row>
    );
}

export default Register;