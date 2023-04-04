// import { Progress, Slider } from "antd";
import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";

import screenfull from "screenfull";
import Controls from "../playback-control/playback-control.component";
import CaptureVideoFrame from "../CaptureVideoFrame/CaptureVideoFrame";
import { Menu, Dropdown, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import {
  Close,
  FullScreen,
  Scale,
  Snapshot,
  Volume3,
} from "../../../assets/Icons/JSXs";
import { useSelector } from "react-redux";
import {
  AspectVideoPlayBack,
  RemoveALLVideoPlayBack,
  RemoveVideoPlayBack,
  SetHeaderPlayBack,
  SetHideHeaderPlayBack,
} from "../../../redux/playback_redux/playbackAction";
import "./playback-player.styles.scss";
import Lottie from "react-lottie";
import * as animationData2 from "../../../assets/lottieFiles/anime3.json";
import * as animationData1 from "../../../assets/lottieFiles/AnimeNot.json";
import PlayBackVideoHeader from "../play-back-video-header/play-back-video-header.component";

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

const Player = () => {
  const dispatch = useDispatch();

  const [idForDeleteVideo, setIdForDeleteVideo] = useState("");
  const playerRef = useRef(null);
  // const playerRef1 = useRef(null);
  // const playerRef2 = useRef(null);
  // const playerRef3 = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const [cameraCheckedNumber, SetCameraChecked] = useState(false);
  const url = useSelector((state) => state.playback.urls[0]);
  const headerShow = useSelector((state) => state.playback.urls[0].headerShow);

  const [count22, setCount] = useState(0);
  const [count12, setCount12] = useState(true);
  const [backwardOn, setBackwardOn] = useState(false);
  const lottie = useSelector((state) => state.playback.loading);
  const lottieoff = useSelector((state) => state.playback.lottieoff);
  const [state, setState] = useState({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    rate: 3,
    volume: 0.66,
    loop: false,
    seeking: false,
  });
  const {
    playing,
    light,
    muted,
    loop,
    playbackRate,
    rate,
    pip,
    played,
    volume,
  } = state;

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime = format(currentTime);

  const totalDuration = format(duration);

  {
    count12 &&
      setTimeout(() => {
        setCount(count22 + 1);
      }, 1000);
  }
  {
    backwardOn &&
      elapsedTime.split(":")[1] > 1 &&
      setTimeout(() => {
        handleRewinding();
      }, 1000);
  }
  const handlecameraCheckedNumber = () => {
    console.log("cameraCheckedNumber");
    SetCameraChecked(!cameraCheckedNumber);
  };
  const handleCountT = () => {
    console.log("Count False");
    setCount12(true);
  };
  const handleCountF = () => {
    console.log("Count True");
    setCount12(false);
  };
  useEffect(() => {
    console.log(url.url);
    setState({
      pip: false,
      playing: false,
      controls: false,
      light: false,
      muted: false,
      played: 0,
      duration: 0,
      playbackRate: 1.0,
      rate: 3,
      volume: 0.66,
      loop: false,
      seeking: false,
    });
  }, [url.url]);

  const handlePlayPause = () => {
    setBackwardOn(false);
    setState({ ...state, playing: !state.playing });
  };
  const handlePause = () => {
    setState({ ...state, playing: false });
  };
  const handlePlay = () => {
    setBackwardOn(false);
    setState({ ...state, playing: true });
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 0.3125);
    // playerRef1.current.seekTo(playerRef1.current.getCurrentTime() - 0.3125);
    // playerRef2.current.seekTo(playerRef2.current.getCurrentTime() - 0.3125);
    // playerRef3.current.seekTo(playerRef3.current.getCurrentTime() - 0.3125);
  };
  const handleRewinding = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 0.625);
    // playerRef1.current.seekTo(playerRef1.current.getCurrentTime() - 0.3125);
    // playerRef2.current.seekTo(playerRef2.current.getCurrentTime() - 0.3125);
    // playerRef3.current.seekTo(playerRef3.current.getCurrentTime() - 0.3125);
  };
  const handleonRewind = () => {
    console.log("backwardOn    " + backwardOn);
    if (!backwardOn) {
      setBackwardOn(true);
      handlePause();
    } else {
      setBackwardOn(false);
    }
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 0.3125);
    // playerRef1.current.seekTo(playerRef1.current.getCurrentTime() + 0.3125);
    // playerRef2.current.seekTo(playerRef2.current.getCurrentTime() + 0.3125);
    // playerRef3.current.seekTo(playerRef3.current.getCurrentTime() + 0.3125);
  };
  const handleStop = () => {
    handlePause();
    playerRef.current.seekTo(
      playerRef.current.getCurrentTime() - playerRef.current.getCurrentTime()
    );
    // playerRef1.current.seekTo(
    //   playerRef1.current.getCurrentTime() - playerRef1.current.getCurrentTime()
    // );
    // playerRef2.current.seekTo(
    //   playerRef2.current.getCurrentTime() - playerRef2.current.getCurrentTime()
    // );
    // playerRef3.current.seekTo(
    //   playerRef3.current.getCurrentTime() - playerRef3.current.getCurrentTime()
    // );
  };

  {
    played && elapsedTime === totalDuration && handleStop();
  }
  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility === "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (newValue) => {
    console.log(parseFloat(newValue));
    handleSeekMouseUp(newValue);
    console.log({ elapsedTime });
  };

  const handleSeekMouseUp = (newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue, "fraction");
    setState({ ...state, played: parseFloat(newValue) });
    // playerRef1.current.seekTo(newValue, "fraction");
    // playerRef2.current.seekTo(newValue, "fraction");
    // playerRef3.current.seekTo(newValue, "fraction");
  };

  const handleVolumeChange = (newValue) => {
    console.log("newValue " + newValue);
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
    const element = document.getElementById("target");
    screenfull.toggle(element);
  };

  const handlePlaybackRate = (rate) => {
    console.log("rate : " + rate);
    switch (rate) {
      case (rate = 3):
        setState({ ...state, rate: rate, playbackRate: 1 });
        break;
      case (rate = 4):
        setState({ ...state, rate: rate, playbackRate: 2 });
        break;

      case (rate = 5):
        setState({ ...state, rate: rate, playbackRate: 4 });
        break;

      case (rate = 6):
        setState({ ...state, rate: rate, playbackRate: 8 });
        break;

      case (rate = 2):
        setState({ ...state, rate: rate, playbackRate: 0.5 });
        break;

      case (rate = 1):
        setState({ ...state, rate: rate, playbackRate: 0.25 });
        break;

      case (rate = 0):
        setState({ ...state, rate: rate, playbackRate: 0.2 });
        break;

      default:
        setState({ ...state, rate: rate, playbackRate: 1 });
    }
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const addBookmark = () => {
    var frame = CaptureVideoFrame(playerRef.current.getInternalPlayer(), "png");

    const img = document.getElementById("my-screenshot");
    img.setAttribute("src", frame.dataUri);

    const formData = new FormData();
    formData.append("file", frame.blob, `my-screenshot.${frame.format}`);

    var anchor = document.createElement("a");
    anchor.href = frame.dataUri;
    anchor.download = "IMAGE.PNG";
    anchor.click();
  };

  const onClickAspect = ({ key, label }) => {
    console.log(idForDeleteVideo);
    if (key === "1") {
      dispatch(RemoveVideoPlayBack(idForDeleteVideo));
    }
    if (key === "2") {
      console.log(label);
      dispatch(RemoveALLVideoPlayBack());
    }
    if (key === "7-1") {
      console.log("lable " + key);
    }
    if (key === "7-2") {
      console.log("lable " + key);
    }
    if (key === "3") {
      hanldeMute();
    }
    if (key === "5") {
      console.log(label);
    }
    if (key === "aspect_D") {
      console.log(label);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_1_1") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_4_3") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_3_4") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_5_4") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_4_5") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_16_9") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
    if (key === "aspect_9_16") {
      console.log(key);
      dispatch(AspectVideoPlayBack({ id: idForDeleteVideo, aspect: key }));
    }
  };

  const menu = (
    <Menu
      onClick={onClickAspect}
      items={[
        {
          key: "1",
          icon: <Close />,
          label: <a>Close video</a>,
        },
        {
          key: "3",
          icon: <Volume3 />,
          label: <a>Start Audio</a>,
        },
        {
          key: "5",
          icon: <Snapshot />,
          label: (
            <a
              onClick={() => {
                addBookmark();
              }}
            >
              Snapshot
            </a>
          ),
        },
        {
          key: "6",
          icon: <Scale />,
          label: <a>Window Scale</a>,
          children: [
            {
              key: "aspect_D",
              label: "Original",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_1_1",
              label: "1:1",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_4_3",
              label: "4:3",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_3_4",
              label: "3:4",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_5_4",
              label: "5:4",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_4_5",
              label: "4:5",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_16_9",
              label: "16:9",
              className: ` ${url.aspect}`,
            },
            {
              key: "aspect_9_16",
              label: "9:16",
              className: ` ${url.aspect}`,
            },
          ],
        },
        {
          key: "8",
          icon: <FullScreen />,
          label: (
            <a
              onClick={() => {
                toggleFullScreen();
              }}
            >
              Full Screen
            </a>
          ),
        },
      ]}
    />
  );

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Row style={{ height: "100%" }}>
      <Col
        span={24}
        ref={playerContainerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        onContextMenu={(event) => event.preventDefault()}
        className="player_play_back"
      >
        <Row
          style={{
            height: "100%",
          }}
        >
          {lottie && (
            <Row
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            >
              <Col span={24}>
                <Lottie
                  options={defaultOptions2}
                  style={{
                    height: "46%",
                    width: "24%",
                    position: "absolute",
                    top: "17%",
                    left: "38%",
                    translate: "0",
                    zIndex: "5",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "17%",
                    width: "100%",
                    textAlign: "center",
                    zIndex: "5",
                    fontSize: "34px",
                  }}
                >
                  Searching Video . . .
                </span>
              </Col>
            </Row>
          )}
          {lottieoff && (
            <Row
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            >
              <Col span={24}>
                <Lottie
                  options={defaultOptions1}
                  style={{
                    height: "46%",
                    width: "24%",
                    position: "absolute",
                    top: "17%",
                    left: "38%",
                    translate: "0",
                    zIndex: "5",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "17%",
                    width: "100%",
                    textAlign: "center",
                    zIndex: "5",
                    fontSize: "34px",
                  }}
                >
                  Video is not found . . .
                </span>
                <PlayBackVideoHeader
                  addBookmark={addBookmark}
                  id={1}
                  screenShot={false}
                />
              </Col>
            </Row>
          )}
          {/* {cameraCheckedNumber ? (
            <>
              <Col
                span={12}
                style={{ height: "50%" }}
                onDoubleClick={() => {
                  toggleFullScreen();
                }}
                className={` ${urls[0].aspect}`}
              >
                <Dropdown
                  overlay={menu}
                  trigger={["contextMenu"]}
                  onContextMenu={() => setIdForDeleteVideo(urls[0].id)}
                >
                  <ReactPlayer
                    ref={playerRef}
                    width="100%"
                    height="100%"
                    url={urls[0].url}
                    pip={pip}
                    playing={playing}
                    controls={false}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onProgress={handleProgress}
                    style={{
                      padding: "0 !important",
                      margin: " auto auto",
                      display: "flex",
                      background: "#21242C",
                      border: "0.15rem solid #5F687D",
                    }}
                    config={{
                      file: {
                        attributes: {
                          crossOrigin: "anonymous",
                        },
                      },
                    }}
                  />
                </Dropdown>
              </Col>

              <Col
                span={12}
                style={{ height: "50%" }}
                onDoubleClick={() => {
                  toggleFullScreen();
                }}
                className={` ${urls[1].aspect}`}
              >
                <Dropdown
                  overlay={menu}
                  trigger={["contextMenu"]}
                  onContextMenu={() => setIdForDeleteVideo(urls[1].id)}
                >
                  <ReactPlayer
                    ref={playerRef1}
                    width="100%"
                    height="100%"
                    url={urls[1].url}
                    pip={pip}
                    playing={playing}
                    controls={false}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onProgress={handleProgress}
                    style={{
                      padding: "0 !important",
                      margin: " auto auto",
                      display: "flex",
                      background: "#21242C",
                      border: "0.15rem solid #5F687D",
                    }}
                    config={{
                      file: {
                        attributes: {
                          crossOrigin: "anonymous",
                        },
                      },
                    }}
                  />
                </Dropdown>
              </Col>

              <Col
                span={12}
                style={{ height: "50%" }}
                onDoubleClick={() => {
                  toggleFullScreen();
                }}
                className={` ${urls[2].aspect}`}
              >
                <Dropdown
                  overlay={menu}
                  trigger={["contextMenu"]}
                  onContextMenu={() => setIdForDeleteVideo(urls[2].id)}
                >
                  <ReactPlayer
                    ref={playerRef2}
                    width="100%"
                    height="100%"
                    url={urls[2].url}
                    pip={pip}
                    playing={playing}
                    controls={false}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onProgress={handleProgress}
                    style={{
                      padding: "0 !important",
                      margin: " auto auto",
                      display: "flex",
                      background: "#21242C",
                      border: "0.15rem solid #5F687D",
                    }}
                    config={{
                      file: {
                        attributes: {
                          crossOrigin: "anonymous",
                        },
                      },
                    }}
                  />
                </Dropdown>
              </Col>

              <Col
                span={12}
                style={{ height: "50%" }}
                onDoubleClick={() => {
                  toggleFullScreen();
                }}
                className={` ${urls[3].aspect}`}
              >
                <Dropdown
                  overlay={menu}
                  trigger={["contextMenu"]}
                  onContextMenu={() => setIdForDeleteVideo(urls[3].id)}
                >
                  <ReactPlayer
                    ref={playerRef3}
                    width="100%"
                    height="100%"
                    url={urls[3].url}
                    pip={pip}
                    playing={playing}
                    controls={false}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onProgress={handleProgress}
                    style={{
                      padding: "0 !important",
                      margin: " auto auto",
                      display: "flex",
                      background: "#21242C",
                      border: "0.15rem solid #5F687D",
                    }}
                    config={{
                      file: {
                        attributes: {
                          crossOrigin: "anonymous",
                        },
                      },
                    }}
                  />
                </Dropdown>
              </Col>
            </>
          ) : ( */}
          <Col
            span={24}
            style={{ height: "100%" }}
            onDoubleClick={() => {
              toggleFullScreen();
            }}
            className={` ${url.aspect}`}
          >
            {url.url ? (
              <>
                <Dropdown
                  overlay={menu}
                  trigger={["contextMenu"]}
                  onContextMenu={() => setIdForDeleteVideo(url.id)}
                >
                  <ReactPlayer
                    ref={playerRef}
                    width="100%"
                    height="100%"
                    url={url.url}
                    pip={pip}
                    playing={playing}
                    controls={false}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onProgress={handleProgress}
                    onMouseEnter={() => {
                      console.log(url.id);
                      dispatch(SetHeaderPlayBack(1));
                    }}
                    onMouseLeave={() => {
                      dispatch(SetHideHeaderPlayBack(1));
                    }}
                    style={{
                      padding: "0 !important",
                      margin: " auto auto",
                      display: "flex",
                      background: "#21242C",
                      border: "0.15rem solid #5F687D",
                    }}
                    config={{
                      file: {
                        attributes: {
                          crossOrigin: "anonymous",
                        },
                      },
                    }}
                  />
                </Dropdown>
                {headerShow && (
                  <PlayBackVideoHeader
                    addBookmark={addBookmark}
                    id={1}
                    screenShot={true}
                  />
                )}
              </>
            ) : (
              <ReactPlayer
                ref={playerRef}
                width="100%"
                height="100%"
                url={url.url}
                pip={pip}
                playing={playing}
                controls={false}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onProgress={handleProgress}
                style={{
                  padding: "0 !important",
                  margin: " auto auto",
                  display: "flex",
                  background: "#21242C",
                  border: "0.15rem solid #5F687D",
                }}
                config={{
                  file: {
                    attributes: {
                      crossOrigin: "anonymous",
                    },
                  },
                }}
              />
            )}
          </Col>
        </Row>
      </Col>
      {/* control section & timeline for video */}
      <Col span={24}>
        <Controls
          ref={controlsRef}
          onSeek={handleSeekChange}
          onRewind={handleRewind}
          handlePlayPause={handlePlayPause}
          onFastForward={handleFastForward}
          playing={playing}
          played={played}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          onMute={hanldeMute}
          muted={muted}
          handleVolumeChange={handleVolumeChange}
          rate={rate}
          handlePlaybackRate={handlePlaybackRate}
          onToggleFullScreen={toggleFullScreen}
          volume={volume}
          handleStop={handleStop}
          handlePause={handlePause}
          handlePlay={handlePlay}
          handleCountT={handleCountT}
          handleCountF={handleCountF}
          handlecameraCheckedNumber={handlecameraCheckedNumber}
          handleBackward={handleonRewind}
          backwardOn={backwardOn}
        />
        {/* screen shot from video */}
        <img id="my-screenshot" style={{ display: "none" }} alt="screenshot" />
      </Col>
    </Row>
  );
};

export default Player;
