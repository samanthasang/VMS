import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { PlayerBehaviorChange } from "../../../../../redux/PlayerBehavior/PlayerBehaviorAction";
import "./Player.css";

export default function Player(props) {
  const dispatch = useDispatch();

  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  const playerRefObjectOnPlayer = props.playerRefObjectOnPlayer;

  return (
    // <WebRtcPlayer StreamLink={"http://192.168.1.131:8083/stream/cam1/channel/0/webrtc"}/>
    <div
      className={`Video-container ${PlayerBehaviorState.selectedPlayerId == props.idx ? "selected-player-div" : "" } `}

      onClick={() => {
        console.log(props.idx);
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            selectedPlayerId: props.idx,
          })
        );
      }}
    >
      <ReactPlayer
        className="react-player-container"
        width={"100%"}
        height={" 100% "}
        url={props.urlx}
        ref={props.playerRefObjectOnPlayer}
        playing={PlayerBehaviorState.playing}
        controls={PlayerBehaviorState.controls}
        playbackRate={PlayerBehaviorState.playbackRate}
        volume={PlayerBehaviorState.volume}
        muted={PlayerBehaviorState.muted}
        loop={PlayerBehaviorState.loop}
        pip={PlayerBehaviorState.pip}
        light={PlayerBehaviorState.light}
        style={{}}
        onDuration={(e) => console.log(e)}
        onSeek={() => {
          // console.log(playerRefObjectOnPlayer.current.getCurrentTime());
          // console.log(playerRefObjectOnPlayer.current.getInternalPlayer());
        }}
      />
    </div>
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
