import { Checkbox, Col, Input, Radio, Row } from "antd";
import React, { useState } from "react";
import "./localPalyBack-sidebar.styles.scss";
import {
  List,
  View,
} from "../../../assets/Icons/JSXs/index";
import { CameraChecked } from "../../../redux/playback_redux/playbackAction";
import { useDispatch } from "react-redux";
import {  Card } from "antd";
const { Search } = Input;

const LocalPalyBack = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log("e " + e.target.value);
  };


  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
    // setCameraChecked([...cameraChecked, checkedKeys]);
    dispatch(CameraChecked(`[${checkedKeys}]`));
  };
  const [show_img, setShowImg] = useState("show_img");

  const onChange3 = ({ target: { value } }) => {
    console.log("radio3 checked", value);
    setShowImg(value);
  };
  const options = [
    {
      value: "show_img",
      label: <View width="1.25rem" height="1.25rem" />,
      icon: <View width="1.25rem" height="1.25rem" />,
    },
    {
      label: (
        <List width="1.25rem" height="1.25rem" />
      ),
      value: "hide_img",
    },
  ];
  return (
    <Col span={24} className="local_Play_back">
      <Search
        style={{
          marginBottom: 18,
        }}
        placeholder="Search"
        onChange={onChange}
      />{" "}
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={show_img}
        optionType="button"
      />
      {/* <View width="1.25rem" height="1.25rem" />
      <List width="1.25rem" height="1.25rem" style={{ marginLeft: "10px" }} /> */}
      <Row>
        <Col
          span={24}
          className={"card_container " + `${show_img}`}
          style={{ marginTop: "8px" }}
        >
          <Card
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Checkbox style={{ color: "#e1e5eb" }}>Cam1</Checkbox>
            <span
              style={{ display: "block", marginLeft: "24px", color: "#e1e5eb" }}
            >
              5.73 MB
            </span>
            <span
              style={{
                marginRight: "16px",
                marginLeft: "24px",
                color: "#e1e5eb",
              }}
            >
              2022/11/14
            </span>
            <span style={{ color: "#e1e5eb" }}>12:39:58</span>
            <span
              style={{ display: "block", marginLeft: "24px", color: "#e1e5eb" }}
            >
              00:00:12
            </span>
          </Card>
          <Card
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Checkbox style={{ color: "#e1e5eb" }}>Cam1</Checkbox>
            <span
              style={{ display: "block", marginLeft: "24px", color: "#e1e5eb" }}
            >
              5.73 MB
            </span>
            <span
              style={{
                marginRight: "16px",
                marginLeft: "24px",
                color: "#e1e5eb",
              }}
            >
              2022/11/14
            </span>
            <span style={{ color: "#e1e5eb" }}>12:39:58</span>
            <span
              style={{ display: "block", marginLeft: "24px", color: "#e1e5eb" }}
            >
              00:00:12
            </span>
          </Card>
          <Card
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Checkbox style={{ color: "#e1e5eb" }}>Cam1</Checkbox>
            <span
              style={{ display: "block", marginLeft: "24px", color: "#e1e5eb" }}
            >
              5.73 MB
            </span>
            <span
              style={{
                marginRight: "16px",
                marginLeft: "24px",
                color: "#e1e5eb",
              }}
            >
              2022/11/14
            </span>
            <span style={{ color: "#e1e5eb" }}>12:39:58</span>
            <span
              style={{ display: "block", marginLeft: "24px", color: "#e1e5eb" }}
            >
              00:00:12
            </span>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default LocalPalyBack;
