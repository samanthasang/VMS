import { Col, Row, Tabs, Input, Form, Button } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import InputForm from "../../form-items/inputform/inputform.component";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
import SubminBTN from "../../form-items/submitbtn/submitbtn.component";
import TextareaForm from "../../form-items/textarea/formtextarea.component";
import CheckboxAddrole from "../checkbox-addrole/checkbox-addrole.component";
import PreviewTabs from "../preview-tabs/preview-tabs.component";
import { useSelector } from "react-redux";

import "./addRole.styles.scss";
const { TextArea } = Input;
const Addrole = () => {
  const idForComponent = useSelector((state) => state.user.componentusers);
  const [menurights, SetMenurights] = useState([
    {
      value: 1,
      key: 1,
      title: "Live Veiw",
    },
    {
      value: 1,
      key: 2,
      title: "PlayBack",
    },
    {
      value: 1,
      key: 3,
      title: "Devices",
    },
    {
      value: 1,
      key: 4,
      title: "User",
    },
  ]);
  useEffect(() => {
    if (idForComponent == 1) {
      setDisabledInput(true);
      setValueInput({ name: "Admin", remark: "Admin Role" });
    } else {
      setDisabledInput(false);
      setValueInput({ name: "", remark: "" });
    }
    // {idForComponent===3?setDefaultValueInput("Admin"):setDefaultValueInput("")}
    // {idForComponent===3?setDisabledInput(true):setDisabledInput(false)}
  }, [idForComponent]);
  const [tabPosition, setTabPosition] = useState("left");
  const [disabledInput, setDisabledInput] = useState(false);
  const [ValueInput, setValueInput] = useState({
    name: "",
    remark: "",
  });

  const onChange = (key) => {
    console.log(key);
    findHeight();
  };
  const findHeight = () => {
    
      var pageHeight = 0;
  
      function findHighestNode(nodesList) {
          for (var i = nodesList.length - 1; i >= 0; i--) {
              if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
                  var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
                  pageHeight = Math.max(elHeight, pageHeight);
              }
              if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
          }
      }
  
      findHighestNode(document.documentElement.childNodes);
  };
  

  const [tapShowByCHeckbox, setTapShowByCHeckbox] = useState(false);
  const [tapShowByCHeckbox1, setTapShowByCHeckbox1] = useState(false);
  return (
    <>
      {idForComponent == 1 ? (
        <span className="role-info">Role Info</span>
      ) : (
        <span className="role-info">Add Role</span>
      )}

      <Row className="parent-add-role">
        <Col span={24}>
          <Form>
            <Row>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "26px",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Role Name:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "40px", marginRight: "8px" }}>
                <InputForm
                  disabled={disabledInput}
                  valueInput={ValueInput.name}
                  type="text"
                  placeholder="Role"
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: "20px" }}>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",

                    textAlign: "right",
                  }}
                >
                  Remark:
                </span>
              </Col>
              <Col span={19}>
                <TextArea disabled={disabledInput} value={ValueInput.remark} />
              </Col>
            </Row>
            <Row style={{ paddingTop: "20px" }}>
              <Col span={3} style={{ textAlign: "right", marginRight: "16px" }}>
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Menu Rights:
                </span>
              </Col>
              <Col span={20}>
                <CheckboxAddrole disabled={disabledInput} />
              </Col>
            </Row>
            <Row style={{ paddingTop: "20px" }}>
              <Col span={3} style={{ marginRight: "16px", textAlign: "right" }}>
                <span style={{ color: "#fff", width: "128px" }}>
                  Channel Rights:
                </span>
              </Col>
              <Col span={8}>
                <Tabs
                  style={{
                    paddingLeft: "0px !important",
                  }}
                  tabPosition={"left"}
                  defaultActiveKey="1"
                  onChange={onChange}
                  className="sidebar-info"
                  items={[
                    {
                      label: `Preview`,
                      id: 1,
                      key: "1",
                      children: <PreviewTabs />,
                    },
                    {
                      label: `Playback`,
                      id: 2,
                      key: "2",
                      children: <PreviewTabs />,
                    },
                    {
                      label: `Export`,
                      id: 3,
                      key: "3",
                      children: <PreviewTabs />,
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "20px",
                position: "absolute",
                right: "26px",
                bottom: "25px",
              }}
            >
              {idForComponent == 1 ? (
                <Col span={23} className="row_btn_user">
                  <Button
                    className="header_btn btn_next"
                    type="primary"
                    style={{
                      marginLeft: "8px",

                      display: "inline-flex !important",
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              ) : (
                <Col span={23} className="row_btn_user">
                  <Button
                    className="header_btn btn_pre cancel_btn"
                    type="primary"
                    style={{
                      marginLeft: "8px",
                      display: "inline-flex !important",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="header_btn btn_next"
                    type="primary"
                    style={{
                      marginLeft: "8px",
                      position: "absolute",
    right: "100%",
                      display: "inline-flex !important",
                    }}
                  >
                    Save
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Addrole;
