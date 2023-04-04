import React from "react";
import "./liveview-footer-panel.styles.scss";
import { Button, Menu, Col, Space, Dropdown } from "antd";
import {
  W16,
  W4,
  W9,
  FullScreen,
  CustomSplit,
} from "../../../assets/Icons/JSXs/index";
import { all_Windows } from "../liveview/live-view-windows";
import { useDispatch } from "react-redux";
import { SetWindow } from "../../../redux/liveView_redux/liveViewAction";
import { useSelector } from "react-redux";
const LiveViewFooterPanel = ({ handleFullscreen }) => {
  const dispatch = useDispatch();

  // getting the state for 4 windows from redux
  const windows_4 = useSelector((state) => state.liveView.Windows_4);
  // getting the state for 9 windows from redux
  const windows_9 = useSelector((state) => state.liveView.Windows_9);
  // getting the state for 16 windows from redux
  const windows_16 = useSelector((state) => state.liveView.Windows_16);
  // getting the state for 24 windows from redux
  const windows_25 = useSelector((state) => state.liveView.Windows_25);
  // getting the state for 36 windows from redux
  const windows_36 = useSelector((state) => state.liveView.Windows_36);
  // getting the state for 48 windows from redux
  const windows_49 = useSelector((state) => state.liveView.Windows_49);
  // getting the state for 64 windows from redux
  const windows_64 = useSelector((state) => state.liveView.Windows_64);
  // getting the state for main video for 5 windows from redux
  const windows_151 = useSelector((state) => state.liveView.Windows_151);
  // getting the state for sun video for 5 windows from redux
  const windows_152 = useSelector((state) => state.liveView.Windows_152);
  // getting the state for sun video for 5 windows from redux
  const windows_153 = useSelector((state) => state.liveView.Windows_153);
  // getting the state for main video for 7 windows from redux
  const windows_171 = useSelector((state) => state.liveView.Windows_171);
  // getting the state for sun video for 7 windows from redux
  const windows_172 = useSelector((state) => state.liveView.Windows_172);
  // getting the state for sun video for 7 windows from redux
  const windows_175 = useSelector((state) => state.liveView.Windows_175);

  // switch to 4 windows
  const handle_4 = () => {
    console.log(windows_4);
    dispatch(
      SetWindow({
        all_Windows: all_Windows[0],
        Windows_video: windows_4,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to 9 windows
  const handle_9 = () => {
    console.log(windows_9);
    dispatch(
      SetWindow({
        all_Windows: all_Windows[1],
        Windows_video: windows_9,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to 16 windows
  const handle_16 = () => {
    console.log(windows_16);
    dispatch(
      SetWindow({
        all_Windows: all_Windows[2],
        Windows_video: windows_16,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to 24 windows
  const handle_25 = () => {
    dispatch(
      SetWindow({
        all_Windows: all_Windows[3],
        Windows_video: windows_25,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to 36 windows
  const handle_36 = () => {
    dispatch(
      SetWindow({
        all_Windows: all_Windows[4],
        Windows_video: windows_36,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to 48 windows
  const handle_49 = () => {
    dispatch(
      SetWindow({
        all_Windows: all_Windows[5],
        Windows_video: windows_49,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to 64 windows
  const handle_64 = () => {
    dispatch(
      SetWindow({
        all_Windows: all_Windows[6],
        Windows_video: windows_64,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: false,
      })
    );
  };
  // switch to  5windows
  const handle_15 = () => {
    dispatch(
      SetWindow({
        all_Windows: all_Windows[7],
        Windows_video: windows_151,
        Windows_single_video: windows_152,
        Windows_single_video1: windows_153,
        customView: true,
      })
    );
  };
  // switch to 7 windows
  const handle_17 = () => {
    dispatch(
      SetWindow({
        all_Windows: all_Windows[8],
        Windows_video: windows_171,
        Windows_single_video: windows_172,
        Windows_single_video1: windows_175,
        customView: true,
      })
    );
  };

  // getting the data from menu for choosing 24 & 48 & 64 & 5 & 7 windows
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

  // menu for choosing 24 & 48 & 64 & 5 & 7 windows
  const menuDrop = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: "111",
          icon: "Custom Split",
        },
        {
          key: "1",
          icon: "",
        },
        {
          key: "2",
          icon: "",
        },
        {
          key: "3",
          icon: "",
        },
        {
          key: "4",
          icon: "",
        },
        {
          key: "5",
          icon: "",
        },
        {
          key: "6",
          icon: "",
        },
      ]}
    />
  );

  return (
    <Col span={12} className="footer_icon_live_view">
      {/* fullscreen the video windows */}
      <Button icon={<FullScreen />} onClick={handleFullscreen} />

      {/* drop down for choosing 24 & 48 & 64 & 5 & 7 windows */}
      <Dropdown
        trigger={["click"]}
        overlay={menuDrop}
        icon={<CustomSplit />}
        overlayClassName="custom_drop_down"
      >
        <Button onClick={(e) => e.preventDefault()}>
          <Space className="drop_footer_costum_view">
            <CustomSplit
              style={{ height: "18px!important", width: "18px!important" }}
            />
          </Space>
        </Button>
      </Dropdown>
      {/* button for choosing 16 windows */}
      <Button icon={<W16 />} onClick={handle_16} />
      {/* button for choosing 9 windows */}
      <Button icon={<W9 />} onClick={handle_9} />
      {/* button for choosing 4 windows */}
      <Button icon={<W4 />} onClick={handle_4} />
    </Col>
  );
};

export default LiveViewFooterPanel;
