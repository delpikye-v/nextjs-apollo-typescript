import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_LAUNCHES } from '../../../graphql/queries/getLaunches.graphql';
import {
  GetLaunches,
  GetLaunchesVariables,
} from '../../../graphql/__types/GetLaunches';

const useGetListLaunches = (limit: number = 10) => {
  const { data, loading, refetch } = useQuery<
    GetLaunches,
    GetLaunchesVariables
  >(GET_LAUNCHES, {
    variables: {
      limit,
    },
  });

  useEffect(() => {
    if (!loading) {
      refetch();
    }
  }, [limit]);

  return { data, loading, refetch };
};

export default useGetListLaunches;
