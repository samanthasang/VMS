import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PlayerBehaviorChange } from "../../../../redux/PlayerBehavior/PlayerBehaviorAction";
import VolumeOverflow from "./VolumeOverflow/VolumeOverflow";
import { Dropdown, Modal, DatePicker, Select } from "antd";

import {
  Play,
  APause,
  Stop,
  FrameByFrameBackward,
  FrameByFrameForward,
  Volume0,
  Volume1,
  Volume2,
  Volume3,
  Camera,
  Svg1X,
  Svg2X,
  Svg4X,
  Svg8X,
  Svg1D2X,
  Svg1D4X,
  Svg1D8X,
  Import4,
  TimeClip,
  W1,
  W4
} from "../../../../assets/Icons/JSXs/index";

import "antd/dist/antd.css";

import "./Controller.css";
import PlaybackSpeedOverflow from "./PlaybackSpeedOverflow/PlaybackSpeedOverflow";
import captureVideoFrame from "./CaptureVideoFrame/CaptureVideoFrame";
import { SelectedVideoPlayerAndPlayerUrlsChange } from "../../../../redux/SelectedVideoPlayerAndPlayerUrls/SelectedVideoPlayerAndPlayerUrlsAction";

export default function Controller(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  const SelectedVideoPlayerAndPlayerUrlsState = useSelector(
    (state) => state.SelectedVideoPlayerAndPlayerUrlsState
  );
  const playerRefObjectOnController = props.playerRefObjectOnController;
  const { Option } = Select;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const volumeIcon = () => {
    if (PlayerBehaviorState.volume <= 0.33) {
      console.log("V1");
      return <Volume1 width="2rem" height="2rem" />;
    }
    if (PlayerBehaviorState.volume <= 0.66) {
      console.log("V2");
      return <Volume2 width="2rem" height="2rem" />;
    }
    if (PlayerBehaviorState.volume <= 1) {
      console.log("V3");
      return <Volume3 width="2rem" height="2rem" />;
    }
  };

  const PbSpeedIcon = () => {
    switch (PlayerBehaviorState.playbackRate) {
      case 1: {
        return <Svg1X width="2rem" height="2rem" />;
        break;
      }
      case 2:
        return <Svg2X width="2rem" height="2rem" />;
        break;
      case 4:
        return <Svg4X width="2rem" height="2rem" />;
        break;
      case 8:
        return <Svg8X width="2rem" height="2rem" />;
        break;
      case 1 / 2:
        return <Svg1D2X width="2rem" height="2rem" />;
        break;
      case 1 / 4:
        return <Svg1D4X width="2rem" height="2rem" />;
        break;
      case 1 / 8:
        return <Svg1D8X width="2rem" height="2rem" />;
        break;

      default:
        return "PB Speed 0";
    }
  };

  const handleKeyPress = useCallback((event) => {
    console.log(`Key pressed: ${event.key} &  ${event.which}`);
    console.log(`Key pressed: ${PlayerBehaviorState.volume} `);

    if (event.which === 38) {
      console.log("ArrowUp");
      dispatch(
        PlayerBehaviorChange({
          ...PlayerBehaviorState,
          volume: PlayerBehaviorState.volume + 0.01
        })
      );
      console.log("ArrowUp2");
    }

    // switch (event.which) {
    //   case 37:
    //     {
    //       console.log("ArrowLeft");
    //       dispatch(
    //         PlayerBehaviorChange({
    //           ...PlayerBehaviorState,
    //           playing: false
    //         })
    //       );
    //       playerRefObjectOnController.current.seekTo(
    //         playerRefObjectOnController.current.getCurrentTime() - 0.03125 * 10
    //       );
    //     }

    //     break;
    //   case 38:
    //     {
    //       console.log("ArrowUp");
    //       dispatch(
    //         PlayerBehaviorChange({
    //           ...PlayerBehaviorState,
    //           volume: PlayerBehaviorState.volume + 0.01
    //         })
    //       );
    //       console.log("ArrowUp2");
    //     }
    //     break;
    //   case 39:
    //     {
    //       console.log("ArrowRight");
    //       playerRefObjectOnController.current.seekTo(
    //         playerRefObjectOnController.current.getCurrentTime() + 0.03125
    //       );
    //     }

    //     break;
    //   case 40:
    //     {
    //       console.log("ArrowDown");
    //       dispatch(
    //         PlayerBehaviorChange({
    //           ...PlayerBehaviorState,
    //           volume: PlayerBehaviorState.volume - 0.01
    //         })
    //       );
    //       console.log("ArrowDown2");
    //     }
    //     break;

    //   default:
    //     break;
    // }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="controller">
      <div className="controller_cut-download">
        {" "}
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            {
              var frame = captureVideoFrame(
                playerRefObjectOnController.current.getInternalPlayer(),
                "png"
              );

              const img = document.getElementById("my-screenshot");
              img.setAttribute("src", frame.dataUri);

              const formData = new FormData();
              console.log("DDDF");
              formData.append(
                "file",
                frame.blob,
                `my-screenshot.${frame.format}`
              );

              var anchor = document.createElement("a");
              anchor.href = frame.dataUri;
              anchor.download = "IMAGE.PNG";
              anchor.click();

              axios
                .post("/user", {
                  formData
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          }}
        >
          <Camera width="2rem" height="2rem" />
        </span>
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={showModal}
        >
          <TimeClip width="2rem" height="2rem" />
        </span>
        <Modal
          className="cut-modal"
          style={{
            // backgroundColor: "#5F687D",
            backgroundColor: "transparent",
            color: "#F0F2F5"
          }}
          bodyStyle={{
            backgroundColor: "#2E333D"
          }}
          title="Export"
          okText={
            <>
              {" "}
              Export <Import4 />
            </>
          }
          // icon={<Svg1X/>}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0.5rem 0"
            }}
          >
            <span>Start: </span>
            <DatePicker
              CSSProperties={{ backgroundColor: "red" }}
              showTime
              onChange={(e) => console.log(e)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0.5rem 0"
            }}
          >
            <span>End: </span>
            <DatePicker showTime onChange={(e) => console.log(e)} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0.5rem 0"
            }}
          >
            <span>Format: </span>{" "}
            <Select
              defaultValue="lucy"
              style={{
                width: 120
              }}
              onChange={(e) => console.log(e)}
            >
              <Option value="jack">MP4</Option>
              <Option value="lucy">AVI</Option>
              <Option value="disabled" disabled>
                AVCHD
              </Option>
              <Option value="Yiminghe">MKV</Option>
            </Select>
          </div>
        </Modal>
      </div>
      <div className="controller_player-actions">
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            {
              dispatch(
                PlayerBehaviorChange({
                  ...PlayerBehaviorState,
                  playing: false
                })
              );
              playerRefObjectOnController.current.seekTo(
                playerRefObjectOnController.current.getCurrentTime() -
                  0.03125 * 10
              );
            }
          }}
        >
          <FrameByFrameBackward width="100%" height="100%" />
        </span>
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            dispatch(
              PlayerBehaviorChange({
                ...PlayerBehaviorState,
                playing: !PlayerBehaviorState.playing
              })
            );
          }}
        >
          {!PlayerBehaviorState.playing ? (
            <Play width="100%" height="100%" />
          ) : (
            <APause width="100%" height="100%" />
          )}
        </span>
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            dispatch(PlayerBehaviorChange({ ...PlayerBehaviorState, url: "" }));
          }}
        >
          <Stop width="100%" height="100%" />
        </span>
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            // dispatch(
            //   PlayerBehaviorChange({
            //     ...PlayerBehaviorState,
            //     playing: false,
            //   })
            // )

            playerRefObjectOnController.current.seekTo(
              playerRefObjectOnController.current.getCurrentTime() + 0.03125
            );
          }}
        >
          <FrameByFrameForward width="100%" height="100%" />
        </span>
        <Dropdown overlay={<PlaybackSpeedOverflow />} placement="top">
          <span
            style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
            // style={{ margin: "0 0.5rem", color: "#EFEFEF", fontSize: "1.5rem" }}
            onClick={() => {
              dispatch(
                PlayerBehaviorChange({
                  ...PlayerBehaviorState,
                  playbackRate: 1
                })
              );
            }}
          >
            {PbSpeedIcon()}
          </span>
        </Dropdown>

        <Dropdown overlay={<VolumeOverflow />} placement="top">
          <span
            style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
            className="ant-dropdown-open"
            onClick={() => {
              dispatch(
                PlayerBehaviorChange({
                  ...PlayerBehaviorState,
                  muted: !PlayerBehaviorState.muted
                })
              );
            }}
          >
            {PlayerBehaviorState.muted ? (
              <Volume0 width="100%" height="100%" />
            ) : (
              volumeIcon()
            )}
          </span>
        </Dropdown>

        <img id="my-screenshot" />
      </div>
      <div className="controller_windows-select">
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            dispatch(
              SelectedVideoPlayerAndPlayerUrlsChange({
                ...SelectedVideoPlayerAndPlayerUrlsState,
                SelectedPlayer: 1
              })
            );
          }}
        >
          <W1 width="100%" height="100%" />
        </span>
        <span
          style={{ margin: "0 0.5rem", width: "2rem", height: "2rem" }}
          onClick={() => {
            dispatch(
              SelectedVideoPlayerAndPlayerUrlsChange({
                ...SelectedVideoPlayerAndPlayerUrlsState,
                SelectedPlayer: 4
              })
            );
          }}
        >
          <W4 width="100%" height="100%" />
        </span>
      </div>
    </div>
  );
}

// <>
// <div onClick={() => console.log(playerRefObjectOnController)}>
//   Controller
// </div>
// <div onClick={() => playerRefObjectOnController.current.seekTo(61, 'seconds')}>seekToxic</div>
// <div onClick={() => console.log(playerRefObjectOnController.current.getDuration() )}>seekToxic</div>
// </>
