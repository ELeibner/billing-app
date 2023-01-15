import { QueryKey, useQueryClient } from '@tanstack/react-query';

export const useGetQueryData = (name: QueryKey) => {
  return useQueryClient().getQueryData(name);
};
