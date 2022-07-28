import { Col, Row, Collapse } from 'antd'
import React from 'react'

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SideBar
 = () => {
    const onChange = (key) => {
      console.log(key);
    };
  return (
    <Row>
        <Col span={24}>
            <Collapse defaultActiveKey={['1']} onChange={onChange} accordion>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </Col>
    </Row>
  )
}

export default SideBar
