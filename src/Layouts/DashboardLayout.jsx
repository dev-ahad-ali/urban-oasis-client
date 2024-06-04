import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default DashboardLayout;
