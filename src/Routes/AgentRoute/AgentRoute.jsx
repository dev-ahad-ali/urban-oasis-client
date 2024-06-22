import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import useRole from '../../Hooks/useRole';

const AgentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { userRole, userRoleLoading } = useRole();
  const location = useLocation();

  if (loading || userRoleLoading) {
    return <LoadingSpinner />;
  }

  if (user && userRole === 'agent') {
    return children;
  }

  return <Navigate to={'/login'} state={{ form: location }} />;
};

export default AgentRoute;
