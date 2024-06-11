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
import AgentProfile from '../Pages/Dashboard/Agent/AgentProfile/AgentProfile';
import AddProperty from '../Pages/Dashboard/Agent/AddProperty/AddProperty';
import AddedProperties from '../Pages/Dashboard/Agent/AddedProperties/AddedProperties';
import Offers from '../Pages/Dashboard/Agent/Offers/Offers';
import SoldProperties from '../Pages/Dashboard/Agent/SoldProperties/SoldProperties';
import ManageProperties from '../Pages/Dashboard/Admin/ManageProperties/ManageProperties';
import AllProperties from '../Pages/AllProperties/AllProperties';
import PropertyDetails from '../Pages/PropertyDetails/PropertyDetails';
import UserProfile from '../Pages/Dashboard/User/UserProfile/UserProfile';
import WishList from '../Pages/Dashboard/User/WishList/WishList';
import PropertyBought from '../Pages/Dashboard/User/PropertyBought/PropertyBought';
import MyReviews from '../Pages/Dashboard/User/MyReviews/MyReviews';
import MakeOffer from '../Pages/MakeOffer/MakeOffer';

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
      {
        path: '/allProperties',
        element: <AllProperties />,
      },
      {
        path: '/propertyDetails/:id',
        element: <PropertyDetails />,
      },
    ],
  },

  //  Dashboard Routes ----

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Admin Routes -----

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
      {
        path: '/dashboard/manageProperties',
        element: <ManageProperties />,
      },
      // Agent Routes-----

      {
        path: '/dashboard/agentProfile',
        element: <AgentProfile />,
      },
      {
        path: '/dashboard/addProperty',
        element: <AddProperty />,
      },
      {
        path: '/dashboard/addedProperties',
        element: <AddedProperties />,
      },
      {
        path: '/dashboard/offers',
        element: <Offers />,
      },
      {
        path: '/dashboard/soldProperties',
        element: <SoldProperties />,
      },

      //User Routes ----

      {
        path: '/dashboard/userProfile',
        element: <UserProfile />,
      },
      {
        path: '/dashboard/userWishList',
        element: <WishList />,
      },
      {
        path: '/dashboard/userPropertyBought',
        element: <PropertyBought />,
      },
      {
        path: '/dashboard/userReviews',
        element: <MyReviews />,
      },
      {
        path: '/dashboard/makeOffer',
        element: <MakeOffer />,
      },
    ],
  },
]);

export default router;
