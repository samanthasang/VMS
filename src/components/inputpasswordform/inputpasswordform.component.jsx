import React from 'react'


import { Form, Input } from 'antd';

import { LockOutlined } from '@ant-design/icons';

import './inputpasswordform.styles.scss'

const InputPasswordForm = ({inputs, handleChange, type, placeholder}) => {
  return (
      <Form.Item
          className='input_password_form'
        name={placeholder}
        value={inputs.username} 
          onChange={handleChange}
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={placeholder}
          value={inputs.password} 
          onChange={handleChange}
        />
      </Form.Item>
  )
}

export default InputPasswordForm