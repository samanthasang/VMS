import React, { useCallback, useEffect, useState } from "react";

import { Button, Menu, Col, Row, Space, Dropdown } from "antd";

import {
  W16,
  W4,
  W9,
  W5,
  W6,
  W7,
  W8,
  W15,
  W17,
  FullScreen,
  CustomSplit,
} from "../../../assets/Icons/JSXs";
import { DeropDownIcon } from "../../../assets/DropDown";
import ModalVideo from "../../generals-items/modal/modal.component";

import "./liveview.styles.scss";
import {
  Windows,
  Windows_4,
  Windows_9,
  Windows_16,
  Windows_25,
  Windows_36,
  Windows_49,
  Windows_64,
  Windows_152,
  Windows_153,
  Windows_172,
  Windows_175,
} from "./live-view-windows";
import VideoCard from "../../generals-items/video-cart/videocart";

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

const LiveView = ({ handleFullscreenn }) => {
  const [colCountKeys, setColCountKeys] = useState(Windows_4);
  const [colCountKeys2, setColCountKeys2] = useState();
  const [colCountKey, setColCountKey] = useState(Windows[0]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [custom, setCuostom] = useState(false);
  const srcC =
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4";

  const showModal = () => {
    // setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleClick = (event) => {
    console.log(event.target.id);
    console.log(event.detail);
    if (event.detail === 2) {
      console.log("double click");

      setVisible(true);
    }
  };
  const handle_4 = () => {
    setCuostom(false);
    setColCountKeys(Windows_4);
    setColCountKey(Windows[0]);
  };
  const handle_9 = () => {
    setCuostom(false);
    setColCountKeys(Windows_9);
    setColCountKey(Windows[1]);
  };
  const handle_16 = () => {
    setCuostom(false);
    setColCountKeys(Windows_16);
    setColCountKey(Windows[2]);
  };
  const handle_25 = () => {
    setCuostom(false);
    setColCountKeys(Windows_25);
    setColCountKey(Windows[3]);
  };
  const handle_36 = () => {
    setCuostom(false);
    setColCountKeys(Windows_36);
    setColCountKey(Windows[4]);
  };
  const handle_49 = () => {
    setCuostom(false);
    setColCountKeys(Windows_49);
    setColCountKey(Windows[5]);
  };
  const handle_64 = () => {
    setCuostom(false);
    setColCountKeys(Windows_64);
    setColCountKey(Windows[6]);
  };
  const handle_15 = () => {
    setCuostom(true);
    setColCountKeys(Windows_152);
    setColCountKeys2(Windows_153);
    setColCountKey(Windows[7]);
  };
  const handle_17 = () => {
    setCuostom(true);
    setColCountKeys(Windows_172);
    setColCountKeys2(Windows_175);
    setColCountKey(Windows[8]);
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

  const onClick = ({ key }) => {
    if (key === "1") {
      console.log(key);
      handle_25();
    }
    if (key === "2") {
      console.log(key);
      handle_36();
    }
    if (key === "3") {
      console.log(key);
      handle_49();
    }
    if (key === "4") {
      console.log(key);
      handle_64();
    }
    if (key === "5") {
      console.log(key);
      handle_15();
    }
    if (key === "6") {
      console.log(key);
      handle_17();
    }
  };

  const menuDrop = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: "1",
          icon: <W5 />,
        },
        {
          key: "2",
          icon: <W6 />,
        },
        {
          key: "3",
          icon: <W7 />,
        },
        {
          key: "4",
          icon: <W8 />,
        },
        {
          key: "5",
          icon: <W15 />,
        },
        {
          key: "6",
          icon: <W17 />,
        },
      ]}
    />
  );

  const handleChangeInput = (event) => {
    const id = event.target.id;
    const src = event.target.value;
    let result = src.substring(0, 4);
    if (result === "http") {
      setColCountKeys(
        colCountKeys.map((item) => {
          if (item.id === id) {
            return { ...item, src };
          } else {
            return item;
          }
        })
      );
    } else {
      event.preventDefault();
    }
  };
  const handleClearInput = (event) => {
    const id = event.target.id;
    const src = event.target.value;
    let result = src.substring(0, 4);
    if (result === "http") {
      setColCountKeys(
        colCountKeys.map((item) => {
          if (item.id === id) {
            return { ...item, src };
          } else {
            return item;
          }
        })
      );
    } else {
      event.preventDefault();
    }
  };

  return (
    <>
      <Row className="live_view_container">
        <Col span={24} style={{ height: "calc(100% - 3rem)" }}>
          <Row style={{ height: "100%" }}>
            <Col span={24} style={{ height: "100%" }}>
              <Row style={{ height: "100%" }}>
                {custom ? (
                  <>
                    <Col
                      key={123}
                      span={colCountKey.span}
                      style={{
                        display: "inline-block",
                        border: "1px solid #000",
                        background: "#515253",
                        height: `${colCountKey.height}`,
                        float: "left",
                      }}
                    >
                      {/* <VideoCard StreamLink={src} handleClick={handleClick} /> */}

                      <video
                        id={123}
                        className="widown"
                        autoPlay
                        muted
                        playsInline
                        loop
                        onClick={handleClick}
                      >
                        <source src={srcC} type="video/mp4" />
                      </video>
                    </Col>
                    <Row
                      style={{
                        float: "right",
                        height: `${colCountKey.height1}`,
                        width: `${colCountKey.width1}`,
                      }}
                    >
                      {colCountKeys.map(
                        ({ id, window, height, src, heightcol1 }) => (
                          <Col
                            span={colCountKey.span1}
                            style={{
                              display: "inline-block",
                              border: "1px solid #000",
                              background: "#515253",
                              height: `${colCountKey.heightcol1}`,
                            }}
                          >
                            {/* <VideoCard StreamLink={src} handleClick={handleClick} /> */}
                            <video
                              id={id}
                              className="widown"
                              autoPlay
                              muted
                              playsInline
                              loop
                              onClick={handleClick}
                            >
                              <source src={src} type="video/mp4" />
                            </video>

                            <ModalVideo
                              src={src}
                              id={id}
                              visible={visible}
                              handleOk={handleOk}
                              handleCancel={handleCancel}
                              loading={loading}
                            />
                          </Col>
                        )
                      )}
                    </Row>
                    <Row
                      style={{
                        float: "right",
                        height: `${colCountKey.height2}`,
                        width: `${colCountKey.width2}`,
                      }}
                    >
                      {colCountKeys2.map(({ id, window, height, src }) => (
                        <Col
                          span={colCountKey.span2}
                          style={{
                            display: "inline-block",
                            border: "1px solid #000",
                            background: "#515253",
                            height: `${colCountKey.heightcol2}`,
                          }}
                        >
                          {/* <VideoCard StreamLink={src} handleClick={handleClick} /> */}
                          <video
                            id={id}
                            className="widown"
                            autoPlay
                            muted
                            playsInline
                            loop
                            onClick={handleClick}
                          >
                            <source src={src} type="video/mp4" />
                          </video>
                          <ModalVideo
                            src={src}
                            id={id}
                            visible={visible}
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                            loading={loading}
                          />
                        </Col>
                      ))}
                    </Row>
                  </>
                ) : (
                  colCountKeys.map(({ id, window, height, src }) => (
                    <Col
                      key={id}
                      span={colCountKey.span}
                      style={{
                        display: "inline-block",
                        border: "1px solid #000",
                        background: "#515253",
                        height: colCountKey.height,
                      }}
                    >
                      {/* <VideoCard StreamLink={src} handleClick={handleClick} /> */}
                      {src !== "" ? (
                        <video
                          id={id}
                          className="widown"
                          autoPlay
                          muted
                          playsInline
                          loop
                          onClick={handleClick}
                        >
                          <source src={src} type="video/mp4" />
                        </video>
                      ) : (
                        <input
                          id={id}
                          type="url"
                          onChange={handleChangeInput}
                        ></input>
                      )}

                      <div>
                        <Button
                          type="primary"
                          size="small"
                        />
                      </div>
                      <ModalVideo
                        src={src}
                        id={id}
                        visible={visible}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                        loading={loading}
                      />
                    </Col>
                  ))
                )}
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
              <Button
                shape="circle"
                icon={<FullScreen />}
                size="large"
                onClick={handleFullscreenn}
              />
              {/* <Button shape="circle" icon={<CustomSplit />} size="large" /> */}

              <Dropdown
                overlay={menuDrop}
                shape="circle"
                icon={<CustomSplit />}
                size="large"
              >
                <Button onClick={(e) => e.preventDefault()}>
                  <Space
                    style={{
                      display: "table",
                      margin: "0px 0 -9px 0",
                    }}
                  >
                    <CustomSplit style={{ height: "18px", width: "18px" }} />
                  </Space>
                </Button>
              </Dropdown>
              <Button
                shape="circle"
                icon={<W16 />}
                size="large"
                onClick={handle_16}
              />
              <Button
                shape="circle"
                icon={<W9 />}
                size="large"
                onClick={handle_9}
              />
              <Button
                shape="circle"
                icon={<W4 />}
                size="large"
                onClick={handle_4}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LiveView;
