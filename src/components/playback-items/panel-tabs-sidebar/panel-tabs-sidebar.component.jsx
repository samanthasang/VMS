import React from "react";
import { Col, Row, Tabs } from "antd";
import PanelPalyBack from "../panelPalyBack-sidebar/panelPalyBack-sidebar.component";

import "./panel-tabs-sidebar.styles.scss";
// import LocalPalyBack from "../localPalyBack-sidebar/localPalyBack-sidebar.component";
// import { Local, Device } from "../../../assets/Icons/JSXs/index";
import { Device } from "../../../assets/Icons/JSXs/index";

const PanelTabs = () => {
  const onChangeTabs = (key) => {
    console.log(key);
  };
  return (
    <Row style={{ height: "100%" }}>
      <Col
        span={24}
        style={{ height: "100%", background: "#2E333D" }}
        className="panel_tabs"
      >
        {/* tabs for switch to device or local tabs */}
        <Tabs
          defaultActiveKey="1"
          onChange={onChangeTabs}
          items={[
            // device tab for camera
            {
              label: (
                <span>
                  <Device />
                  Device
                </span>
              ),
              key: "1",
              children: <PanelPalyBack />,
            },
            // {
            //   label: (
            //     <span>
            //       <Local />
            //       Local
            //     </span>
            //   ),
            //   key: "2",

            //   children: <LocalPalyBack />,
            // },
          ]}
        />
      </Col>
    </Row>
  );
};

export default PanelTabs;
