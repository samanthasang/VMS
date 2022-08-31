import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { Routes, Route, useNavigate } from "react-router-dom";

import LayoutTop from "./components/layout/layouttop";

import LoginPage from "./pages/loginpage/loginpage.component";
import RegisterPage from "./pages/registerpage/registerpage.component";
import ForgotPasswordPage from "./pages/forgotpasswordpage/forgotpasswordpage.component";
import Privateroute from "./privateroute";
import MainMenuPage from "./pages/mainmenupage/mainmenupage.component";
import DevicesPage from "./pages/devicespage/devicespage.component";
import LiveViewPage from "./pages/liveviewpage/liveviewpage.component";
import UserPage from "./pages/userpage/userpage.component";
import PlayBackPage from "./pages/playback/playback.component";
import Layout from "./components/layout/Layout";

import "./App.css";
import Page505 from "./pages/505.page/505page.component";

function App() {
  const isLogedIn = useSelector((state) => state.login.isLogedIn);

  let navigate = useNavigate();
  useEffect(() => {
    console.log("3: " + isLogedIn);
    isLogedIn && window.location.pathname === "/" && navigate("/page505");
  }, [isLogedIn, navigate]);

  return (
    <>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotten-password" element={<ForgotPasswordPage />} />
        <Route element={<Privateroute isLogedIn={isLogedIn} />}>
          <Route path="/page505" element={<Page505 />} />
          <Route element={<LayoutTop />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<MainMenuPage />} />
              <Route path="/mainmenupage" element={<MainMenuPage />} />
              <Route path="/devicespage" element={<DevicesPage />} />
              <Route path="/liveViewpage" element={<LiveViewPage />} />
              <Route path="/userpage" element={<UserPage />} />
              <Route path="/playBackpage" element={<PlayBackPage />} />
              <Route path="*" element={() => <h1>Page not found</h1>} />
            </Route>
          </Route>
        </Route>
      </Routes>
      {/* </Layout> */}
    </>
  );
}

export default App;
