import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from './useAuth';

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: userRole,
    isPending: userRoleLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, 'role'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  return { userRole, userRoleLoading, refetch };
};

export default useRole;
