import React, { useRef, useEffect } from "react";
import Controller from "./Controller/Controller";
import Player from "./Player/Player";
import TimeLiner from "./TimeLiner/TimeLiner";

import "./VideoPlayer.css";

export default function VideoPlayer() {
  const playerRefObject = useRef();

  return (
    <div className="video-player">
      <Player playerRefObjectOnPlayer={playerRefObject} />
      <TimeLiner playerRefObjectOnTimeLiner={playerRefObject} />
      <Controller playerRefObjectOnController={playerRefObject} />
    </div>
  );
}
