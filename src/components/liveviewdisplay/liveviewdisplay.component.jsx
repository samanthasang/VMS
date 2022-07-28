import React from 'react'

const LiveViewDisplay = () => {
  return (
    
    <Row>
      <Col span={20}>
     <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link to={'/liveViewpage'}>liveview</Link>
    </Menu.Item>
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
      <Link to={'/devicespage'}>devices</Link>
      </Menu.Item>
      <Menu.Item key="three" icon={<AppstoreOutlined />}>
      <Link to={'/userpage'}>user</Link>
      </Menu.Item>
      <Menu.Item key="four" icon={<AppstoreOutlined />}>
      <Link to={'/playBackpage'}>playBack</Link>
      </Menu.Item>
      
  </Menu>
      </Col>
    </Row>
  )
}

export default LiveViewDisplay