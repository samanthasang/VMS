import React, { useCallback, useEffect } from "react";

import { Button, Menu, Col, Row, Upload, Form, Dropdown, Space } from "antd";

import {
  W16,
  W4,
  W9,
  FullScreen,
  CustomSplit,
} from "../../../assets/Icons/JSXs";
import { DeropDownIcon } from "../../../assets/DropDown";
import "./liveview.styles.scss";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);
const LiveView = () => {
  // const [colCountKey, setColCountKey] = useState([16, 8, 8, 8, 8, 8]);

  const handleClick = (event) => {
    console.log(event.detail);
    if (event.detail === 2) {
      console.log("double click");
    }
  };
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      //Do whatever when esc is pressed
      console.log("ESC");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return (
    <>
      <Row className="live_view_container">
        <Col span={24}>
          <Row>
            <Col span={24} style={{ height: "calc(100vh - 6rem)" }}>
              <Row style={{ height: "50%" }}>
                <Col
                  span={12}
                  onClick={handleClick}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `100%`,
                  }}
                >
                  <video
                    autoPlay
                    muted
                    playsinline
                    loop
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Col>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `100%`,
                  }}
                >
                  <video
                    autoPlay
                    muted
                    playsinline
                    loop
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Col>
              </Row>
              <Row style={{ height: "50%" }}>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `100%`,
                  }}
                >
                  <video
                    autoPlay
                    muted
                    playsinline
                    loop
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                      type="video/mp4"
                    />
                  </video>
                  {/* <video
                    src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                    autoPlay
                  /> */}
                </Col>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `100%`,
                  }}
                >
                  <video
                    autoPlay
                    muted
                    playsinline
                    loop
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ height: "3rem", background: "#14161A" }}>
          <Row>
            <Col span={12}>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="top"
                className="footer_drop_live_view"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Original
                    <DeropDownIcon style={{ lineHeight: 0 }} />
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col span={12} className="footer_icon_live_view">
              <Button shape="circle" icon={<FullScreen />} size="large" />
              <Button shape="circle" icon={<CustomSplit />} size="large" />
              <Button shape="circle" icon={<W16 />} size="large" />
              <Button shape="circle" icon={<W9 />} size="large" />
              <Button shape="circle" icon={<W4 />} size="large" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LiveView;
