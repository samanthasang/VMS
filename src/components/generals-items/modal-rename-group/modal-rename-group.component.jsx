import { Button, Col, Form, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
import extractData from "../../live-view-items/liveview/extractData";

import "./modal-rename-group.styles.scss";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import OpenNotification from "../../form-items/notification/notification.component";

const ModalRenameGroup = ({
  isModalOpenGroup,
  handleOkGroup,
  ModalName,
  getKey,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [inputs, setInputs] = useState({
    name: "",
    groupID: getKey.parentKey,
  });
  const [nameEmpty, setNameEmpty] = useState(false);
  const setGetKeyTitle = () => {
    setInputs({ ...inputs, name: getKey.title });
  };
  useEffect(() => {
    console.log("T :" + getKey.title);
    console.log("G :" + inputs.groupID);
    setGetKeyTitle();
  }, [getKey]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (inputs.name !== "") {
      setNameEmpty(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmitgroups = () => {
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/" + getKey.id;

    var accessToken = user.accessToken;
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
    var value = {
      name: inputs.name,
      groupID: getKey.parentKey,
    };
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    axios
      .put(url, value, config)
      .then((res) => {
        console.log(res.data.data);
        const dt = extractData(res.data.data);
        console.log("OB" + dt);
        dispatch(SetOrganization(dt));
        OpenNotification("topRight", "", res.data.msg, "");
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };
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
        res.status === 200 && handleSubmitgroups();
      })
      .catch((e) => {
        // e.response.status === 401 && dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };

  const handleSubmit = () => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);
    user.expAccessToken < dateNow ? ReNewAccessToken() : handleSubmitgroups();
  };

  const handleCancelManual = () => {
    handleOkGroup();
    setInputs({
      name: "",
      groupID: getKey.parentKey,
    });
  };
  const handleOK = () => {
    if (inputs.name === "") {
      setNameEmpty(true);
      return;
    }
    handleSubmit();
    setInputs({
      name: "",
      groupID: getKey.parentKey,
    });
    handleOkGroup();
  };

  return (
    <>
      <Modal
        className="modal_footer_live_window"
        style={{
          width: "460px",
          backgroundColor: "transparent",
          borderRadius: "15px!important",
          color: "#F0F2F5",
        }}
        bodyStyle={{
          backgroundColor: "#2E333D",
        }}
        title={"Rename " + ModalName}
        centered={true}
        closable={true}
        visible={isModalOpenGroup}
        onOk={handleOkGroup}
        onCancel={handleCancelManual}
        footer={[
          <Button className="btn_pre" onClick={handleCancelManual}>
            Cancel
          </Button>,
          <Button type="submit" className="btn_next" onClick={handleOK}>
            Save
          </Button>,
        ]}
        open={isModalOpenGroup}
      >
        <Row>
          <Col span={24}>
            <Form
              name="normal_login"
              className="manual-add-inputs"
              initialValues={{ remember: true }}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              onSubmit={handleSubmit}
            >
              <InputFormWithLabel
                span={10}
                offset={7}
                id="name"
                inputs={"name"}
                placeholder={ModalName + " name"}
                label={ModalName + " name"}
                type="text"
                handleChange={handleChange}
                value={inputs.name}
                required={true}
                empty={nameEmpty}
              />
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalRenameGroup;
