import { Col, Row } from 'antd';
import React from 'react'

const PlayBackPage = () => {
  return (
    <Row className="main_view">
      <Col span={4} style={{backgroundColor: "red", color: "blue" }} >
        Hekllo
      </Col>
      <Col span={20} style={{backgroundColor: "green", color: "blue" }} >
        Hekllo
      </Col>
    </Row>
  )
}

export default PlayBackPage;