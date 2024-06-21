import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from './useAuth';

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const token = localStorage.getItem('access-token');

  const {
    data: userRole = '',
    isPending: userRoleLoading,
    refetch,
  } = useQuery({
    queryKey: [user ? user.email : '', token, 'role'],
    queryFn: async () => {
      if (user.email && token) {
        const res = await axiosSecure.get(`/user/${user?.email}`);
        return res.data;
      }
    },
  });
  return { userRole, userRoleLoading, refetch };
};

export default useRole;
