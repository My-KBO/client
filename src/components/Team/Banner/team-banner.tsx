import React from 'react';
import { TEAM_DATA, TeamKey } from '../../../utils/team-data';

type TeamBannerProps = {
  teamKey: TeamKey;
};

const TeamBanner = ({ teamKey }: TeamBannerProps) => {
  const team = TEAM_DATA[teamKey];

  return (
    <div className="w-full">
      <img
        src={team.sloganImage}
        alt={`${team.name} Slogan`}
        className="w-full h-60 object-cover"
      />
      <div className="flex items-center gap-4 mt-6">
        <img
          src={team.logoImage}
          alt={`${team.name} Logo`}
          className="w-16 h-16"
        />
        <div>
          <h2 className="text-2xl font-semibold">{team.name}</h2>
          <p className="text-gray-600">{team.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
