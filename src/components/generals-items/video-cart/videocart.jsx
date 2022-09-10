import React from "react";
import { useEffect, useRef } from "react";
import "./videocart.styles.scss";

export default function VideoCard(props) {
  const xref = useRef();

  useEffect(() => {
    if (props.StreamLink != "") {
      try {
        var webrtc = new RTCPeerConnection({
          iceServers: [
            {
              urls: ["stun:stun.l.google.com:19302"],
            },
          ],
          sdpSemantics: "unified-plan",
        });

        async function handleNegotiationNeeded() {
          let url = props.StreamLink;
          let offer = await webrtc.createOffer();

          await webrtc.setLocalDescription(offer);

          fetch(url, {
            method: "POST",
            body: new URLSearchParams({
              data: btoa(webrtc.localDescription.sdp),
            }),
          })
            .then((response) => response.text())
            .then((data) => {
              try {
                // console.log(data);
                webrtc.setRemoteDescription(
                  new RTCSessionDescription({
                    type: "answer",
                    sdp: atob(data),
                  })
                );
              } catch (e) {
                console.warn(e);
              }
            });
        }

        // function startPlay() {
        let videoEl = document.querySelector("#webrtc-video");

        webrtc.onnegotiationneeded = handleNegotiationNeeded;
        webrtc.ontrack = function (event) {
          // console.log(event.streams.length + " track is delivered");
          // console.log(event.streams);
          if (props.StreamLink != "") xref.current.srcObject = event.streams[0];
          // videoEl.play();
        };
        webrtc.addTransceiver("video", {
          direction: "sendrecv",
        });
        let webrtcSendChannel = webrtc.createDataChannel("sendchannel");
        // webrtc.addTransceiver('video', {
        //   'direction': 'sendrecv'
        // });
        webrtcSendChannel.onclose = () => {
          // startPlay();
          // console.log("sendChannel has closed");
        };
        webrtcSendChannel.onopen = () => {
          // console.log("sendChannel has opened");
          webrtcSendChannel.send("ping");
          let webrtcSendChannelInterval = setInterval(() => {
            webrtcSendChannel.send("ping");
          }, 1000);
        };

        webrtcSendChannel.onmessage = (e) => console.log(e.data);
        // }

        // document.addEventListener('DOMContentLoaded', function() {
        //   let videoEl = document.querySelector('#webrtc-video');

        //   videoEl.addEventListener('loadeddata', () => {
        //     videoEl.play();
        //   });

        //   videoEl.addEventListener('error', (e) => {
        //     console.log('video_error', e)
        //   });

        //   startPlay();
        // });
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.StreamLink]);

  if (props.StreamLink != "") {
    return (
      <div className="video-card">
        <video
          id="webrtc-video"
          ref={xref}
          autoPlay
          muted
          onClick={props.handleClick}
          // style={{ width: "80%", height: "20rem", border: "2px solid red" }}
        ></video>
      </div>
    );
  } else return null;
}

// import React from "react";

// import "./VideoCard.css";

// export default function VideoCard(props) {
//   if (props.StreamLink != "") {
//     return (
//       <div className="video-card">
//         {props.StreamLink}
//         {/* <video width="100%" controls muted>
//           <source
//          src={props.StreamLink}
//             // src={" https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4 "}
//             // src={" https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4 "}
//             type="video/mp4"
//           />
//         </video> */}
//       </div>
//     );
//   } else return null;
// }
