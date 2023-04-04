import React from "react";
import "./playback-footer-panel.styles.scss";
import { Button, Col } from "antd";
import { FullScreen } from "../../../assets/Icons/JSXs/index";
// import { useDispatch } from "react-redux";
// import { SetWindow } from "../../../redux/liveView_redux/liveViewAction";
// import { SelectedVideoPlayerAndPlayerUrlsChange } from "../../../redux/SelectedVideoPlayerAndPlayerUrls/SelectedVideoPlayerAndPlayerUrlsAction";
const PlayBackFooterPanel = ({
  onToggleFullScreen,
  handlecameraCheckedNumber,
}) => {
  // const dispatch = useDispatch();

  // const handle_4 = () => {
  //   dispatch(SelectedVideoPlayerAndPlayerUrlsChange(4));
  //   console.log("W4");
  // };
  // const handle_1 = () => {
  //   // dispatch(
  //   //   SetWindow({
  //   //   })
  //   // );
  //   dispatch(SelectedVideoPlayerAndPlayerUrlsChange(1));
  //   console.log("W1");
  // };
  return (
    <Col span={8} className="footer_icon_live_view">
      {/* full screnn BTn */}
      <Button icon={<FullScreen />} onClick={onToggleFullScreen} />
      {/* <Button icon={<W1 />} onClick={handlecameraCheckedNumber} /> 
      <Button icon={<W4 />} onClick={handlecameraCheckedNumber} /> */}
    </Col>
  );
};

export default PlayBackFooterPanel;
