// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { PlayerBehaviorChange } from "../../../../redux/PlayerBehavior/PlayerBehaviorAction";
// import VolumeOverflow from "./VolumeOverflow/VolumeOverflow";
// import { Dropdown } from "antd";
// import "antd/dist/antd.css";

// import "./Controller.css";
// import PlaybackSpeedOverflow from "./PlaybackSpeedOverflow/PlaybackSpeedOverflow";
// import captureVideoFrame from "./CaptureVideoFrame/CaptureVideoFrame";
// import { SelectedVideoPlayerAndPlayerUrlsChange } from "../../../../redux/SelectedVideoPlayerAndPlayerUrls/SelectedVideoPlayerAndPlayerUrlsAction";

// export default function Controller(props) {
//   const dispatch = useDispatch();
//   const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
//   const SelectedVideoPlayerAndPlayerUrlsState = useSelector(
//     (state) => state.SelectedVideoPlayerAndPlayerUrlsState
//   );
//   const playerRefObjectOnController = props.playerRefObjectOnController;

//   const playerRefObject1 = props.playerRefObject1;
//   const playerRefObject2 = props.playerRefObject2;
//   const playerRefObject3 = props.playerRefObject3;
//   const playerRefObject4 = props.playerRefObject4;

//   return (
//     <div className="controler">
//       <span
//         onClick={() => {
//           console.log(playerRefObject1);
//         }}
//       >
//         PROOController
//       </span>
//       <span
//         onClick={() => {
//           {
//             dispatch(
//               PlayerBehaviorChange({
//                 ...PlayerBehaviorState,
//                 playing: false,
//               })
//             );
//             playerRefObject1.current.seekTo(
//               playerRefObject1.current.getCurrentTime() - 0.03125 * 10
//             );
//           }
//           {
//             playerRefObject2.current.seekTo(
//               playerRefObject2.current.getCurrentTime() - 0.03125 * 10
//             );
//           }
//           {
//             playerRefObject3.current.seekTo(
//               playerRefObject3.current.getCurrentTime() - 0.03125 * 10
//             );
//           }
//           {
//             playerRefObject4.current.seekTo(
//               playerRefObject4.current.getCurrentTime() - 0.03125 * 10
//             );
//           }
//         }}
//       >
//         Backward{" "}
//       </span>
//       <span
//         onClick={() => {
//           dispatch(
//             PlayerBehaviorChange({
//               ...PlayerBehaviorState,
//               playing: !PlayerBehaviorState.playing,
//             })
//           );
//         }}
//       >
//         {" "}
//         Play/Pause{" "}
//       </span>
//       <span
//         onClick={() => {
//           dispatch(PlayerBehaviorChange({ ...PlayerBehaviorState, url: "" }));
//         }}
//       >
//         {" "}
//         Stop{" "}
//       </span>
//       <span
//         onClick={() => {
//           {
//             dispatch(
//               PlayerBehaviorChange({
//                 ...PlayerBehaviorState,
//                 playing: false,
//               })
//             );
//             playerRefObject1.current.seekTo(
//               playerRefObject1.current.getCurrentTime() + 0.03125
//             );
//           }
//           {
//             playerRefObject2.current.seekTo(
//               playerRefObject2.current.getCurrentTime() + 0.03125
//             );
//           }
//           {
//             playerRefObject3.current.seekTo(
//               playerRefObject3.current.getCurrentTime() + 0.03125
//             );
//           }
//           {
//             playerRefObject4.current.seekTo(
//               playerRefObject4.current.getCurrentTime() + 0.03125
//             );
//           }
//         }}
//       >
//         {" "}
//         FBF Forward{" "}
//       </span>
//       <Dropdown overlay={<PlaybackSpeedOverflow />} placement="top">
//         <span
//           onClick={() => {
//             dispatch(
//               PlayerBehaviorChange({
//                 ...PlayerBehaviorState,
//                 playbackRate: 1,
//               })
//             );
//           }}
//         >
//           {" "}
//           PB Speed{" "}
//         </span>
//       </Dropdown>

//       <Dropdown overlay={<VolumeOverflow />} placement="top">
//         <span
//           className="ant-dropdown-open"
//           onClick={() => {
//             dispatch(
//               PlayerBehaviorChange({
//                 ...PlayerBehaviorState,
//                 muted: !PlayerBehaviorState.muted,
//               })
//             );
//           }}
//         >
//           {" "}
//           Volume{" "}
//         </span>
//       </Dropdown>

//       <span
//         onClick={() => {
//           {
//             console.log(
//               PlayerBehaviorState.selectedPlayerId.current.getInternalPlayer()
//             );

