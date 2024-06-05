import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardLayout = () => {
  return (
    <>
      <div></div>

      <Outlet />
      <ToastContainer />
    </>
  );
};

export default DashboardLayout;
