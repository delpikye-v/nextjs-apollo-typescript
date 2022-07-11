import React from 'react';

type LaunchCardProps = {
  id: number;
  missionName?: string;
  details?: string;
};

export const LaunchCard: React.FC<LaunchCardProps> = (props) => {
  return (
    <div className="launch-card-item">
      <div className="launch-card-name">{props.missionName}</div>
      <p className="launch-card-content">{props.details}</p>
    </div>
  );
};
