import { Button, Col, Form, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";
import extractData from "../../live-view-items/liveview/extractData";

import "./modal-add-group.styles.scss";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import OpenNotification from "../../form-items/notification/notification.component";
import moment from "moment";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";

const ModalAddGroup = ({ isModalOpen, handleOkManual, ModalName, getKey }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [inputs, setInputs] = useState({
    name: "",
    groupID: 0,
  });

  const [nameEmpty, setNameEmpty] = useState(false);
  const handleSubmitaddgroups = (e) => {
    console.log("id:", getKey.id);
    console.log("name:", inputs.name);
    var value = {
      name: inputs.name,
      groupID: getKey.id,
    };
    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/";
    axios
      .post(url, value, config)
      .then((res) => {
        console.log(res.data.data);
        const dt = extractData(res.data.data);
        console.log("OB" + dt);
        dispatch(SetOrganization(dt));
        e && handleOkManual();
        setInputs({ name: "", groupID: 0 });
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        e.response.status === 422 &&
          OpenNotification(
            "topRight",
            "",
            e.response.data.data.errors.name,
            "error"
          );
        console.log(e);
      });
  };
  const ReNewAccessToken = async (e) => {
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
        res.status === 200 && handleSubmitaddgroups(e);
      })
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };
  const handleSubmit = (e) => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow
      ? ReNewAccessToken(e)
      : handleSubmitaddgroups(e);
  };
  const handleOk = () => {
    if (inputs.name === "") {
      setNameEmpty(true);
      return;
    }
    handleSubmit(true);
  };
  const handleCancelManual = () => {
    handleOkManual();
    setInputs({ name: "", groupID: 0 });
  };
  const handleOkAndC = () => {
    handleSubmit(false);
  };
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
        title={"New " + ModalName}
        centered={true}
        closable={true}
        visible={isModalOpen}
        onOk={handleOkManual}
        onCancel={handleCancelManual}
        footer={[
          <Button className="btn_pre" onClick={handleCancelManual}>
            Cancel
          </Button>,
          <Button type="submit" className="btn_next" onClick={handleOk}>
            Save
          </Button>,
          <Button className="btn_pre" onClick={handleOkAndC}>
            Save and continue
          </Button>,
        ]}
        open={isModalOpen}
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

export default ModalAddGroup;
