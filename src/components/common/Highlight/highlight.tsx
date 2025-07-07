import { TEAM_DATA } from '../../../utils/teamData';
import { TeamName } from '../../../utils/teamNameMap';
import HighlightCard from './highlight-card';

type HighlightProps = {
  teamName: TeamName;
};

const highlights = [
  {
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '광주',
  },
  {
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '광주',
  },
  {
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '광주',
  },
  {
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '광주',
  },
  {
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '광주',
  },
];

const Highlight = ({ teamName }: HighlightProps) => {
  const team = TEAM_DATA[teamName];
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-6 mb-4">
        {team.name} 하이라이트
      </div>
      <div className="grid grid-cols-5 gap-4">
        {highlights.map((highlight, index) => (
          <HighlightCard key={index} {...highlight} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default Highlight;
