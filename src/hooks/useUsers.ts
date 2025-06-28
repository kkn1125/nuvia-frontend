import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '@/api/fetch-user';

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
};
