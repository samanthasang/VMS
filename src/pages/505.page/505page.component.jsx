import React from "react";
import { useDispatch } from "react-redux";
import { UserLogOut } from "../../redux/login_redux/loginAction";
import { Button } from "antd";

const Page505 = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(UserLogOut());
  };
  return (
    <Button
      onClick={handleOnClick}
      style={{
        margin: "25% auto",
        display: "block",
        width: "200px",
        height: "35px",
      }}
    >
      Log Out
    </Button>
  );
};

export default Page505;
