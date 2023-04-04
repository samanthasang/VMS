import React from "react";
import "./liveviewplayer.styles.scss";
import VideoCard from "../../generals-items/video-cart/videocart";

const LivaeViewPlayer = ({
  StreamLink,
  id,
  setOneAspectratio,
  setLottieChange,
  setLottieOffChange,
  headerShow,
  aspectRatio,
  chooseSrc,
}) => {
  // handle aspect ratio for the stream
  const handleSetChooseVideoSrc = (id, aspect) => {
    setOneAspectratio(id, aspect);
  };

  return (
    // video comonent for play the stream
    <VideoCard
      StreamLink={StreamLink}
      setLottieChange={setLottieChange}
      setLottieOffChange={setLottieOffChange}
      setOneAspectratio={handleSetChooseVideoSrc}
      headerShow={headerShow}
      aspectRatio={aspectRatio}
      chooseSrc={chooseSrc}
      id={id}
      vtype="webrtc"
      className="widown"
    />
  );
};

export default LivaeViewPlayer;
