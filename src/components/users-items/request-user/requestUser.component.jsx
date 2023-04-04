import { Col, Row, Tabs, Input, Form, Button } from "antd";
import React from "react";
import { useState } from "react";
import InputForm from "../../form-items/inputform/inputform.component";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
import SubminBTN from "../../form-items/submitbtn/submitbtn.component";
import TextareaForm from "../../form-items/textarea/formtextarea.component";
import CheckboxAddrole from "../checkbox-addrole/checkbox-addrole.component";
import PreviewTabs from "../preview-tabs/preview-tabs.component";
import InputPasswordForm from "../../form-items/inputpasswordform/inputpasswordform.component";
import "./requestUser.styles.scss";
import SelectUser from "../select-user/selectuser.component";
import TableDevicePage from "../../devices-items/tableDevicepage/tableDevicePage.component";
import { Cancel, Delete } from "../../../assets/Icons/JSXs";
import UserPending from "../user-pending/user-pending.component";
import UserHistory from "../user-history/user-history.component";
const { Search } = Input;
const operations = (
  <Search
  className="search-request"
    style={{
      marginBottom: 8,
    }}
    placeholder="Search"
  />
);
const OperationsSlot = {
  right: (
    <Search
      style={{
        marginBottom: 8,
      }}
      placeholder="Search"
    />
  ),
};
const options = ["left", "right"];
const Requestuser = () => {
  const onChange = (e) => {
    console.log("e " + e.target.value);
  };
  return (
    <>
      <span className="role-info">Requests</span>
      <Row className="parent-request-user">
        <Col span={24} className="table-request">
          <Form>
            <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
              <Tabs.TabPane tab="Pending" key="1">
                <Col span={24} className="tab_about">
                  <UserPending />
                </Col>
              </Tabs.TabPane>
              <Tabs.TabPane tab="History" key="2">
                <Row>
                  <Col span={24} className="tab_about">
                    <UserHistory />
                  </Col>
                </Row>
              </Tabs.TabPane>
            </Tabs>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Requestuser;
