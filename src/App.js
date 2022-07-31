import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Layout from "./Layout";

import LoginPage from "./pages/loginpage/loginpage.component";
import RegisterPage from "./pages/registerpage/registerpage.component";

import Privateroute from "./privateroute";
import MainMenuPage from "./pages/mainmenupage/mainmenupage.component";
import DevicesPage from "./pages/devicespage/devicespage.component";
import LiveViewPage from "./pages/liveviewpage/liveviewpage.component";
import UserPage from "./pages/userpage/userpage.component";
import PlayBackPage from "./pages/playback/playback.component";

import "./App.css";

function App() {
  let navigate = useNavigate();
  const [isLogedIn, setIslogedIn] = useState(false);

  useEffect(() => {
    // isLogedIn ? console.log({ isLogedIn }) : console.log("isLogedIn");
    isLogedIn ? navigate("/dashboard") : console.log("isLogedIn");
  }, [isLogedIn]);

  const LoginAuth = () => {
    setIslogedIn(true);
    if (isLogedIn) console.log({ isLogedIn });
    // <Navigate to="/dashboard" />;
  };
  return (
    <>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/register" ? (
        <Layout />
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<LoginPage LoginAuth={LoginAuth} />} />
        <Route path="/register" element={<RegisterPage />} />
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

export default App;
