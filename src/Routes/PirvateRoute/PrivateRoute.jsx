import { Spinner } from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='bg-offWhite grid min-h-screen w-full place-items-center'>
        <Spinner className='h-16 w-16 text-gray-900/50' />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={'/login'} state={{ form: location }} />;
};

export default PrivateRoute;
