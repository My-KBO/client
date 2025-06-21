import { TEAM_DATA, TeamKey } from '../../../utils/team-data';
import TeamInfoButton from './team-info-button';

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
        className="w-full h-80 object-cover"
      />
      <div className="flex items-center gap-4 mt-6 ml-6">
        <img src={team.logoImage} alt={`${team.name} Logo`} className="h-16" />
        <div>
          <h2 className="text-2xl font-semibold">{team.name}</h2>
          <p className="text-gray-600">{team.description}</p>
        </div>
        <TeamInfoButton />
      </div>
    </div>
  );
};

export default TeamBanner;
