import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from './useUserProfile';

export const useUserSignedIn = () => {
    const { data: user, isLoading, isRefetching } = useUserProfile();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && !user.isSignedIn) {
            navigate('/login', { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate, isLoading, isRefetching]);
};
