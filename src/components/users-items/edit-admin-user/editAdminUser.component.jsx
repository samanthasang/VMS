import { Col, Row, Tabs, Input, Form, Button } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import InputForm from "../../form-items/inputform/inputform.component";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
import SubminBTN from "../../form-items/submitbtn/submitbtn.component";
import TextareaForm from "../../form-items/textarea/formtextarea.component";
import CheckboxAddrole from "../checkbox-addrole/checkbox-addrole.component";
import PreviewTabs from "../preview-tabs/preview-tabs.component";
import InputPasswordForm from "../../form-items/inputpasswordform/inputpasswordform.component";
import "./editAdminUser.styles.scss";
import SelectUser from "../select-user/selectuser.component";
import {
  ChangeComponent,
  ChangeComUser,
} from "../../../redux/user-redux/userAction";
const { TextArea } = Input;
const Editadminuser = () => {
  const dispatch = useDispatch();
  const idForComponent = useSelector((state) => state.user.componentusers);
  const user = useSelector((state) => state.login.user);
  const [menurights, SetMenurights] = useState([
    {
      value: 1,
      key: 1,
      title: "Live Veiw",
    },
    {
      value: 1,
      key: 2,
      title: "PlayBack",
    },
    {
      value: 1,
      key: 3,
      title: "Devices",
    },
    {
      value: 1,
      key: 4,
      title: "User",
    },
  ]);

  useEffect(() => {
    if (idForComponent.id !== 1) {
      setDisabledInput(true);
      console.log("idddddddddfor  "+idForComponent.id);
      // setValueInput({ email: "email@example.com", remark: "Admin User" });
    } else {
      setDisabledInput(false);
      console.log("idddddddddfor  "+idForComponent.id);
      dispatch(ChangeComponent(5));
      // setValueInput({ email: "", remark: "" });
    }
  }, [idForComponent.id]);

  const [ValueInput, setValueInput] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    remark: "",
    checkboxmr: [],
    checkboxch: [],
  });
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [firstNameEmpty, setFirstNameEmpty] = useState(false);
  const [lastNameEmpty, setLastNameEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [confirmPasswordEmpty, setConfirmPasswordEmpty] = useState(false);
  const [remarkEmpty, setRemarkEmpty] = useState(false);
  const [checkboxmrEmpty, setCheckboxmrEmpty] = useState(false);
  const [checkboxchEmpty, setCheckboxchEmpty] = useState(false);
  const [idForEdit, setIdForEdit] = useState("");
  const [tabPosition, setTabPosition] = useState("left");
  const [disabledInput, setDisabledInput] = useState(false);

  const ClearidForEdit = () => {
    setIdForEdit(idForComponent.id);
    if(dispatch(ChangeComponent(3))){
      setValueInput({
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
      });

    }
    console.log("idForEdit " + idForEdit);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValueInput((ValueInput) => ({ ...ValueInput, [name]: value }));
    console.log("value input    " + ValueInput);
    // if (ValueInput.email !== "") {
    //   setEmailEmpty(false);
    // }
    if (ValueInput.firstname !== "") {
      setFirstNameEmpty(false);
    }
    if (ValueInput.lastname !== "") {
      setLastNameEmpty(false);
    }
    if (ValueInput.password !== "") {
      setPasswordEmpty(false);
    }
    if (ValueInput.confirmpassword !== "") {
      setConfirmPasswordEmpty(false);
    }
    if (ValueInput.remark !== "") {
      setRemarkEmpty(false);
    }
    // if (ValueInput.checkboxmr !== "") {
    //   setCheckboxmrEmpty(false);
    // }
    // if (ValueInput.checkboxch !== "") {
    //   setCheckboxchEmpty(false);
    // }
  };

  const handleSubmit = (event) => {
    // if (ValueInput.email === "") {
    //   setEmailEmpty(true);
    // }
    // console.log("email:", ValueInput.email);
    if (ValueInput.firstname === "") {
      setFirstNameEmpty(true);
    }
    console.log("first name:", ValueInput.firstname);
    if (ValueInput.lastname === "") {
      setLastNameEmpty(true);
    }
    console.log("last name:", ValueInput.lastname);
    if (ValueInput.password === "") {
      setPasswordEmpty(true);
    }
    console.log("password:", ValueInput.password);
    if (ValueInput.confirmpassword === "") {
      setConfirmPasswordEmpty(true);
    }
    console.log("ConfirmPassword:", ValueInput.confirmpassword);
    if (ValueInput.remark === "") {
      setRemarkEmpty(true);
    }
    console.log("remark:", ValueInput.remark);
    if (ValueInput.checkboxmr === "") {
      setCheckboxmrEmpty(true);
    }
    console.log("checkboxmr:", ValueInput.checkboxmr);
    // if (ValueInput.checkboxch === "") {
    //   setCheckboxchEmpty(true);
    // }
    // console.log("checkboxch:", ValueInput.checkboxch);

    if (
      // ValueInput.email === "" ||
      ValueInput.firstname === "" ||
      ValueInput.lastname === "" ||
      ValueInput.password === "" ||
      ValueInput.confirmpassword === "" 
      // ValueInput.remark === ""
    ) {
      return;
    }
    dispatch(ChangeComponent(3))
    // dispatch(ChangeComUser({
    //   id: 0,
    //   parentkey: 0,
    //   title: "",
    //   key: 0,
    
    // })
    // setValueInput({
    //   firstname: "",
    //   lastname: "",
    //   password: "",
    //   confirmpassword: "",
    // });
  };
  const handleOkM = () => {
    handleSubmit();
    // ClearidForEdit();
  };
  const onChange = (key) => {
    console.log("checkbox log   " + key);
  };

  const [tapShowByCHeckbox, setTapShowByCHeckbox] = useState(false);
  const [tapShowByCHeckbox1, setTapShowByCHeckbox1] = useState(false);
  return (
    <>
      <span className="role-info">User Info</span>
      <Row className="parent-edit-admin-user">
        <Col span={24}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "26px",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Email:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "40px", marginRight: "8px" }}>
                <InputForm
                  id="email"
                  inputs={"email"}
                  value={ValueInput.email}
                  empty={emailEmpty}
                  handleChange={handleChange}
                  disabled={disabledInput}
                  valueInput={ValueInput.email}
                  type="text"
                  placeholder="email@example.com"
                />
              </Col>
              <Col span={6} style={{ marginRight: "10px" }}></Col>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "26px",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Role:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "40px", marginRight: "8px" }} className="select-user" >
                <SelectUser disabled={disabledInput} />
              </Col>
            </Row>
            <Row>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "0",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  First Name:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "19px", marginRight: "8px" }}>
                <InputForm
                  id="firstname"
                  inputs={"firstname"}
                  value={ValueInput.firstname}
                  empty={firstNameEmpty}
                  handleChange={handleChange}
                  type="text"
                />
              </Col>
              <Col span={6} style={{ marginRight: "10px" }}></Col>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "0",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Password:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "19px", marginRight: "8px" }}>
                <InputPasswordForm
                  id="password"
                  inputs={"password"}
                  value={ValueInput.password}
                  empty={passwordEmpty}
                  handleChange={handleChange}
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "0",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Last Name:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "19px", marginRight: "8px" }}>
                <InputForm
                  id="lastname"
                  inputs={"lastname"}
                  value={ValueInput.lastName}
                  empty={lastNameEmpty}
                  handleChange={handleChange}
                  type="text"
                />
              </Col>
              <Col span={6} style={{ marginRight: "10px" }}></Col>
              <Col
                span={3}
                style={{
                  textAlign: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingTop: "0",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Confirm Password:
                </span>
              </Col>
              <Col span={5} style={{ paddingTop: "19px", marginRight: "8px" }}>
                <InputPasswordForm
                  id="confirmpassword"
                  inputs={"confirmpassword"}
                  value={ValueInput.confirmpassword}
                  empty={confirmPasswordEmpty}
                  handleChange={handleChange}
                  type="text"
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: "20px" }}>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "#fff",

                    textAlign: "right",
                  }}
                >
                  Remark:
                </span>
              </Col>
              <Col span={19}>
                <TextArea
                  id="remark"
                  name={"remark"}
                  empty={remarkEmpty}
                  disabled={disabledInput}
                  value={ValueInput.remark}
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: "20px" }}>
              <Col span={3} style={{ textAlign: "right", marginRight: "16px" }}>
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Menu Rights:
                </span>
              </Col>
              <Col span={20}>
                <CheckboxAddrole
                  disabled={disabledInput}
                  empty={checkboxmrEmpty}
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: "20px" }}>
              <Col span={3} style={{ marginRight: "16px", textAlign: "right" }}>
                <span style={{ color: "#fff", width: "128px" }}>
                  Channel Rights:
                </span>
              </Col>
              <Col span={8}>
                <Tabs
                  style={{
                    paddingLeft: "0px !important",
                  }}
                  className="sidebar-info"
                  tabPosition={"left"}
                  defaultActiveKey="1"
                  onChange={onChange}
                  items={[
                    {
                      label: `Preview`,
                      id: 1,
                      key: "1",
                      children: <PreviewTabs />,
                    },
                    {
                      label: `Playback`,
                      id: 2,
                      key: "2",
                      children: <PreviewTabs />,
                    },
                    {
                      label: `Export`,
                      id: 3,
                      key: "3",
                      children: <PreviewTabs />,
                    },
                  ]}
                />
              </Col>
              <Col span={12} className="row_btn_user">
                <Button
                onClick={ClearidForEdit}
                  className="header_btn btn_pre cancel_btn"
                  type="primary"
                  style={{
                    marginLeft: "8px",
                    display: "inline-flex !important",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleOkM}
                  className="header_btn btn_next"
                  type="primary"
                  style={{
                    marginLeft: "8px",

                    display: "inline-flex !important",
                  }}
                >
                  Save
                </Button>
              </Col>
            </Row>
            {/* <Row style={{ marginTop: "20px" }}>
              <Col span={23} className="row_btn_user">
                <Button
                  className="header_btn btn_pre cancel_btn"
                  type="primary"
                  style={{
                    marginLeft: "8px",
                    display: "inline-flex !important",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="header_btn btn_next"
                  type="primary"
                  style={{
                    marginLeft: "8px",

                    display: "inline-flex !important",
                  }}
                >
                  Save
                </Button>
              </Col>
            </Row> */}
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Editadminuser;
