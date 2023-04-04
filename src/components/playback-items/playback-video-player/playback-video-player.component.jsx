import React from "react";

import "./playback-video-player.styles.scss";
import Player from "../playback-player/playback-player.component";

const VideoPlayer = ({ playerRefObjectOnPlayer }) => {
  return (
    <div className="video-player">
      {/* video player component */}
      <Player playerRefObjectOnPlayer={playerRefObjectOnPlayer} />
    </div>
  );
};

export default VideoPlayer;
