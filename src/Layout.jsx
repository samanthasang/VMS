import { Outlet, useLocation } from 'react-router-dom';
import LoginPage from './pages/loginpage/loginpage.component';

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
    <h1>Header</h1>
    </>
  );
}


export default Layout;