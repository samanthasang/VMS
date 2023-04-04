import React, { forwardRef, useEffect, useState } from "react";
import { Col, Button, Row, Tooltip, Slider } from "antd";
import {
  Backward,
  FrameByFrameBackward,
  FrameByFrameForward,
  Pause,
  Play,
  Stop,
  Svg1D2X,
  Svg1D4X,
  Svg1D8X,
  Svg1X,
  Svg2X,
  Svg4X,
  Svg8X,
  Volume0,
  Volume1,
  Volume2,
  Volume3,
} from "../../../assets/Icons/JSXs/index";
import PlayBackFooterView from "../../playback-items/playback-footer-view/playback-footer-view.component";
import PlayBackFooterPanel from "../../playback-items/playback-footer-panel/playback-footer-panel.component";
import TimeLiner from "../playback-time-line/playback-time-line.component";
import "./playback-control.styles.scss";
import { useSelector } from "react-redux";

const Controls = forwardRef(
  (
    {
      onSeek,
      onRewind,
      handlePlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      rate,
      handlePlaybackRate,
      onToggleFullScreen,
      volume,
      handleVolumeChange,
      handleStop,
      handlePause,
      handlePlay,
      handleCountT,
      handleCountF,
      handlecameraCheckedNumber,
      handleBackward,
      backwardOn,
    },
    ref
  ) => {
    // enable or disable cut range item
    const [cutIsOn, setCutIsOn] = useState(false);
    // enable or disable the play rate slider
    const [playRateShown, setPlayRateShown] = useState(false);
    // enable or disable the volume slider
    const [volumeShown, setVolumeShown] = useState(false);

    // check if video is loaded or not
    const loadVideo = useSelector((state) => state.playback.loadingVideo);

    // check if volume or play rate change
    useEffect(() => {
      !muted && volumeIcon();
      PbSpeedIcon();
      console.log("get volumeIcon");
      loadVideo && handlePlayRateShownFalse();
      loadVideo && handleVolumeShownFalse();
    }, [volume, rate, loadVideo]);

    // handle the cut range item & pause the video
    const handleCut = () => {
      setCutIsOn(true);
      handleCountF();
      handlePause();
    };
    // show the volume slider
    const handleVolumeShown = () => {
      setVolumeShown(true);
    };
    // hide the volume slider
    const handleVolumeShownFalse = () => {
      setVolumeShown(false);
    };
    // show the play rate slider
    const handlePlayRateShown = () => {
      setPlayRateShown(true);
    };
    // hide the play rate slider
    const handlePlayRateShownFalse = () => {
      setPlayRateShown(false);
    };

    // handle the movment for cursor and change time for video
    const handleonSeek = (newValue) => {
      onSeek(newValue);
    };

    // change the value for volume
    const VolumeChange = (newValue) => {
      handleVolumeChange(newValue * 33);
    };

    // change the value for play rate
    const PlayRateChange = (newValue) => {
      console.log("onChange: ", newValue);
      handlePlaybackRate(newValue);
    };

    // set the volume icon
    const [Volume, setVolume] = useState(
      <Volume0 width="2rem" height="2rem" onClick={onMute} />
    );
    // set the paly rate icon
    const [playRate, setPlayRate] = useState(
      <Svg1X width="1rem" height="1rem" />
    );

    // change the volume value & icon for video
    const volumeIcon = () => {
      console.log("volume  " + volume);
      if (volume <= 0) {
        console.log("V1");
        setVolume(<Volume0 width="2rem" height="2rem" onClick={onMute} />);
      } else if (volume <= 0.33) {
        console.log("V1");
        setVolume(<Volume1 width="2rem" height="2rem" onClick={onMute} />);
      } else if (volume <= 0.66) {
        console.log("V2");
        setVolume(<Volume2 width="2rem" height="2rem" onClick={onMute} />);
      } else if (volume <= 0.99) {
        console.log("V3");
        setVolume(<Volume3 width="2rem" height="2rem" onClick={onMute} />);
      }
    };

    // change the play rate speed & icon for video
    const PbSpeedIcon = () => {
      console.log("playbackRate : " + rate);
      switch (rate) {
        case (rate = 3):
          setPlayRate(<Svg1X width="1rem" height="1rem" />);
          break;

        case (rate = 4):
          setPlayRate(<Svg2X width="1rem" height="1rem" />);
          break;

        case (rate = 5):
          setPlayRate(<Svg4X width="1rem" height="1rem" />);
          break;

        case (rate = 6):
          setPlayRate(<Svg8X width="1rem" height="1rem" />);
          break;

        case (rate = 2):
          setPlayRate(<Svg1D2X width="1rem" height="1rem" />);
          break;

        case (rate = 1):
          setPlayRate(<Svg1D4X width="1rem" height="1rem" />);
          break;

        case (rate = 0):
          setPlayRate(<Svg1D8X width="1rem" height="1rem" />);
          break;

        default:
          setPlayRate(<Svg1X width="1rem" height="1rem" />);
      }
    };

    return (
      <>
        <Row>
          {/* time line for show duriation & elapse time for video & get cut time for download video */}
          <Col span={24}>
            <TimeLiner
              ref={ref}
              changeTIme={onSeek}
              played={played}
              elapsedTime={elapsedTime}
              totalDuration={totalDuration}
              handleonSeek={handleonSeek}
              handlePause={handlePause}
              handlePlay={handlePlay}
              handleCountT={handleCountT}
              handleCountF={handleCountF}
              handleCut={handleCut}
              handleCutIsOn={cutIsOn}
            />
          </Col>
          <Col
            span={24}
            style={{ height: "3rem", background: "#14161A" }}
            className="play_back_footer"
          >
            <Row>
              {/* enable the cut section & access to cut modal */}
              <PlayBackFooterView
                handlePause={handlePause}
                loadVideo={loadVideo}
              />
              {/* play rate BTN & by hover changes visibilty of slider */}
              <Col
                span={8}
                className="footer_icon_live_view icon_24"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* if volume is mute cant access to slider */}
                {muted ? (
                  // volume BTN & by hover changes visibilty of slider
                  <Button
                    icon={<Volume0 onClick={onMute} />}
                    disabled={loadVideo}
                    onMouseEnter={handleVolumeShown}
                    className="icon_vol"
                  >
                    {volumeShown && (
                      <Col
                        style={{
                          height: "5rem",
                          margin: "auto",
                          position: "absolute",
                          left: "0.35rem",
                          top: "-5.15rem",
                        }}
                        onMouseLeave={handleVolumeShownFalse}
                      >
                        {/* volume BTN & by hover changes visibilty of slider */}
                        <Slider
                          tooltip={{
                            open: false,
                          }}
                          vertical
                          min={0}
                          max={3}
                          value={(volume * 100) / 33}
                          onChange={VolumeChange}
                          style={{
                            height: "5rem",
                            margin: "auto",
                          }}
                        />
                      </Col>
                    )}
                  </Button>
                ) : (
                  // volume BTN & by hover changes visibilty of slider
                  <Button
                    icon={Volume}
                    disabled={loadVideo}
                    onMouseEnter={handleVolumeShown}
                    className="icon_vol"
                  >
                    {volumeShown ? (
                      <Col
                        style={{
                          height: "5rem",
                          margin: "auto",
                          position: "absolute",
                          left: "0.35rem",
                          top: "-5.15rem",
                        }}
                        onMouseLeave={handleVolumeShownFalse}
                      >
                        {/* slider for change volume */}
                        <Slider
                          tooltip={{
                            open: false,
                          }}
                          vertical
                          min={0}
                          max={3}
                          value={(volume * 100) / 33}
                          onChange={VolumeChange}
                          style={{
                            height: "5rem",
                            margin: "auto",
                          }}
                        />
                      </Col>
                    ) : (
                      // hide the slider of play rate
                      <Col
                        style={{
                          height: "5rem",
                          margin: "auto",
                          position: "absolute",
                          left: "0.35rem",
                          top: "-5.15rem",
                        }}
                        onMouseLeave={handleVolumeShownFalse}
                      ></Col>
                    )}
                  </Button>
                )}

                {/* Frame By Frame Forward BTn */}
                <Tooltip title="Frame By Frame Forward">
                  <Button
                    icon={<FrameByFrameForward />}
                    onClick={onFastForward}
                    disabled={loadVideo}
                  />
                </Tooltip>
                {/* stop BTN */}
                <Tooltip title="Stop">
                  <Button
                    icon={<Stop />}
                    onClick={handleStop}
                    disabled={loadVideo}
                  />
                </Tooltip>
                {/* play BTN */}
                {playing ? (
                  // if video is playing the button change to pause BTN
                  <Tooltip title="Pause">
                    <Button
                      className="PlayIcon"
                      icon={<Pause />}
                      disabled={loadVideo}
                      onClick={handlePlayPause}
                    />
                  </Tooltip>
                ) : (
                  // if video is not playing the button change to play BTN
                  <Tooltip title="Play">
                    <Button
                      className="PlayIcon"
                      icon={<Play />}
                      disabled={loadVideo}
                      onClick={handlePlayPause}
                    />
                  </Tooltip>
                )}
                {/* if enables video Frame By Frame Backward until the start time*/}
                <Tooltip title="Backward">
                  <Button
                    icon={<Backward />}
                    onClick={handleBackward}
                    disabled={loadVideo}
                    className={backwardOn ? "active_backward" : ""}
                  />
                </Tooltip>

                {/* Frame By Frame Backward BTn */}
                <Tooltip title="Frame By Frame Backward">
                  <Button
                    icon={<FrameByFrameBackward />}
                    onClick={onRewind}
                    disabled={loadVideo}
                  />
                </Tooltip>
                {/* play rate BTN & by hover changes visibilty of slider */}
                <Button
                  icon={playRate}
                  disabled={loadVideo}
                  onMouseEnter={handlePlayRateShown}
                >
                  {playRateShown ? (
                    <Col
                      style={{
                        height: "5rem",
                        margin: "auto",
                        position: "absolute",
                        left: "0.25rem",
                        top: "-5.5rem",
                      }}
                      onMouseLeave={handlePlayRateShownFalse}
                    >
                      {/* slider for change play rate */}
                      <Slider
                        tooltip={{
                          open: false,
                        }}
                        min={0}
                        max={6}
                        vertical
                        value={rate}
                        onChange={PlayRateChange}
                      />
                    </Col>
                  ) : (
                    // hide the slider of play rate
                    <Col
                      style={{
                        height: "5rem",
                        margin: "auto",
                        position: "absolute",
                        left: "0.25rem",
                        top: "-5.5rem",
                      }}
                      onMouseLeave={handlePlayRateShownFalse}
                    ></Col>
                  )}
                </Button>
              </Col>
              {/* footer play back full screen section */}
              <PlayBackFooterPanel
                onToggleFullScreen={onToggleFullScreen}
                handlecameraCheckedNumber={handlecameraCheckedNumber}
              />
            </Row>
          </Col>
        </Row>
      </>
    );
  }
);

export default Controls;
