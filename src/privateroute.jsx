import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';



// in case of not loged in navigate the user to login page
const Privateroute = ({isLogedIn}) => {
  return isLogedIn ? <Outlet /> : <Navigate to={"/login"} />
}

export default Privateroute;