//             var frame = captureVideoFrame(
//               PlayerBehaviorState.selectedPlayerId.current.getInternalPlayer(),
//               "png"
//             );

//             const img = document.getElementById("my-screenshot");
//             img.setAttribute("src", frame.dataUri);

//             const formData = new FormData();
//             console.log("DDDF");
//             formData.append(
//               "file",
//               frame.blob,
//               `my-screenshot.${frame.format}`
//             );

//             var anchor = document.createElement("a");
//             anchor.href = frame.dataUri;
//             anchor.download = "IMAGE.PNG";
//             anchor.click();

//             axios
//               .post("/user", {
//                 formData,
//               })
//               .then(function (response) {
//                 console.log(response);
//               })
//               .catch(function (error) {
//                 console.log(error);
//               });
//           }
//         }}
//       >
//         SnapShot
//       </span>

//       <span
//         onClick={() => {
//           dispatch(
//             PlayerBehaviorChange({
//               ...PlayerBehaviorState,
//               justForTest: [
//                 {
//                   id: "background_all-test",
//                   editable: true,

//                   start: "2022-07-26T15:15:55",
//                   end: "2022-07-26T15:16:20",
//                   type: "background",
//                   style: "background-color: rgba(23, 230, 255, 0.7 );",
//                   className: "positive",
//                 },
//               ],
//             })
//           );
//         }}
//       >
//         test
//       </span>
//       <span>
//         <span
//           onClick={() => {
//             dispatch(
//               SelectedVideoPlayerAndPlayerUrlsChange({
//                 ...SelectedVideoPlayerAndPlayerUrlsState,
//                 SelectedPlayer: 1,
//               })
//             );
//           }}
//         >
//           1{" "}
//         </span>
//         <span
//           onClick={() => {
//             dispatch(
//               SelectedVideoPlayerAndPlayerUrlsChange({
//                 ...SelectedVideoPlayerAndPlayerUrlsState,
//                 SelectedPlayer: 4,
//               })
//             );
//           }}
//         >
//           {" "}
//           4{" "}
//         </span>
//       </span>

//       <img id="my-screenshot" />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import VolumeOverflow from "./VolumeOverflow/VolumeOverflow";
import { Dropdown, Modal, DatePicker, Select } from "antd";
import PlaybackSpeedOverflow from "./PlaybackSpeedOverflow/PlaybackSpeedOverflow";
import captureVideoFrame from "./CaptureVideoFrame/CaptureVideoFrame";
import { PlayerBehaviorChange } from "../../../../redux/PlayerBehavior/PlayerBehaviorAction";
import { SelectedVideoPlayerAndPlayerUrlsChange } from "../../../../redux/SelectedVideoPlayerAndPlayerUrls/SelectedVideoPlayerAndPlayerUrlsAction";

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
  W4,
} from "../../../../assets/Icons/JSXs/index";

import "antd/dist/antd.css";

import "./Controller.css";

