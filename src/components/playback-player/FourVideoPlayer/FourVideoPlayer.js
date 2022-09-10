import React, { useRef } from "react";
import Controller from "./Controller/Controller";
import Player from "./Players/Player/Player";
import TimeLiner from "./TimeLiner/TimeLiner";
import Players from "./Players/Players";

import "./FourVideoPlayer.css";

export default function FourVideoPlayer() {
  const playerRefObject1 = useRef();
  const playerRefObject2 = useRef();
  const playerRefObject3 = useRef();
  const playerRefObject4 = useRef();

  return (
    <div className="video-player">
      <Players
        playerRefObject1={playerRefObject1}
        playerRefObject2={playerRefObject2}
        playerRefObject3={playerRefObject3}
        playerRefObject4={playerRefObject4}
      />
      {/* <Player playerRefObjectOnPlayer={playerRefObject1} /> */}
      <TimeLiner
        playerRefObject1={playerRefObject1}
        playerRefObject2={playerRefObject2}
        playerRefObject3={playerRefObject3}
        playerRefObject4={playerRefObject4}
      />
      <Controller
        playerRefObject1={playerRefObject1}
        playerRefObject2={playerRefObject2}
        playerRefObject3={playerRefObject3}
        playerRefObject4={playerRefObject4}
      />
    </div>
  );
}
