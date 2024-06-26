import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DashboardLayout from '../Layouts/DashboardLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
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
import Payment from '../Pages/Dashboard/User/Payment/Payment';
import ManageReviews from '../Pages/Dashboard/Admin/ManageReviews/ManageReviews';
import AdvertiseProperty from '../Pages/Dashboard/Admin/AdvetiseProperty/AdvertiseProperty';
import PrivateRoute from './PirvateRoute/PrivateRoute';
import AdminRoute from './AdminRoute/AdminRoute';
import AgentRoute from './AgentRoute/AgentRoute';

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
        element: (
          <PrivateRoute>
            <AllProperties />
          </PrivateRoute>
        ),
      },
      {
        path: '/propertyDetails/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  //  Dashboard Routes ----

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Admin Routes -----

      {
        path: '/dashboard/manageUsers',
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/adminProfile',
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manageProperties',
        element: <ManageProperties />,
      },
      {
        path: '/dashboard/advertiseProperty',
        element: (
          <AdminRoute>
            <AdvertiseProperty />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manageReviews',
        element: (
          <AdminRoute>
            <ManageReviews />
          </AdminRoute>
        ),
      },
      // Agent Routes-----

      {
        path: '/dashboard/agentProfile',
        element: (
          <AgentRoute>
            <AgentProfile />
          </AgentRoute>
        ),
      },
      {
        path: '/dashboard/addProperty',
        element: (
          <AgentRoute>
            <AddProperty />
          </AgentRoute>
        ),
      },
      {
        path: '/dashboard/addedProperties',
        element: (
          <AgentRoute>
            <AddedProperties />
          </AgentRoute>
        ),
      },
      {
        path: '/dashboard/offers',
        element: (
          <AgentRoute>
            <Offers />
          </AgentRoute>
        ),
      },
      {
        path: '/dashboard/soldProperties',
        element: (
          <AgentRoute>
            <SoldProperties />
          </AgentRoute>
        ),
      },

      //User Routes ----

      {
        path: '/dashboard/userProfile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/userWishList',
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/userPropertyBought',
        element: (
          <PrivateRoute>
            <PropertyBought />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/userReviews',
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/makeOffer',
        element: (
          <PrivateRoute>
            <MakeOffer />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/payment',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
