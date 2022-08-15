import React, { useEffect } from "react";

import { connect, useSelector } from "react-redux";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Layout from "./Layout";

import LoginPage from "./pages/loginpage/loginpage.component";
import RegisterPage from "./pages/registerpage/registerpage.component";
import ForgotPasswordPage from "./pages/forgotpasswordpage/forgotpasswordpage.component";
import Privateroute from "./privateroute";
import MainMenuPage from "./pages/mainmenupage/mainmenupage.component";
import DevicesPage from "./pages/devicespage/devicespage.component";
import LiveViewPage from "./pages/liveviewpage/liveviewpage.component";
import UserPage from "./pages/userpage/userpage.component";
import PlayBackPage from "./pages/playback/playback.component";

import registerReduser from "./redux/redusers/registerReduser";
import { getUser } from "./redux/action/registerAction";

import "./App.css";

function App({  }) {
  let navigate = useNavigate();

  const isLogedIn = useSelector((state) => state.isLogedIn);

  useEffect(() => {
    console.log(isLogedIn);
    isLogedIn ? <Navigate to="/dashboard" /> : console.log("isLogedIn");
  }, [isLogedIn]);
  const LoginAuth = () => {
    console.log(isLogedIn);
  };
  // const LoginAuth = () => {
  //   setIslogedIn(true);
  //   if (isLogedIn) console.log({ isLogedIn });
  //   // <Navigate to="/dashboard" />;
  // };
  return (
    <>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/forgotpassword" &&
      window.location.pathname !== "/register" ? (
        <Layout />
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<LoginPage LoginAuth={LoginAuth} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route element={<Privateroute isLogedIn={isLogedIn} />}>
          <Route path="/dashboard" element={<MainMenuPage />} />
          <Route path="/mainmenupage" element={<MainMenuPage />} />
          <Route path="/devicespage" element={<DevicesPage />} />
          <Route path="/liveViewpage" element={<LiveViewPage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/playBackpage" element={<PlayBackPage />} />
          <Route path="*" element={() => <h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

const mapStateToProps = () => ({
  isLogedIn: registerReduser.isLogedIn,
});

// export default connect(mapStateToProps, null)(App);
export default App;
