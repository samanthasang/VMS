import { useDispatch, useSelector } from "react-redux";
import { Slider } from "antd";
import { PlayerBehaviorChange } from "../../../../../redux/PlayerBehavior/PlayerBehaviorAction";
import { useEffect } from "react";

export default function VolumeOverflow() {
  const dispatch = useDispatch();
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  const onChange = (value) => {
   
    dispatch(
      PlayerBehaviorChange({
        ...PlayerBehaviorState,
        muted: false,
        volume: value / 100
      })
    );

    console.log("onChange: ", value);
  };

  const onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };

  return (
    <Slider
      vertical
      defaultValue={70}
      onChange={onChange}
      onAfterChange={onAfterChange}
      style={{
        height: "5rem",
        margin: "auto",
        background: "transparent"
      }}
    />
  );
}
