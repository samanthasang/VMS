import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './Layout';

import LoginPage from './pages/loginpage/loginpage.component';
import RegisterPage from './pages/registerpage/registerpage.component';

import Privateroute from './privateroute';
import MainMenuPage from './pages/mainmenupage/mainmenupage.component';
import DevicesPage from './pages/devicespage/devicespage.component';
import LiveViewPage from './pages/liveviewpage/liveviewpage.component';
import UserPage from './pages/userpage/userpage.component';
import PlayBackPage from './pages/playback/playback.component';

import './App.css';

function App() {

  const [isLogedIn, setIslogedIn] = useState(true);


  return (
  <BrowserRouter>
      {window.location.pathname !== "/login" && window.location.pathname !== "/register" ? <Layout /> : ""}
    <Routes>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<Privateroute isLogedIn={isLogedIn} />}>
        <Route path="/" element={<MainMenuPage />} />
        <Route path='/mainmenupage' element={<MainMenuPage />} />
        <Route path='/devicespage' element={<DevicesPage />} />
        <Route path='/liveViewpage' element={<LiveViewPage />} />
        <Route path='/userpage' element={<UserPage />} />
        <Route path='/playBackpage'element={<PlayBackPage />} />
      </Route>

    </Routes>
  </BrowserRouter>

  );
}

export default App;
