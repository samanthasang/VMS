import { Col, Row } from 'antd';
import React from 'react'

import Register from "../../components/register-items/register/register.component";


import './registerpage.styles.scss'



const RegisterPage = () => (
  <Row>
    {/* full wide div */}
    <Col span={24}>
      {/* render the register container component */}
      <Register />
    </Col>
  </Row>
);



export default RegisterPage;