export default function FourVideoPlayer(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  const SelectedVideoPlayerAndPlayerUrlsState = useSelector(
    (state) => state.SelectedVideoPlayerAndPlayerUrlsState
  );
  const playerRefObjectOnController = props.playerRefObjectOnController;

  const playerRefObject1 = props.playerRefObject1;
  const playerRefObject2 = props.playerRefObject2;
  const playerRefObject3 = props.playerRefObject3;
  const playerRefObject4 = props.playerRefObject4;

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
        return <Svg1X />;
        break;
      }
      case 2:
        return <Svg2X />;
        break;
      case 4:
        return <Svg4X />;
        break;
      case 8:
        return <Svg8X />;
        break;
      case 1 / 2:
        return <Svg1D2X />;
        break;
      case 1 / 4:
        return <Svg1D4X />;
        break;
      case 1 / 8:
        return <Svg1D8X />;
        break;

      default:
        return "PB Speed 0";
    }
  };

  return (
    <div className="controller">
      <div className="controller_cut-download">
        {" "}
        <span
          style={{ margin: "0 0.5rem" }}
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
                  formData,
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
        <span onClick={showModal}>
          <TimeClip width="2rem" height="2rem" />
        </span>
        <Modal
          className="cut-modal"
          style={{
            // backgroundColor: "#5F687D",
            backgroundColor: "transparent",
          }}
          bodyStyle={{
            backgroundColor: "#5F687D",
          }}
          title="Cut"
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
              margin: "0.5rem 0",
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
              margin: "0.5rem 0",
            }}
          >
            <span>End: </span>
            <DatePicker showTime onChange={(e) => console.log(e)} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0.5rem 0",
            }}
          >
            <span>Format: </span>{" "}
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
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
          style={{ margin: "0 0.5rem" }}
          onClick={() => {
            {
              dispatch(
                PlayerBehaviorChange({
                  ...PlayerBehaviorState,
                  playing: false,
                })
              );
              playerRefObject1.current.seekTo(
                playerRefObject1.current.getCurrentTime() - 0.03125 * 10
              );
            }
            {
              playerRefObject2.current.seekTo(
                playerRefObject2.current.getCurrentTime() - 0.03125 * 10
              );
            }
            {
              playerRefObject3.current.seekTo(
                playerRefObject3.current.getCurrentTime() - 0.03125 * 10
              );
            }
            {
              playerRefObject4.current.seekTo(
                playerRefObject4.current.getCurrentTime() - 0.03125 * 10
              );
            }
          }}
        >
          <FrameByFrameBackward width="2rem" height="2rem" />
        </span>
        <span
          style={{ margin: "0 0.5rem" }}
          onClick={() => {
            dispatch(
              PlayerBehaviorChange({
                ...PlayerBehaviorState,
                playing: !PlayerBehaviorState.playing,
              })
            );
          }}
        >
          {!PlayerBehaviorState.playing ? (
            <Play width="2rem" height="2rem" />
          ) : (
            <APause width="2rem" height="2rem" />
          )}
        </span>
        <span
          style={{ margin: "0 0.5rem" }}
          onClick={() => {
            dispatch(PlayerBehaviorChange({ ...PlayerBehaviorState, url: "" }));
          }}
        >
          <Stop width="2rem" height="2rem" />
        </span>
        <span
          onClick={() =>
            //   {
            //   // dispatch(
            //   //   PlayerBehaviorChange({
            //   //     ...PlayerBehaviorState,
            //   //     playing: false,
            //   //   })
            //   // )

            //   playerRefObjectOnController.current.seekTo(
            //     playerRefObjectOnController.current.getCurrentTime() + 0.03125
            //   );
            // }

            {
              {
                dispatch(
                  PlayerBehaviorChange({
                    ...PlayerBehaviorState,
                    playing: false,
                  })
                );
                playerRefObject1.current.seekTo(
                  playerRefObject1.current.getCurrentTime() + 0.03125
                );
              }
              {
                playerRefObject2.current.seekTo(
                  playerRefObject2.current.getCurrentTime() + 0.03125
                );
              }
              {
                playerRefObject3.current.seekTo(
                  playerRefObject3.current.getCurrentTime() + 0.03125
                );
              }
              {
                playerRefObject4.current.seekTo(
                  playerRefObject4.current.getCurrentTime() + 0.03125
                );
              }
            }
          }
        >
          <FrameByFrameForward width="2rem" height="2rem" />
        </span>
        <Dropdown overlay={<PlaybackSpeedOverflow />} placement="top">
          <span
            style={{ margin: "0 0.5rem", color: "#EFEFEF", fontSize: "1.5rem" }}
            onClick={() => {
              dispatch(
                PlayerBehaviorChange({
                  ...PlayerBehaviorState,
                  playbackRate: 1,
                })
              );
            }}
          >
            {PbSpeedIcon()}
          </span>
        </Dropdown>

        <Dropdown overlay={<VolumeOverflow />} placement="top">
          <span
            style={{ margin: "0 0.5rem" }}
            className="ant-dropdown-open"
            onClick={() => {
              dispatch(
                PlayerBehaviorChange({
                  ...PlayerBehaviorState,
                  muted: !PlayerBehaviorState.muted,
                })
              );
            }}
          >
            {PlayerBehaviorState.muted ? (
              <Volume0 width="2rem" height="2rem" />
            ) : (
              volumeIcon()
            )}
          </span>
        </Dropdown>

        <img id="my-screenshot" />
      </div>
      <div className="controller_windows-select">
        <span>
          <span
            style={{ margin: "0 0.5rem" }}
            onClick={() => {
              dispatch(
                SelectedVideoPlayerAndPlayerUrlsChange({
                  ...SelectedVideoPlayerAndPlayerUrlsState,
                  SelectedPlayer: 1,
                })
              );
            }}
          >
            <W1 width="2rem" height="2rem" />
          </span>
          <span
            onClick={() => {
              dispatch(
                SelectedVideoPlayerAndPlayerUrlsChange({
                  ...SelectedVideoPlayerAndPlayerUrlsState,
                  SelectedPlayer: 4,
                })
              );
            }}
          >
            <W4 width="2rem" height="2rem" />
          </span>
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
