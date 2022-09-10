import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";

export default function Player(props) {
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  const playerRefObjectOnPlayer = props.playerRefObjectOnPlayer;

  return (
    // <WebRtcPlayer StreamLink={"http://192.168.1.131:8083/stream/cam1/channel/0/webrtc"}/>
    <ReactPlayer
      width={"100%"}
      height={`calc(100%  - 7rem)`}
      url={PlayerBehaviorState.url}
      ref={props.playerRefObjectOnPlayer}
      playing={PlayerBehaviorState.playing}
      controls={PlayerBehaviorState.controls}
      playbackRate={PlayerBehaviorState.playbackRate}
      volume={PlayerBehaviorState.volume}
      muted={PlayerBehaviorState.muted}
      loop={PlayerBehaviorState.loop}
      pip={PlayerBehaviorState.pip}
      light={PlayerBehaviorState.light}
      style={{
        padding: "0 !important",
        margin: " auto auto",
        display: "flex"
      }}
      onDuration={(e) => console.log(e)}
      onSeek={() => {
        // console.log(playerRefObjectOnPlayer.current.getCurrentTime());
        // console.log(playerRefObjectOnPlayer.current.getInternalPlayer());
      }}
    />
  );
}

// import React,{useRef} from "react";
// import ReactPlayer from "react-player";

// export default function ReactPlayerClass(props) {
//   // const playerRef = useRef();

//   return (

//       <ReactPlayer
//         url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
//       // url="http://37.235.23.13:8080/hls/cam115.m3u8"
//       ref={props.playerRef}
//         width={"100%"}
//         // muted
//         controls
//         // light={true}
//         height={"calc(100% - 8rem)"}
//         style={{
//           padding: "0 !important",
//           margin: " auto auto",
//           display: "flex",
//         }}
//       onDuration={(e) => console.log(e)}
//       />
//   );
// }
