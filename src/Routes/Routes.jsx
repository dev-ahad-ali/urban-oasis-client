import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DashboardLayout from '../Layouts/DashboardLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome/AdminHome';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers/ManageUsers';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile/AdminProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard/adminHome',
        element: <AdminHome />,
      },
      {
        path: '/dashboard/manageUsers',
        element: <ManageUsers />,
      },
      {
        path: '/dashboard/adminProfile',
        element: <AdminProfile />,
      },
    ],
  },
]);

export default router;
