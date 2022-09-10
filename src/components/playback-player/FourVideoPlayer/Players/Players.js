import React, { useRef } from "react";
import Player from "./Player/Player";

import "./Players.css";

export default function Players(props) {
  const playerRefObject1 = props.playerRefObject1;
  const playerRefObject2 = props.playerRefObject2;
  const playerRefObject3 = props.playerRefObject3;
  const playerRefObject4 = props.playerRefObject4;

  const FakeUrlList = {
    url1: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    url2: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    url3: "https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm",
    url4: "https://filesamples.com/samples/video/ogv/sample_640x360.ogv",
  };

  return (
    <div className="players">
      <Player
        playerRefObjectOnPlayer={playerRefObject1}
        idx={playerRefObject1}
        urlx={FakeUrlList.url1}
      />
      <Player
        playerRefObjectOnPlayer={playerRefObject2}
        idx={playerRefObject2}
        urlx={FakeUrlList.url2}
      />
      <Player
        playerRefObjectOnPlayer={playerRefObject3}
        idx={playerRefObject3}
        urlx={FakeUrlList.url3}
      />
      <Player
        playerRefObjectOnPlayer={playerRefObject4}
        idx={playerRefObject4}
        urlx={FakeUrlList.url4}
      />
    </div>
  );
}
