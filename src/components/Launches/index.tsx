import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Scrollbar from 'react-perfect-scrollbar-z';

import { LaunchCard } from './LaunchCard';
import useGetListLaunches from './service/useGetListLaunches';

const Launches = () => {
  const { data, loading } = useGetListLaunches(10);

  return (
    <div>
      <h1>
        <b>SpaceX Launches</b>
      </h1>

      {/* @ts-ignore */}
      <Scrollbar always className="launch-list-data" effectData={data}>
        <div className="launch-data">
          {(loading || !data) && (
            <>
              <Skeleton height={50} />
            </>
          )}

          {data?.launches?.map((launch) => {
            return (
              <LaunchCard
                key={Number(launch?.id)}
                id={Number(launch?.id)}
                missionName={launch?.mission_name!}
                details={launch?.details!}
              />
            );
          })}
        </div>
      </Scrollbar>
    </div>
  );
};

export default Launches;
