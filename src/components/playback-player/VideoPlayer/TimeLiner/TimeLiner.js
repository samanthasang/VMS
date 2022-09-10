import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataSet, Timeline } from "vis-timeline/standalone";

import { PlayerBehaviorChange } from "../../../../redux/PlayerBehavior/PlayerBehaviorAction";

import "vis-timeline/styles/vis-timeline-graph2d.min.css";

import "./TimeLiner.css";

export default function TimeLiner(props) {
  const domNode = useRef(null);
  const timeline = useRef(null);
  //Reference element of the Custom timeline item that is used to display the current time
  const videoTimeUpdateIntervalRef = useRef(null);
  //State of the video player behavior
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  const dispatch = useDispatch();
  //Reference to the video player
  const playerRefObjectOnTimeLiner = props.playerRefObjectOnTimeLiner;

  const startTime = "2022-07-26T15:15:00";

  function loadData(data) {
    //   items.update(data);
    items.clear();
    items.add(data);
  }

  var items = new DataSet();

  var options = {
    align: "right",
    // autoResize: false,
    editable: true,
    showMajorLabels: false,
    height: "4rem",
    start: startTime,
    end: "2022-07-26T15:18:30",
    min: startTime,
    max: "2022-07-26T15:18:30",
    zoomMin: 60000,
    verticalScroll: false,
    stack: false,
    showWeekScale: true,
    // maxMinorChars: 7,
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/fakeHttpDataset")
      .then((res) => {
        console.log(res.data);
        loadData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("timeline made");
    timeline.current = new Timeline(domNode.current, items, options);
    timeline.current.addCustomTime(startTime, 1);
    timeline.current.setCustomTimeMarker(
      new Date(startTime).toLocaleString(),
      1
    );
  }, []);

  useEffect(() => {
    timeline.current.on("timechange", function (event) {
      playerRefObjectOnTimeLiner.current.seekTo(
        (timeline.current.getCustomTime(1).valueOf() -
          new Date(startTime).valueOf()) /
          1000
      );
      timeline.current.setCustomTimeMarker(
        ` ${new Date(
          timeline.current.getCustomTime(1).valueOf()
        ).toLocaleString()}`,
        1
      );
    });
  }, []);

  useEffect(() => {
    if (!PlayerBehaviorState.playing) {
      clearInterval(videoTimeUpdateIntervalRef.current);
    } else {
      videoTimeUpdateIntervalRef.current = setInterval(() => {
        timeline.current.setCustomTime(
          new Date(startTime).valueOf() +
            playerRefObjectOnTimeLiner.current.getCurrentTime() * 1000,
          1
        );

        timeline.current.setCustomTimeMarker(
          ` ${new Date(
            timeline.current.getCustomTime(1).valueOf() + 1000
          ).toLocaleString()}`,
          1
        );
        // timeline.current.fit();
      }, 100);
    }
  }, [PlayerBehaviorState.playing]);

  return (
    <div className="timeliner">
      <div ref={domNode} />
      <div
        onClick={() => {
          console.log("Click XXXXXXXXX");

          items.update([
            {
              id: 772,
              editable: true,

              start: "2022-07-26T15:15:55",
              end: "2022-07-26T15:16:20",
              type: "background",
              style: "background-color: rgba(23, 230, 255, 0.7 );",
              className: "positive",
            },
          ]);
        }}
      >
        Click XXXXXXXXX
      </div>
    </div>
  );
}
