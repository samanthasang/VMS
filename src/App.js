import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { Routes, Route, useNavigate } from "react-router-dom";

import LayoutTop from "./components/layout/layouttop";
import LoginPage from "./pages/loginpage/loginpage.component";
import RegisterPage from "./pages/registerpage/registerpage.component";
import ForgotPasswordPage from "./pages/forgotpasswordpage/forgotpasswordpage.component";
import Privateroute from "./privateroute";
import DevicesPage from "./pages/devicespage/devicespage.component";
import LiveViewPage from "./pages/liveviewpage/liveviewpage.component";
// import UserPage from "./pages/userpage/userpage.component";
import PlayBackPage from "./pages/playbackpage/playbackpage.component";
import Layout from "./components/layout/Layout";
import Page505 from "./pages/505.page/505page.component";

import "./App.scss";

function App() {
  // ckeck for user loged in
  const isLogedIn = useSelector((state) => state.login.isLogedIn);

  // the rout user visit
  const menuItem = useSelector((state) => state.LayoutReducer.menuItem);

  let navigate = useNavigate();

  // if user is loged in navigate the user to rout from state in LayoutReducer
  useEffect(() => {
    console.log(isLogedIn);
    isLogedIn &&
      (window.location.pathname === "/login" ||
        window.location.pathname === "/") &&
      navigate(menuItem);
    !isLogedIn &&
      !(
        window.location.pathname === "/login" ||
        window.location.pathname === "/register" ||
        window.location.pathname === "/forgotpassword"
      ) &&
      navigate("/login");
  }, [isLogedIn, navigate, menuItem]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        {/* private rout : if user is loged in has access to this routs */}
        <Route element={<Privateroute isLogedIn={isLogedIn} />}>
          <Route element={<LayoutTop />}>
            <Route element={<Layout />}>
              <Route path="/liveview" element={<LiveViewPage />} />
              <Route path="/devices" element={<DevicesPage />} />
              <Route path="/playback" element={<PlayBackPage />} />
              {/* <Route path="/user" element={<UserPage />} /> */}
            </Route>
          </Route>
        </Route>
        {/* for times the rout is not define */}
        <Route path="*" element={<Page505 />} />
      </Routes>
    </>
  );
}

export default App;
