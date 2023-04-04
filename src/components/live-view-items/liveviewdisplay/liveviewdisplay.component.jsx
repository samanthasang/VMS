import React from "react";

import { Col, Row } from "antd";
import "./liveviewdisplay.styles.scss";

import { useSelector } from "react-redux";
import LivaeViewPlayerContainer from "../liveviewplayercontainer/liveviewplayercontainer.component";

const LiveViewDisplay = () => {
  // getting the windows information for live videos
  const windows = useSelector((state) => state.liveView.Windows);
  // getting the windows video data for live videos
  const windows_video = useSelector((state) => state.liveView.Windows_video);

  // getting the windows video data for live videos
  const windows_single_video = useSelector(
    (state) => state.liveView.Windows_single_video
  );

  // getting the windows video data for live videos
  const windows_single_video1 = useSelector(
    (state) => state.liveView.Windows_single_video1
  );
  // change to 5 or 7 windows with main stream video or normal windows
  const custom = useSelector((state) => state.liveView.customView);

  return (
    <Col span={24} style={{ height: "100%" }} id="live_view_container">
      <Row style={{ height: "100%", background: "#21242c" }}>
        {/* if in 5 or 7 wondow mode in main stream video is on */}
        {custom ? (
          <>
            {/* main stream video in 5 or 7 window mode */}
            {windows_video.map(
              ({ id, headerShow, src, src2, chooseSrc, aspectRatio }) => (
                <LivaeViewPlayerContainer
                  span={windows.span}
                  chooseSrc={chooseSrc}
                  aspectRatio={aspectRatio}
                  id={id}
                  src={src}
                  src2={src2}
                  headerShow={headerShow}
                  height={windows.height}
                />
              )
            )}
            <Row
              style={{
                float: "right",
                height: `${windows.height1}`,
                width: `${windows.width1}`,
              }}
            >
              {/* sub stream video in 5 or 7 window mode */}
              {windows_single_video.map(
                ({ id, headerShow, src, src2, chooseSrc, aspectRatio }) => (
                  <LivaeViewPlayerContainer
                    span={windows.span1}
                    chooseSrc={chooseSrc}
                    aspectRatio={aspectRatio}
                    id={id}
                    src={src}
                    src2={src2}
                    headerShow={headerShow}
                    height={windows.heightcol1}
                  />
                )
              )}
            </Row>
            <Row
              style={{
                float: "right",
                height: `${windows.height2}`,
                width: `${windows.width2}`,
              }}
            >
              {/* sub stream video in 5 or 7 window mode */}
              {windows_single_video1.map(
                ({ id, headerShow, src, src2, chooseSrc, aspectRatio }) => (
                  <LivaeViewPlayerContainer
                    span={windows.span2}
                    chooseSrc={chooseSrc}
                    aspectRatio={aspectRatio}
                    id={id}
                    src={src}
                    src2={src2}
                    headerShow={headerShow}
                    height={windows.heightcol2}
                  />
                )
              )}
            </Row>
          </>
        ) : (
          //   streams video in normal window mode
          windows_video.map(
            ({ id, src, src2, headerShow, chooseSrc, aspectRatio }) => (
              <LivaeViewPlayerContainer
                span={windows.span}
                chooseSrc={chooseSrc}
                aspectRatio={aspectRatio}
                id={id}
                src={src}
                src2={src2}
                headerShow={headerShow}
                height={windows.height}
              />
            )
          )
        )}
      </Row>
    </Col>
  );
};

export default LiveViewDisplay;
