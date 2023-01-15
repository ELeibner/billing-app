import { useQuery } from '@tanstack/react-query';
import { getStatistics } from '../api';

export const useStatistics = () => {
  return useQuery({
    queryKey: ['statistics'],
    queryFn: () => getStatistics(),
  });
};
