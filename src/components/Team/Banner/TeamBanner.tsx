import { TEAM_DATA } from '../../../utils/team-data';
import { TeamName } from '../../../utils/team-name-map';
import TeamInfoButton from './TeamInfoButton';

type TeamBannerProps = {
  teamName: TeamName;
};

const TeamBanner = ({ teamName }: TeamBannerProps) => {
  const team = TEAM_DATA[teamName];

  return (
    <div className="w-full">
      {/* 최상단 각 팀별 슬로건 */}
      <img
        src={team.sloganImage}
        alt={`${team.name} Slogan`}
        className="h-80 w-full object-cover object-center" //object-contain
      />
      {/* 팀 로고와 이름, 설명, 굿즈샵 및 공식홈 버튼 */}
      <div className="flex justify-between items-center gap-4 ml-40 mr-40 mt-10 mb-10">
        <div className="flex">
          <img
            src={team.emblemImage}
            alt={`${team.name} Logo`}
            className="h-16 mr-10"
          />
          <div>
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p className="text-gray-600">{team.description}</p>
          </div>
        </div>
        <TeamInfoButton teamName={team.key} />
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default TeamBanner;
