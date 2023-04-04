import { useEffect, useState } from "react";
import "./clock.styles.scss";
const ClockDemo = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div
      className="clk"
      style={{
        padding: "0 4px",
        height: "45px",
      }}
    >
        {dateState.toLocaleString("en-US-u-hc-h23", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
          hourCycle: "h23",
        })}
    </div>
  );
};

export default ClockDemo;
