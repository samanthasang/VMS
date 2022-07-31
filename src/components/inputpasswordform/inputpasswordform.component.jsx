import React from 'react'


import { Form, Input } from 'antd';

import { LockOutlined } from '@ant-design/icons';

import './inputpasswordform.styles.scss'

const InputPasswordForm = ({inputs, handleChange, type, placeholder}) => {
  return (
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
  );
}

export default InputPasswordForm