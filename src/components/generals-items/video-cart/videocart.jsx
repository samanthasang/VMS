// eslint-disable-next-line
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown } from "antd";
import {
  ChangeStream,
  HideHeader,
  RemoveALLVideo,
  RemoveVideo,
  SetHeader,
} from "../../../redux/liveView_redux/liveViewAction";
import {
  FullScreen,
  Close,
  Snapshot,
  Stream,
  Scale,
  CloseAll,
} from "../../../assets/Icons/JSXs/index";
import "./videocart.styles.scss";
import screenfull from "screenfull";
import LiveViewVideoHeader from "../../live-view-items/live-view-video-header/live-view-video-header.component";
const VideoCard = ({
  StreamLink,
  id,
  setOneAspectratio,
  setLottieChange,
  setLottieOffChange,
  headerShow,
  aspectRatio,
  chooseSrc,
}) => {
  const dispatch = useDispatch();

  // anable or disable the normal mode for windows
  const custom = useSelector((state) => state.liveView.customView);
  // id for close the stream
  const [idForDeleteVideo, setIdForDeleteVideo] = useState("");
  const [counter, setCounter] = useState(1);
  const xref = useRef();

  var stream = document.getElementById(id);
  // getting the canvas fr screen shot
  var capture = document.getElementById("capture");
  // full srenn the stream
  const toggleFullScreen = () => {
    const element = document.getElementById(id);
    screenfull.on("change", () => {
      screenfull.isFullscreen
        ? dispatch(ChangeStream({ id: id, chooseSrc: 2 }))
        : custom && id === 1
        ? dispatch(ChangeStream({ id: id, chooseSrc: 2 }))
        : dispatch(ChangeStream({ id: id, chooseSrc: 1 }));
    });
    screenfull.toggle(element);
  };

  // screen shot from WebRTC
  function captureSnapshot() {
    if (null != Stream) {
      console.log("captureSnapshot");
      var ctx = capture.getContext("2d");
      var img = new Image();

      ctx.drawImage(stream, 0, 0, 1024, 640);

      img.src = capture.toDataURL("image/png");
      img.width = 1024;
      img.height = 640;
      var anchor = document.createElement("a");
      anchor.href = capture.toDataURL("image/png");
      anchor.download = "IMAGE.PNG";
      anchor.click();
    }
  }
  // getting data from drop down
  const onClickAspect = ({ key, label }) => {
    if (key === "1") {
      console.log(label);
      dispatch(RemoveVideo(idForDeleteVideo));
      setLottieChange(false);
      setLottieOffChange(false);
    }
    if (key === "7-1") {
      console.log("lable " + key);
      dispatch(
        ChangeStream({
          id: id,
          chooseSrc: 2,
        })
      );
    }
    if (key === "7-2") {
      console.log("lable " + key);
      dispatch(
        ChangeStream({
          id: id,
          chooseSrc: 1,
        })
      );
    }
    if (key === "2") {
      console.log(label);
      dispatch(RemoveALLVideo());
    }
    if (key === "5") {
      console.log(label);
    }
    if (key === "aspect_D") {
      console.log(label);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_1_1") {
      console.log(key);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_4_3") {
      console.log(key);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_3_4") {
      console.log(key);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_5_4") {
      console.log(key);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_4_5") {
      console.log(key);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_16_9") {
      console.log(key);
      setOneAspectratio(id, key);
    }
    if (key === "aspect_9_16") {
      console.log(key);
      setOneAspectratio(id, key);
    }
  };

  // menu for drop down video from close the stream & change aspect ratio & screen shot

  const menu = (
    <Menu
      onClick={onClickAspect}
      items={[
        {
          key: "1",
          icon: <Close />,
          label: <a>Close video</a>,
        },
        {
          key: "2",
          icon: <CloseAll />,
          label: <a>Close all video</a>,
        },
        {
          key: "7",
          icon: <Stream />,
          label: <a>Stream Type</a>,
          children: [
            {
              key: "7-1",
              label: "Main Stream",
              className: `stream_${chooseSrc}`,
            },
            {
              key: "7-2",
              label: "Sub Stream",
              className: `stream_${chooseSrc}`,
            },
          ],
        },
        // {
        //   key: "3",
        //   icon: <Volume3 />,
        //   label: <a>Start Audio</a>,
        // },
        // {
        //   key: "4",
        //   icon: <VideoCamera />,
        //   label: <a>Start Record</a>,
        // },
        {
          key: "5",
          icon: <Snapshot />,
          label: (
            <a
              onClick={() => {
                captureSnapshot();
              }}
            >
              Snapshot
            </a>
          ),
        },
        {
          key: "6",
          icon: <Scale />,
          label: <a>Window Scale</a>,
          children: [
            {
              key: "aspect_D",
              label: "Original",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_1_1",
              label: "1:1",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_4_3",
              label: "4:3",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_3_4",
              label: "3:4",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_5_4",
              label: "5:4",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_4_5",
              label: "4:5",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_16_9",
              label: "16:9",
              className: `${aspectRatio}`,
            },
            {
              key: "aspect_9_16",
              label: "9:16",
              className: `${aspectRatio}`,
            },
          ],
        },
        {
          key: "8",
          icon: <FullScreen />,
          label: <a onClick={toggleFullScreen}>Full Screen</a>,
        },
      ]}
    />
  );

  // change WebRTC url to play in video component
  useEffect(() => {
    console.log(StreamLink);
    if (StreamLink !== "") {
      console.log("headerShow" + headerShow);
      setLottieChange(true);
      setLottieOffChange(false);
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
          let url = StreamLink;
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
                webrtc.setRemoteDescription(
                  new RTCSessionDescription({
                    type: "answer",
                    sdp: atob(data),
                  })
                );
                setLottieChange(false);
              } catch (e) {
                console.warn(e);
                setLottieChange(false);
                setLottieOffChange(true);
                setTimeout(() => {
                  setCounter(counter + 1);
                }, 10000);
              }
            });
        }

        // function startPlay() {
        let videoEl = document.querySelector("#webrtc-video");

        webrtc.onnegotiationneeded = handleNegotiationNeeded;
        webrtc.ontrack = function (event) {
          // console.log(event.streams.length + " track is delivered");
          // console.log(event.streams);
          if (StreamLink !== "") xref.current.srcObject = event.streams[0];

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
          console.log("sendChannel has closed");
          setLottieChange(false);
          setLottieOffChange(true);
          setTimeout(() => {
            setCounter(counter + 1);
          }, 10000);
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
      } catch (error) {
        console.log(error);
      }
    }
  }, [StreamLink, counter]);

  if (StreamLink !== "") {
    return (
      // drop down menu for close the stream & change aspect ratio & screen shot
      <Dropdown
        overlay={menu}
        trigger={["contextMenu"]}
        onContextMenu={() => setIdForDeleteVideo(id)}
        className="drop_live"
      >
        <div
          className="video-card"
          // show header component
          onMouseEnter={() => {
            console.log(id);
            dispatch(SetHeader(id));
          }}
          // hide header component
          onMouseLeave={() => {
            dispatch(HideHeader(id));
          }}
        >
          {/* video component for play the stream url */}
          <video
            id={id}
            ref={xref}
            onDoubleClick={toggleFullScreen}
            autoPlay
            muted
          ></video>
          {/* header for stream witn screen shot and close stream button */}
          {headerShow && (
            <LiveViewVideoHeader
              id={id}
              screenShot={true}
              captureSnapshot={captureSnapshot}
              setLottieOffChange={setLottieOffChange}
            />
          )}
          {/* canvas for holding the screen shot for stream */}
          <canvas
            id="capture"
            width="1024"
            height="640"
            style={{ display: "none" }}
          ></canvas>
          {/* screen shot from stream */}
          <img
            id="my-screenshot"
            style={{ display: "none" }}
            alt="screenshot"
          />
        </div>
      </Dropdown>
    );
  } else return null;
};

export default VideoCard;
