import React from "react";
import { useDispatch } from "react-redux";
import { Menu, Input } from "antd";
import { Close, Snapshot } from "../../../assets/Icons/JSXs/index";
import "./play-back-video-header.styles.scss";
import {
  LoadingErrorPlayBack,
  RemoveVideoPlayBack,
  SetHeaderPlayBack,
  SetHideHeaderPlayBack,
} from "../../../redux/playback_redux/playbackAction";

const PlayBackVideoHeader = ({ id, addBookmark, screenShot }) => {
  const dispatch = useDispatch();

  const handleClearInput = () => {
    console.log("clear Input");
    dispatch(RemoveVideoPlayBack(1));
    dispatch(LoadingErrorPlayBack(false));
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
      onMouseEnter={() => {
        dispatch(SetHeaderPlayBack(id));
      }}
      onMouseLeave={() => {
        dispatch(SetHideHeaderPlayBack(id));
      }}
    >
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
            onClick={addBookmark}
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

export default PlayBackVideoHeader;
