import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePropertyData = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: property = {},
    isPending: propertyPending,
    refetch: propertyRefetch,
  } = useQuery({
    queryKey: [id, 'propertyDetails'],
    queryFn: async () => {
      if (id) {
        const res = await axiosSecure.get(`/property?id=${id}`);
        return res.data;
      }
    },
  });

  return { property, propertyPending, propertyRefetch };
};

export default usePropertyData;
