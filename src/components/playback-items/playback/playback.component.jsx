import React from "react";
import { Col, Row } from "antd";
import "./playback.styles.scss";
import Player from "../playback-player/playback-player.component";

const PlayBack = () => {
  return (
    <Row className="play_back_container">
      <Col span={24} className="video-player">
        {/* video player & timeline */}
        <Player />
      </Col>
    </Row>
  );
};

export default PlayBack;
