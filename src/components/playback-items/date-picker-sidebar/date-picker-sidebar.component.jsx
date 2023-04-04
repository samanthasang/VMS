import React, { useEffect, useState } from "react";
import { Col, DatePicker } from "antd";
import "./date-picker-sidebar.styles.scss";
import SubminBTN from "../../form-items/submitbtn/submitbtn.component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ActiveDate,
  AddCutPlayBack,
  AddDurationPlayBack,
  AddVideoPlayBack,
  DisableDate,
  LoadingErrorPlayBack,
  LoadingPlayBack,
  LoadingVideoPlayBack,
} from "../../../redux/playback_redux/playbackAction";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import moment from "moment";
import axios from "axios";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import OpenNotification from "../../form-items/notification/notification.component";

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const DatePickerSideBar = () => {
  const dispatch = useDispatch();

  // get the user information
  const user = useSelector((state) => state.login.user);
  // disable start datepicker
  const [disableInput, setDisableInput] = useState(true);
  // disable end datepicker
  const [disableInputend, setDisableInputEnd] = useState(true);
  // disable submit BTN
  const [disableButton, setDisableButton] = useState(true);
  // disable hours
  const [disabledHours, setDisabledHours] = useState(false);
  // disable minutes
  const [disabledMins, setDisabledMins] = useState(false);
  // disable seconds
  const [disabledSecs, setDisabledSecs] = useState(false);
  // disable start date
  const [disabledDates, setDisabledDates] = useState(false);
  // disable end date
  const [disabledDatesEnd, setDisabledDatesEnds] = useState([]);
  // start date & end date for getting the video file
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  // checking the camera has been selected or not
  const cameraChecked = useSelector((state) => state.playback.cameraChecked);
  // camera id for getting the video file
  const idForGetDate = useSelector((state) => state.playback.cameraID);

  // get the video from the API for the selected camera
  const handlePlayback = async () => {
    dispatch(LoadingVideoPlayBack(true));
    var url = process.env.REACT_APP_HTTP + "/api/playback/" + idForGetDate;

    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var data = {
      startTime: moment(dates.startDate).unix(),
      endTime: moment(dates.endDate).unix(),
    };

    idForGetDate &&
      (await axios.post(url, data, config).then(
        (res) => {
          console.log(res.data.data);
          console.log(res.data.data.duration);
          console.log(res.data.satus);

          dispatch(LoadingPlayBack(false));
          dispatch(LoadingVideoPlayBack(false));
          dispatch(AddVideoPlayBack({ id: 1, src: res.data.data.videoURL }));
          dispatch(AddDurationPlayBack(res.data.data.duration));
        },
        (error) => {
          console.log(error);
          console.log(error.response.status);
          setDisableButton(false);
          error.response.status === 401 && dispatch(UserLogOut());
          setDisableInput(false);
          setDisableInputEnd(true);
          setDisableButton(true);
          dispatch(LoadingErrorPlayBack(true));
          dispatch(LoadingVideoPlayBack(true));
        }
      ));
  };

  // submit the get AvailableDays API
  const handleSubmit = async () => {
    dispatch(LoadingPlayBack(true));
    dispatch(AddVideoPlayBack({ id: 1, src: "" }));
    dispatch(AddCutPlayBack(false));
    console.log("get cameraChecked " + cameraChecked);
    console.log("get startDate " + dates.startDate);
    console.log("get EndDate " + dates.endDate);
    dispatch(ActiveDate(dates));

    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow ? ReNewAccessTokenPlay() : handlePlayback();
  };

  // getting the start date & time
  const onChangeStart = (value, dateString, id) => {
    console.log("Selected Time id: ", id);
    console.log("Selected value: ", value);
    console.log("Selected Time: ", moment(value).valueOf());
    console.log("Formatted Selected Time: ", dateString.split(" ")[0]);
    if (value !== null) {
      console.log(
        "Formatted Selected Time: ",
        dateString.split(" ")[1].split(":")[0]
      );
      console.log(
        "Formatted Selected Time: ",
        dateString.split(" ")[1].split(":")[1]
      );
      console.log(
        "Formatted Selected Time: ",
        dateString.split(" ")[1].split(":")[2]
      );
      console.log(
        "Formatted Selected Time: ",
        dateString.split(" ")[1].split(":")[1]
      );
      setDisabledHours(dateString.split(" ")[1].split(":")[0]);
      setDisabledMins(dateString.split(" ")[1].split(":")[1]);
      setDisabledSecs(dateString.split(" ")[1].split(":")[2]);
      setDisableInputEnd(false);
      setDisabledDatesEnds([`${dateString.split(" ")[0]}`]);
      dispatch(DisableDate([`${dateString.split(" ")[0]}`]));
      setDates({ ...dates, startDate: moment(value).valueOf() });
    } else {
      console.log("Selected value: ", value);
      setDisableInputEnd(true);
      setDisableButton(true);
    }
  };
  // getting the end date & time
  const onChangeEnd = (value, dateString, id) => {
    console.log("Selected Time id: ", id);
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    if (value !== null) {
      setDisableButton(false);
      setDates({ ...dates, endDate: moment(value).valueOf() });
    } else {
      setDisableButton(true);
    }
  };
  const onClickD = (value, mode) => {
    console.log("value Time: ", value);
    console.log("mode Selected Time: ", mode);
  };

  // getting Available Days for the selected camera
  const AvailableDays = async () => {
    console.log("get AvailableDays");
    console.log("get AvailableDays    " + user.accessToken);
    console.log(user.expAccessToken);
    var url =
      process.env.REACT_APP_HTTP +
      "/api/playback/available-days/" +
      idForGetDate;

    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var data = {
      date: "1640982900",
    };
    idForGetDate &&
      axios
        .post(url, data, config)
        .then((res) => {
          console.log(res.data.data.exists);
          setDisabledDates(res.data.data.exists);
          if (cameraChecked.length !== 0) {
            setDisableInput(false);
          } else {
            setDisableInput(true);
          }
        })
        .catch((e) => {
          e.response.status === 404 &&
            OpenNotification(
              "topRight",
              "",
              "This camera has no recorded video",
              "error"
            );
          console.log(e);
        });
  };

  // renew the access token for play API
  const ReNewAccessTokenPlay = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
        res.status === 200 && handlePlayback();
      })
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };
  // renew the access token
  const ReNewAccessToken = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
        res.status === 200 && AvailableDays();
      })
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };

  // renew access token API
  useEffect(() => {
    console.log("get cameraChecked " + cameraChecked);
    console.log("get startDate " + dates.startDate);
    console.log("get endDate " + dates.endDate);

    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow ? ReNewAccessToken() : AvailableDays();

    // if (dates.startDate !== null && dates.endDate !== null) {
    //   setDisableButton(false);
    // } else {
    //   setDisableButton(true);
    // } console.log("r " + inputs.checked);
  }, [cameraChecked, dates, idForGetDate, user.expAccessToken]);

  // disable date for the selected camera
  const disabledDate = (current) => {
    console.log(
      !!!disabledDates.find(
        (date) => date === moment(current).format("YYYY-MM-DD")
      )
    );
    return !!!disabledDates.find(
      (date) => date === moment(current).format("YYYY-MM-DD")
    );
  };

  // disable end date base on start date
  const disabledDateEnd = (current) => {
    return (
      disabledDatesEnd.find(
        (date) => date > moment(current).format("YYYY-MM-DD")
      ) ||
      disabledDatesEnd.find(
        (date) => date < moment(current).format("YYYY-MM-DD")
      )
    );
  };
  // const hourEnd = Number(Number(disabledHours) + 2);
  const minStart = Number(Number(disabledMins) + 1);
  const minEnd = Number(Number(disabledMins));
  const sescStart = Number(Number(disabledSecs) + 1);
  var rangrsescEnd = [];
  var rangeMEnd = [];
  var curH = [];
  // var curHHH = [];

  // disable minute for end date picke base on start time
  const disalbeMin = (current) => {
    curH = moment(current).format("H");
    // curHHH = range(0, disabledHours) + "," + range(hourEnd, 24);
    curH !== moment(dates.startDate).format("H")
      ? (rangeMEnd = range(minEnd, 60))
      : (rangeMEnd = range(0, minStart));
    curH !== moment(dates.startDate).format("H")
      ? (rangrsescEnd = range(60, 60))
      : (rangrsescEnd = range(0, sescStart));
  };

  // getting the disable array for disableing the hour
  var arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  var hstart = moment(dates.startDate).format("H");
  arr = arr.filter(function (item) {
    console.log(hstart);
    return item !== Number(hstart) && item !== Number(hstart) + 1;
  });

  // disable hours base on choosing the start date & time for end datepicker
  const disabledDateTime = (current) => (
    moment(dates.startDate).format("H") &&
      console.log(
        "moment(dates.startDate)  " + moment(dates.startDate).format("H")
      ),
    moment(dates.startDate).format("H") && disalbeMin(current),
    console.log("disabledHours  " + disabledHours),
    console.log("current  " + moment(current).format("H")),
    console.log("range(12, 15)  " + arr),
    {
      disabledHours: () => arr,
      disabledMinutes: () => rangeMEnd,
      disabledSeconds: () => rangrsescEnd,
    }
  );
  // onOk btn in date picker
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  return (
    <Col
      span={24}
      offset={0}
      style={{
        background: "#21242C",
        padding: "0 16px",
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <span
        style={{
          background: "#14161A",
          textAlign: "center",
          display: "block",
          width: "114%",
          height: "36px",
          fontSize: "16px",
          margin: "0 0 24px -16px",
          padding: "6px",
        }}
      >
        Time
      </span>

      {/* getting the start date & tiem for searching the video file */}
      <span style={{ display: "block" }}>Start time: </span>

      <DatePicker
        showTime
        disabledDate={disabledDate}
        onChange={onChangeStart}
        onOpenChange={onClickD}
        onOk={onOk}
        id="startDate"
        disabled={disableInput}
        style={{
          width: "100%",
          margin: "8px 0 16px 0",
        }}
      />
      {/* getting the end date & tiem for searching the video file */}
      <span style={{ display: "block" }}>End time:</span>

      <DatePicker
        showTime
        disabledDate={disabledDateEnd}
        disabledTime={disabledDateTime}
        onChange={onChangeEnd}
        onOk={onOk}
        id="endtDate"
        disabled={disableInputend}
        style={{
          width: "100%",
          margin: "8px 0 24px 0",
        }}
      />
      {/* submit stn for date & time */}
      <SubminBTN
        text="Search"
        handleSubmit={handleSubmit}
        span={24}
        disabled={disableButton}
        offset={0}
      />
    </Col>
  );
};

export default DatePickerSideBar;
