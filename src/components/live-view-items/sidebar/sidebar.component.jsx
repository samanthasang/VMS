import React from "react";
import { Col, Row, Collapse } from "antd";

import "./sidebar.styles.scss";
// import Panel2 from "../panel2-sidebar/panel2-sidebar.component";
import Panel1 from "../panel1-sidebar/panel1-sidebar.component";

const { Panel } = Collapse;
const SideBar = () => {
  return (
    <Row style={{ height: "100%" }} className="collapse_panel1">
      <Col span={24} style={{ height: "100%" }}>
        {/* collapse with one section disalbe for now */}
        <Collapse
          defaultActiveKey={["1"]}
          accordion
          collapsible="disabled"
          className="collapse_header"
        >
          {/* panel1 for oraganization */}
          <Panel header="Organizations" key="1" showArrow={false}>
            <Panel1 />
          </Panel>

          {/* panel2 for view section */}
          {/* <Panel header="View" key="2">
            <Panel2 />
          </Panel> */}
        </Collapse>
      </Col>
    </Row>
  );
};

export default SideBar;
