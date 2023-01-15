import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../api';

export const useUserProfile = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUserProfile()
    });
};
