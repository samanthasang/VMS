import { Col, Row } from "antd";
import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import FourVideoPlayer from "../../components/playback-player/FourVideoPlayer/FourVideoPlayer";
import VideoPlayer from "../../components/playback-player/VideoPlayer/VideoPlayer";

const PlayBackPage = () => {
  const SelectedVideoPlayerAndPlayerUrlsState = useSelector(
    (state) => state.SelectedVideoPlayerAndPlayerUrlsState
  );

  const [fullScreen, setFullScreen] = useState(false);
  const handleFullscreenn = () => {
    setFullScreen(!fullScreen);
  };
  return (
    <Row className={fullScreen ? "full_screen" : "orginal_screen"}>
      <Col span={4} style={{ backgroundColor: "purple", color: "blue" }}>
        Hekllo
      </Col>
      <Col span={20}  className="window_screen" style={{ backgroundColor: "orange", color: "blue" }}>
        {SelectedVideoPlayerAndPlayerUrlsState.SelectedPlayer === 4 ? (
          <FourVideoPlayer />
        ) : (
          <VideoPlayer />
        )}
      </Col>
    </Row>
  );
};

export default PlayBackPage;
