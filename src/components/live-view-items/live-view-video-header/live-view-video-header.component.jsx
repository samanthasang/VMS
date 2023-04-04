import React from "react";
import { useDispatch } from "react-redux";
import { Menu, Input } from "antd";
import { Close, Snapshot } from "../../../assets/Icons/JSXs/index";
import {
  HideHeader,
  RemoveVideo,
  SetHeader,
} from "../../../redux/liveView_redux/liveViewAction";
import "./live-view-video-header.styles.scss";

const LiveViewVideoHeader = ({
  id,
  screenShot,
  setLottieOffChange,
  captureSnapshot,
}) => {
  const dispatch = useDispatch();

  // clear the stream inforation from the state in redux
  const handleClearInput = (event) => {
    const id = event.target.id;
    dispatch(RemoveVideo(id));
    setLottieOffChange(false);
  };
  return (
    <Menu
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "30px",
        direction: "rtl",
        border: "none",
        background: "#5F687D",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        zIndex: "5",
      }}
      mode="horizontal"
      // show header stream
      onMouseEnter={() => {
        dispatch(SetHeader(id));
      }}
      // hide header stream
      onMouseLeave={() => {
        dispatch(HideHeader(id));
      }}
    >
      {/* clear the infrmation for the stream & anable input for getting the stream url */}
      <Menu.Item
        style={{
          position: "relative!important",
          padding: "0 0",
        }}
        key="Close"
      >
        <Input
          style={{
            width: "30px",
            height: "30px",
            background: "#000",
            border: "none",
            padding: "4px 9px",
            zIndex: "1",
            opacity: "0",
            cursor: "pointer",
          }}
          id={id}
          type="button"
          onClick={handleClearInput}
        ></Input>
        <Close
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
          }}
        />
      </Menu.Item>
      {/* <Menu.Item
        style={{
          position: "relative!important",
          padding: "0 0",
        }}
        key="Sound"
      >
        <Input
          style={{
            width: "30px",
            height: "30px",
            background: "#000",
            border: "none",
            padding: "4px 9px",
            zIndex: "1",
            opacity: "0",
            cursor: "pointer",
          }}
          id={id}
          type="button"
          onClick={handleClearInput}
        ></Input>
        <Volume0
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
          }}
        />
      </Menu.Item> */}

      {/* anble just for stream & disable when failing animation is showing */}
      {/* screen shot button for stream */}
      {screenShot && (
        <Menu.Item
          style={{
            position: "relative!important",
            padding: "0 0",
          }}
          key="Snapshot"
        >
          <Input
            style={{
              width: "30px",
              height: "30px",
              background: "#000",
              border: "none",
              padding: "4px 9px",
              zIndex: "1",
              opacity: "0",
              cursor: "pointer",
            }}
            id={id}
            type="button"
            onClick={captureSnapshot}
          ></Input>
          <Snapshot
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
            }}
          />
        </Menu.Item>
      )}
      {/* <Menu.Item
        style={{
          position: "relative!important",
          padding: "0 0",
        }}
        key="VideoCamera"
      >
        <Input
          style={{
            width: "30px",
            height: "30px",
            background: "#000",
            border: "none",
            padding: "4px 9px",
            zIndex: "1",
            opacity: "0",
            cursor: "pointer",
          }}
          id={id}
          type="button"
          onClick={handleClearInput}
        ></Input>
        <VideoCamera
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
          }}
        />
      </Menu.Item> */}
    </Menu>
  );
};

export default LiveViewVideoHeader;
