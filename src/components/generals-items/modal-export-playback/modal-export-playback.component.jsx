import { Button, Col, Modal, Row, Tabs } from "antd";
import React from "react";
import { Delete } from "../../../assets/Icons/JSXs/index";
import PlayBackExported from "../../playback-items/playback-exported/playback-exported.component";
import PlayBackExporting from "../../playback-items/playback-exporting/playback-exporting.component";

import "./modal-export-playback.styles.scss";

const ModalExportPlayBack = ({ isModalAboutOpen, handleModalAboutOk }) => {
  return (
    <>
      <Modal
        className="modal_exporting_window"
        visible={isModalAboutOpen}
        onOk={handleModalAboutOk}
        onCancel={handleModalAboutOk}
        footer={null}
        open={isModalAboutOpen}
        centered
        style={{
          width: `520px`,
          borderRadius: "15px!important",
          color: "#f0f2f5",
        }}
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Exporting" key="1">
            <Col span={24} className="tab_about">
              <PlayBackExporting />
            </Col>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Exported" key="2">
            <Row>
              <Col span={24} className="tab_exporting">
                <Button type="primary" icon={<Delete />}>
                  Delete
                </Button>
              </Col>
              <Col span={24} className="tab_about">
                <PlayBackExported />
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalExportPlayBack;
