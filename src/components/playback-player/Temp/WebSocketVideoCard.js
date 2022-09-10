import React from "react";
import { useEffect, useRef } from "react";

export default function WebSocketVideoCard(props) {
  const xref = useRef();

  useEffect(() => {
    if (props.StreamLink != "") {
      try {
        const mseQueue = [];
        let mseSourceBuffer;
        let mseStreamingStarted = false;

        const videoEl = document.querySelector("#mse-video");
        const url = "ws://192.168.1.131:8083/pages/player/mse/cam1/0";

        const mse = new MediaSource();
        // videoEl.src = window.URL.createObjectURL(mse);
        // console.log(videoEl);

        mse.addEventListener(
          "sourceopen",
          function () {
            console.log("addEventListener");

            const ws = new WebSocket(url);
            ws.binaryType = "arraybuffer";
            ws.onopen = function (event) {
              console.log("Connect to ws");

            };
            console.log("addEventListener2");

            ws.onmessage = function (event) {
              console.log("addEventListener3");

              const data = new Uint8Array(event.data);
              if (data[0] === 9) {
                let mimeCodec;
                const decodedArr = data.slice(1);
                if (window.TextDecoder) {
                  mimeCodec = new TextDecoder("utf-8").decode(decodedArr);
                } else {
                  // mimeCodec = Utf8ArrayToStr(decodedArr);
                }
                mseSourceBuffer = mse.addSourceBuffer(
                  'video/mp4; codecs="' + mimeCodec + '"'
                );
                mseSourceBuffer.mode = "segments";
                mseSourceBuffer.addEventListener("updateend", pushPacket);
              } else {
                readPacket(event.data);
              }
            };
          },
          false
        );

        function pushPacket() {
          const videoEl = document.querySelector("#mse-video");
          let packet;

          if (!mseSourceBuffer.updating) {
            if (mseQueue.length > 0) {
              packet = mseQueue.shift();
              mseSourceBuffer.appendBuffer(packet);
            } else {
              mseStreamingStarted = false;
            }
          }
          if (videoEl.buffered.length > 0) {
            if (typeof document.hidden !== "undefined" && document.hidden) {
              // no sound, browser paused video without sound in background
              videoEl.currentTime =
                videoEl.buffered.end(videoEl.buffered.length - 1) - 0.5;
            }
          }
        }

        function readPacket(packet) {
          if (!mseStreamingStarted) {
            mseSourceBuffer.appendBuffer(packet);
            mseStreamingStarted = true;
            return;
          }
          mseQueue.push(packet);
          if (!mseSourceBuffer.updating) {
            pushPacket();
          }
        }

        videoEl.addEventListener("pause", () => {
          if (
            videoEl.currentTime >
            videoEl.buffered.end(videoEl.buffered.length - 1)
          ) {
            videoEl.currentTime =
              videoEl.buffered.end(videoEl.buffered.length - 1) - 0.1;
            videoEl.play();
          }
        });

        videoEl.src = window.URL.createObjectURL(mse);
        console.log(videoEl);

      } catch (error) {
        console.log(error);
      }
    }
  }, [props.StreamLink]);

  if (props.StreamLink != "") {
    return (
      <div className=" web-socket-video-card " style={{ backgroundColor: "#666666 "}}>
        <video
          id="mse-video"
          ref={xref}
          autoPlay
          muted
          // style={{ width: "80%", height: "20rem", border: "2px solid red" }}
        ></video>
      </div>
    );
  } else return null;
}





// import React from "react";
// import ReactPlayer from "react-player";

// export default function Player(props) {
//   return (
//     <ReactPlayer
//       url="http://192.168.1.131:8083/stream/cam3/channel/0/webrtc"
//       // url="http://37.235.23.13:8080/hls/cam115.m3u8"
//       // ref={props.playerRef}
//       ref={props.playerRefObjectOnPlayer}
//       width={"100%"}
//       // muted
//       controls
//       // light={true}
//       height={" 70vh "}
//       style={{
//         padding: "0 !important",
//         margin: " auto auto",
//         display: "flex",
//       }}
//       onDuration={(e) => console.log(e)}
//     />
//   );
// }

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
