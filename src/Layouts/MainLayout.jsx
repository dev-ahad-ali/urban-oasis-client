import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
