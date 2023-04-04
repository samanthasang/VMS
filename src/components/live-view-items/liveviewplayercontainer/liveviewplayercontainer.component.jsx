import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Dropdown, Row } from "antd";
import LivaeViewPlayer from "../liveviewplayer/liveviewplayer.component";

import "./liveviewplayercontainer.styles.scss";
import LiveViewVideoHeader from "../live-view-video-header/live-view-video-header.component";
import {
  AddVideo,
  AddVideoASpectOne,
} from "../../../redux/liveView_redux/liveViewAction";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import * as animationData2 from "../../../assets/lottieFiles/anime3.json";
import * as animationData1 from "../../../assets/lottieFiles/AnimeNot.json";

const LivaeViewPlayerContainer = ({
  src,
  id,
  span,
  headerShow,
  height,
  src2,
  chooseSrc,
  aspectRatio,
}) => {
  const dispatch = useDispatch();
  // getting the windows information for live stream
  const window = useSelector((state) => state.liveView.Windows.window);

  // stearm link for play the live stream
  const [StreamLink, setStreamLink] = useState("");
  // animation for loading the live video
  const [lottie, setLottie] = useState(false);
  // animation for failing to load the live stream
  const [lottieOff, setLottieOff] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // change the aspect ratio for live stream
  const setOneAspectratio = (c, aspect) => {
    dispatch(AddVideoASpectOne({ id: c, aspect: aspect }));
  };
  // anable or disable the loading animation
  const setLottieChange = (des) => {
    setLottie(des);
  };
  // anable or disable the failing animation
  const setLottieOffChange = (des) => {
    setLottie(false);
    setLottieOff(des);
  };

  // choosing the main stream or sub stream for playing the live stream
  useEffect(() => {
    chooseSrc === 1 ? setStreamLink(src) : setStreamLink(src2);
  }, [chooseSrc, src, src2]);

  // give the steam info to the component to show the stream
  const handleChangeInput = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const srcs = event.target.value;

    let [src, src2] = srcs.split(",");
    if (src2.trim() === "") {
      event = null;
      src = "";
      src2 = "";
      setInputValue(src2);
      return;
    }
    console.log("id " + event.target.id);
    console.log("SRC " + src);
    console.log("SRC2 " + src2);
    dispatch(
      AddVideo({
        id: id,
        src: src,
        src2: src2,
      })
    );
  };
  // load the animation asset
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // load the animation asset
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Col
      key={id}
      span={span}
      className={`live_view_video_container ${window} ${aspectRatio} `}
      style={{
        height: `${height}`,
      }}
    >
      {src !== "" ? (
        // playing the stream
        <LivaeViewPlayer
          StreamLink={StreamLink}
          aspectRatio={aspectRatio}
          setLottieChange={setLottieChange}
          setLottieOffChange={setLottieOffChange}
          chooseSrc={chooseSrc}
          id={id}
          setOneAspectratio={setOneAspectratio}
          headerShow={headerShow}
        />
      ) : (
        // anable when no stream is playing
        // ready to getting the stream information
        <input
          id={id}
          type="url"
          value={inputValue || ""}
          onContextMenu={(event) => event.preventDefault()}
          onChange={handleChangeInput}
        ></input>
      )}
      {/* the loading animation */}
      {lottie && (
        <Row
          onContextMenu={(event) => event.preventDefault()}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          <Col onContextMenu={(event) => event.preventDefault()} span={24}>
            <Lottie
              options={defaultOptions2}
              onContextMenu={(event) => event.preventDefault()}
            />
            <span className="title_not_found">Searching Camera . . .</span>
          </Col>
        </Row>
      )}
      {/* the failing animation */}
      {lottieOff && (
        <Row
          onContextMenu={(event) => event.preventDefault()}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          {/* header for stream witn screen shot and close stream button */}
          <Col span={24} onContextMenu={(event) => event.preventDefault()}>
            <Lottie
              options={defaultOptions1}
              onContextMenu={(event) => event.preventDefault()}
            />
            <span className="title_not_found">Camera is not found . . .</span>
            <LiveViewVideoHeader
              id={id}
              screenShot={false}
              setLottieOffChange={setLottieOffChange}
            />
          </Col>
        </Row>
      )}
    </Col>
  );
};

export default LivaeViewPlayerContainer;
