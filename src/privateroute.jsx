import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = ({isLogedIn}) => {
  return isLogedIn ? <Outlet /> : <Navigate to={"/"} />
}

export default Privateroute;