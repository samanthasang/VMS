import React from 'react'
import { Avatar, Card} from 'antd';


import './logovistavms.styles.scss'

const { Meta } = Card;
const LogoVISTAVMS = ({ src}) => {
  return (
      <Card
      className='logo_vista'
      name="basic"
      >
        <Meta className='Logo_Login' style={{justifyContent: 'center'}}
          avatar={<Avatar src={src} />}
          />
      </Card>
  )
}

export default LogoVISTAVMS