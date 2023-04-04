import { Avatar, Button, Card, Col, Divider, Modal, Row, Tabs } from "antd";
import React from "react";
import { LogoAbout } from "../../../assets/Icons/JSXs";

import "./modal-about.styles.scss";
const systeminfoJson = {
  AppVersion: `${navigator.userAgent}`,
  Memory: `${navigator.deviceMemory}`,
  AppName: `${navigator.appName}`,
  CookieEnabled: `${navigator.cookieEnabled}`,
  Language: `${navigator.language}`,
  Languages: `${navigator.languages}`,
  JavaEnabled: `${navigator.javaEnabled()}`,
  Vendor: `${navigator.vendor}`,
  ProductSub: `${navigator.productSub}`,
  platform: `${navigator.platform}`,
  OnLine: `${navigator.onLine}`,
  oscpu: `${navigator.oscpu}`,
  Product: `${navigator.product}`,
};
const { Meta } = Card;
const ModalAbout = ({
  isModalAboutOpen,
  handleModalAboutOk,
  handleModalAboutCancel,
}) => {
  return (
    <>
      <Modal
        className="modal_about_window"
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
          <Tabs.TabPane tab="About" key="1">
            <Col span={24} className="tab_about_logo">
              <Card className="logo_vista" name="basic" bordered="false">
                <Meta
                  className=""
                  avatar={
                    <Avatar
                      style={{ width: "100px", height: "37px" }}
                      src={<LogoAbout width="100px" height="37px" />}
                    />
                  }
                />
              </Card>
            </Col>
            <Col span={24} className="tab_about">
              <p>
                Vista VMS is an intelligent video management system that uses
                advanced deep-learning algorithms to process your surveillance
                videos accurately and reliably to guarantee the safety and
                security of your organization.
              </p>
              <Divider />
              <p>Version: 1.0.0</p>
              <p>Date: 30/01/2023</p>
            </Col>
          </Tabs.TabPane>
          <Tabs.TabPane tab="System Info" key="2">
            <Row>
              <Col
                span={18}
                className="tab_info"
                style={{
                  height: "243px",
                }}
              >
                <p
                  style={{
                    height: "203px",
                  }}
                >
                  <span>App bersion : </span>
                  <span>{navigator.userAgent}</span>
                  <br></br>
                  <span>Memory : </span>
                  <span>{navigator.deviceMemory}</span>
                  <br></br>
                  <span>App name : </span>
                  <span>{navigator.appName}</span>
                  <br></br>
                  <span>Cookie enabled : </span>
                  <span>{navigator.cookieEnabled}</span>
                  <br></br>
                  <span>Language : </span>
                  <span>{navigator.language}</span>
                  <br></br>
                  <span>Languages : </span>
                  <span>{navigator.languages}</span>
                  <br></br>
                  <span>Java enabled : </span>
                  <span>{navigator.javaEnabled()}</span>
                  <br></br>
                  <span>Vendor : </span>
                  <span>{navigator.vendor}</span>
                  <br></br>
                  <span>Product sub : </span>
                  <span>{navigator.productSub}</span>
                  <br></br>
                  <span>platform : </span>
                  <span>{navigator.platform}</span>
                  <br></br>
                  <span>OnLine : </span>
                  <span>{navigator.onLine}</span>
                  <br></br>
                  <span>oscpu : </span>
                  <span>{navigator.oscpu}</span>
                  <br></br>
                  <span>Product : </span>
                  <span>{navigator.product}</span>
                  <br></br>
                </p>
              </Col>
              <Col span={6} className="tab_info_btn">
                {/* <Button
                >Copy</Button> */}
                <a
                  className="btn_pre"
                  href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(systeminfoJson)
                  )}`}
                  download="systeminfoJson.json"
                >
                  Export
                </a>
                <Button
                  type="primary"
                  className="btn_next"
                  onClick={handleModalAboutCancel}
                >
                  OK
                </Button>
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalAbout;
