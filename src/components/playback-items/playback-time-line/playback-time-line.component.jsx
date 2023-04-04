import React, { useEffect, useState } from "react";
import Timeline from "react-visjs-timeline";
import moment from "moment";

import "./playback-time-line.styles.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddCutTimePlayBack } from "../../../redux/playback_redux/playbackAction";
import { useRef } from "react";
import { forwardRef } from "react";

const TimeLiner = forwardRef(
  (
    {
      played,
      totalDuration,
      elapsedTime,
      handleonSeek,
      handlePause,
      handlePlay,
      handleCountT,
      handleCountF,
    },
    ref
  ) => {
    const dispatch = useDispatch();
    // get the enable or disable for cut BTN
    const cutIsOn = useSelector((state) => state.playback.cutIsOn);
    // set start & end of timeline
    const [state, setState] = useState({
      startTime: 1665693000000,
      endTime: 1665693000000,
    });
    // start time for timeline
    const [startTimeleft21, setStartTimeleft21] = useState(1672518600000);
    // end time for timeline
    const [endTimeRight21, setEndTimeRight21] = useState(1672522200000);
    // start time for cut
    const [startTimeleft2, setStartTimeleft2] = useState(1673163000963);
    // end time for cut
    const [endTimeRight2, setEndTimeRight2] = useState(1673163000963);
    // refrense for time lin
    const timelineRef = useRef(null);
    // cursor time
    const acitiveDate = useSelector((state) => state.playback.AcitiveDate);
    // total duration for video & timeline
    const duriation = useSelector((state) => state.playback.duriation);
    // get the url for video
    const url = useSelector((state) => state.playback.urls[0]);

    // get elapse time & format to "YYYY/MM/DD  HH:mm:ss"
    var elTime =
      Number(elapsedTime.split(":")[0] * 60) +
      Number(elapsedTime.split(":")[1]);

    // set the start time for cut time
    const setcutTime = () => {
      console.log("setcutTime");
      console.log(
        "startTimeleft2 startTimeleft2 " +
          moment(startTimeleft2).format("YYYY/MM/DD  HH:mm:ss")
      );
      console.log(
        "endTimeRight2 endTimeRight2 " +
          moment(endTimeRight2).format("YYYY/MM/DD  HH:mm:ss")
      );

      !cutIsOn &&
        setStartTimeleft2(
          moment(acitiveDate.startDate)
            .add(elTime, "s")
            .format("YYYY/MM/DD  HH:mm:ss")
        );
      !cutIsOn &&
        setEndTimeRight2(
          moment(acitiveDate.startDate)
            .add(elTime + duriation / 10, "s")
            .format("YYYY/MM/DD  HH:mm:ss")
        );
    };

    useEffect(() => {
      // enable the cut time
      setcutTime();
      console.log("url url " + url.url);

      // set start time for timeline to default if video not loaded
      duriation !== null
        ? setStartTimeleft21(acitiveDate.startDate)
        : setStartTimeleft21(1672518600000);

      // set end time for timeline to default if video not loaded
      duriation !== null
        ? setEndTimeRight21(acitiveDate.endDate)
        : setEndTimeRight21(1672522200000);

      // set start of time line to default if video not loaded
      url.url === "" && setStartTimeleft21(1672518600000);

      // set end of time line to default if video not loaded
      url.url === "" && setEndTimeRight21(1672522200000);
    }, [acitiveDate, elapsedTime, elTime, duriation, cutIsOn, url]);

    // handle clicking on timeline
    function clickHandler(props) {
      handleCountF();
      console.log("time " + totalDuration);
      console.log("duration duration " + duriation);
      console.log(props.event);
    }

    // handle the zoom in or zoom out on timeline
    function rangeChangeHandler(props) {
      if (props.byUser) {
        console.log(props.byUser);
        setState({
          ...state,
          startTime: moment(props.start).valueOf(),
          endTime: moment(props.end).valueOf(),
        });
      }
    }

    // cursor & cut range item on timeline
    var items = [
      {
        id: 2,
        start: startTimeleft2,
        end: endTimeRight2,
        type: "range",
        editable: { updateTime: true },
        height: "39px",
      },
      {
        id: 1,
        start: moment(acitiveDate.startDate)
          .add(elTime, "s")
          .format("YYYY/MM/DD  HH:mm:ss"),
        type: "box",
        editable: { updateTime: true },
        focus: true,
      },
    ];

    // option for timeline component
    const options = {
      width: "100%",
      height: "5rem",
      start: moment(startTimeleft21).format("MM/DD/YYYY  HH:mm:ss"),
      end: moment(endTimeRight21).format("MM/DD/YYYY  HH:mm:ss"),
      min: moment(startTimeleft21).format("MM/DD/YYYY  HH:mm:ss"),
      max: moment(endTimeRight21).format("MM/DD/YYYY  HH:mm:ss"),
      stack: false,
      showMajorLabels: true,
      showCurrentTime: false,
      zoomable: false,
      type: "background",
      editable: {
        add: true, // add new items by double tapping
        updateTime: true, // drag items horizontally
        updateGroup: true, // drag items from one group to another
        remove: true, // delete an item by tapping the delete button top right
        overrideItems: true, // allow these options to override item.editable
      },
      format: {
        minorLabels: {
          minute: "HH:mm",
          hour: "HH",
        },
      },
      onRemove: function (objectData, item) {
        if (!item) {
          return;
        }
        console.log(objectData.id);
        console.log(items);
      },
      // change the time for cut range item
      onMove: function (objectData, item) {
        if (!item) {
          return;
        }
        var ts = moment(objectData.start).valueOf();
        var te = moment(objectData.end).valueOf();
        var totalM = Number(moment(acitiveDate.endDate).minutes() * 60);
        var totalS = Number(moment(acitiveDate.endDate).second());
        var elipM =
          (moment(objectData.start).minutes() -
            moment(acitiveDate.startDate).minutes()) *
          60;
        var elipS =
          moment(objectData.start).second() -
          moment(acitiveDate.startDate).second();
        var totalSS = Number(totalM + totalS);
        var eliSS = Number(elipM + elipS);
        if (objectData.id === 1) {
          console.log(
            "moment(objectData.start)     " +
              moment(acitiveDate.endDate).minutes()
          );
          console.log(
            "moment(objectData.start)     " +
              moment(acitiveDate.startDate).second()
          );
          console.log(
            "moment(objectData.start)minutes     " +
              moment(objectData.start).minutes() -
              moment(acitiveDate.startDate).minutes()
          );
          console.log(
            "moment(objectData.start)minutes     " +
              moment(objectData.start).second() -
              moment(acitiveDate.startDate).second()
          );
          console.log("totalDuration     " + totalDuration);
          console.log("duriation     " + duriation);
          console.log("totalSS     " + totalSS);
          console.log(elipM + elipS);
          console.log(eliSS / duriation);
          handleonSeek(eliSS / duriation);
        }
        if (objectData.id === 2) {
          console.log(ts + "   " + te);

          setStartTimeleft2(ts);
          setEndTimeRight2(te);
          dispatch(AddCutTimePlayBack({ startTime: ts, endTime: te }));
        }
        handleCountT();
        console.log(
          'dropped object with content: "' +
            objectData.start +
            '" to item: "' +
            '"'
        );
      },
    };

    return (
      <div className={`${cutIsOn ? "timeliner" : "timeliner dN"}`}>
        {/* timeline component from react-visjs-timeline */}
        <Timeline
          ref={timelineRef}
          clickHandler={clickHandler}
          options={options}
          items={items}
          // itemoverHandler={mouseInHandler}
          // itemoutHandler={mouseExitHandler}
          rangechangeHandler={rangeChangeHandler}
        />
      </div>
    );
  }
);
export default TimeLiner;
