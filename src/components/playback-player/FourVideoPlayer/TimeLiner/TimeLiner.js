import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataSet, Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

import "./TimeLiner.css";

export default function TimeLiner(props) {
  const domNode = useRef(null);
  const timeline = useRef(null);
  //Reference element of the Custom timeline item that is used to display the current time
  const videoTimeUpdateIntervalRef = useRef(null);
  //State of the video player behavior
  const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
  //Reference to the video player
  const playerRefObjectOnTimeLiner = props.playerRefObjectOnTimeLiner;

  const playerRefObject1 = props.playerRefObject1;
  const playerRefObject2 = props.playerRefObject2;
  const playerRefObject3 = props.playerRefObject3;
  const playerRefObject4 = props.playerRefObject4;

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
    height: "10vh",
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

  axios
    .get("http://localhost:3000/fakeHttpDataset")
    .then((res) => {
      console.log(res.data);
      loadData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

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
      playerRefObject1.current.seekTo(
        (timeline.current.getCustomTime(1).valueOf() -
          new Date(startTime).valueOf()) /
          1000
      );
      playerRefObject2.current.seekTo(
        (timeline.current.getCustomTime(1).valueOf() -
          new Date(startTime).valueOf()) /
          1000
      );
      playerRefObject3.current.seekTo(
        (timeline.current.getCustomTime(1).valueOf() -
          new Date(startTime).valueOf()) /
          1000
      );
      playerRefObject4.current.seekTo(
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
            playerRefObject1.current.getCurrentTime() * 1000,
          1
        );

        timeline.current.setCustomTimeMarker(
          ` ${new Date(
            timeline.current.getCustomTime(1).valueOf() + 1000
          ).toLocaleString()}`,
          1
        );
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
              id: "background_all-test",
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

// import axios from "axios";
// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { DataSet, Timeline } from "vis-timeline/standalone";
// import "vis-timeline/styles/vis-timeline-graph2d.min.css";

// import "./TimeLiner.css";

// export default function TimeLiner(props) {
//   const domNode = useRef(null);
//   const timeline = useRef(null);
//   //Reference element of the Custom timeline item that is used to display the current time
//   const videoTimeUpdateIntervalRef = useRef(null);
//   //State of the video player behavior
//   const PlayerBehaviorState = useSelector((state) => state.PlayerBehaviorState);
//   //Reference to the video player
//   const playerRefObjectOnTimeLiner = props.playerRefObjectOnTimeLiner;
//   //ID of the Custom timeline item that is used to display the current time
//   const helloID1 = "helloID1";
//   const startTime = "2022-07-26T15:15:00";

//   axios
//     .get("http://localhost:3000/posts/1")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   const fakeHttpDataset = [
//     {
//       id: 1,
//       content: "hi",
//       editable: true,
//       start: "2022-02-19T20:45:35",
//       style:
//         "opacity: 70% ;border: none ;color: #000000; background-color: rgb(15 243 255);height: 20px;text-size: 10px;display: flex;align-items: center;justify-content: center;",
//     },
//     {
//       id: 5,
//       content: `
//        hi
//      `,
//       editable: true,
//       start: "2022-07-26T15:16:04",
//       style:
//         "opacity: 70% ;border: none ;color: #000000; background-color: rgb(15 243 255);height: 20px;text-size: 10px;display: flex;align-items: center;justify-content: center;",
//     },
//     // {id: 2, content: 'item 2', start: '2014-04-14'},
//     // {id: 3, content: 'item 3', start: '2014-04-18T03:24:00'},
//     {
//       id: 4,
//       content: "item 4",
//       height: "100%",
//       editable: true,
//       start: "2022-02-19T20:46:05",
//       end: "2022-02-19T20:47:05",
//     },
//     {
//       id: "background_all",
//       editable: true,

//       start: "2022-07-26T15:15:15",
//       end: "2022-07-26T15:15:30",
//       type: "background",
//       style: "background-color: rgba(15, 243, 255, 0.7 );",
//       className: "positive",
//     },
//     // {id: 5, content: 'item 5', start: '2014-04-25'},
//     // {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
//   ];

//   fakeHttpDataset.push({
//     id: "background_all-test",
//     editable: true,

//     start: "2022-07-26T15:15:45",
//     end: "2022-07-26T15:15:58",
//     type: "background",
//     style: "background-color: rgba(23, 230, 255, 0.7 );",
//     className: "positive",
//   });

//   const items = new DataSet(fakeHttpDataset);

//   var options = {
//     align: "right",
//     // autoResize: false,
//     showMajorLabels: false,
//     height: "10vh",
//     start: startTime,
//     end: "2022-07-26T15:18:30",
//     min: startTime,
//     max: "2022-07-26T15:18:30",
//     zoomMin: 60000,
//     verticalScroll: false,
//     stack: false,
//     showWeekScale: true,
//     // maxMinorChars: 7,
//   };

//   useEffect(() => {
//     if (timeline.current !== null) return;
//     timeline.current = new Timeline(domNode.current, items, options);
//     timeline.current.addCustomTime(startTime);
//     timeline.current.setCustomTimeMarker(new Date(startTime).toLocaleString());

//     timeline.current.on("timechange", function (event) {
//       console.log(event.time - new Date("2022-02-19T20:45:05"));

//       timeline.current.setCustomTimeMarker(
//         ` ${new Date(
//           timeline.current.getCustomTime().valueOf()
//         ).toLocaleString()}`
//       );

//       playerRefObjectOnTimeLiner.current.seekTo(
//         (timeline.current.getCustomTime().valueOf() -
//           new Date(startTime).valueOf()) /
//           1000
//       );

//       console.log(
//         timeline.current.getCustomTime().valueOf() -
//           new Date(startTime).valueOf()
//       );
//     });
//   }, [domNode, timeline, items, options]);

//   const onPlayHandler = () => {
//     videoTimeUpdateIntervalRef.current = setInterval(() => {
//       timeline.current.setCustomTime(
//         new Date(startTime).valueOf() +
//           playerRefObjectOnTimeLiner.current.getCurrentTime() * 1000
//       );

//       timeline.current.setCustomTimeMarker(
//         ` ${new Date(
//           timeline.current.getCustomTime().valueOf() + 1000
//         ).toLocaleString()}`
//       );

//       console.log(
//         new Date("2022-02-19T20:45:05").valueOf() +
//           playerRefObjectOnTimeLiner.current.getCurrentTime() * 1000
//       );

//       console.log("hello");
//     }, 100);
//   };

//   const onPauseHandler = () => {
//     clearInterval(videoTimeUpdateIntervalRef.current);
//   };

//   useEffect(() => {
//     if (!PlayerBehaviorState.playing) {
//       onPauseHandler();
//     } else {
//       onPlayHandler();
//     }
//   }, [PlayerBehaviorState.playing]);

//   return (
//     <div className="timeliner">
//       <div ref={domNode} />
//     </div>
//   );
// }
