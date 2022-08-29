import { Col, Row } from 'antd';
import React from 'react'

import Register from "../../components/register-items/register/register.component";


import './registerpage.styles.scss'



const RegisterPage = () => (
    <Row>
        <Col span={24}>
            <Register />
        </Col>
    </Row>
)



export default RegisterPage;