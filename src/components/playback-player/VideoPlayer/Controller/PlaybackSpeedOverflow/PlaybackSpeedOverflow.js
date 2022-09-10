import { useDispatch, useSelector } from "react-redux";
import { Slider } from "antd";
import { PlayerBehaviorChange } from "../../../../../redux/PlayerBehavior/PlayerBehaviorAction";
import { useEffect } from "react";

export default function PlaybackSpeedOverflow() {
  const dispatch = useDispatch();
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);

  const onChange = (value) => {
    switch (value) {
      case 0:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 1,
          })
        );
        break;

      case 1:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 2,
          })
        );
        break;

      case 2:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 4,
          })
        );
        break;

      case 3:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 8,
          })
        );
        break;

      case -1:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 1 / 2,
          })
        );
        break;

      case -2:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 1 / 4,
          })
        );
        break;

      case -3:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 1 / 8,
          })
        );
        break;

      default:
        dispatch(
          PlayerBehaviorChange({
            ...PlayerBehaviorState,
            playbackRate: 1,
          })
        );
    }

    console.log("onChange: ", value);
  };

  const onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };

  return (
    <Slider
      tooltipVisible={false}
      // dots= { true}
      min={-3}
      max={3}
      vertical
      defaultValue={0}
      onChange={onChange}
      onAfterChange={onAfterChange}
      style={{
        height: "5rem",
        margin: "auto",
        background: "transparent",
       
      }} 
      handleStyle={{ borderColor: "#1245a1",backgroundColor: "rgb(113 150 156)" }}
      trackStyle={{ backgroundColor: "black"
      ,height: "5rem"
     }}
    />
  );
}
