import CommonButton from '../CommonButton/CommonButton';
import FeaturedPlayerCard from './FeaturedPlayerCard';
import { TeamName } from '../../../utils/teamNameMap';
import { useQuery } from '@tanstack/react-query';
import { getTeamPlayer } from '../../../services/teamService';

type Player = {
  hitter: {
    name: string;
    game: number;
    value: number;
  };
  pitcher: {
    name: string;
    game: number;
    value: number;
  };
};

type TeamPlayerProps = {
  teamName: TeamName;
};

const TeamPlayer = ({ teamName }: TeamPlayerProps) => {
  const { data, isLoading, isError } = useQuery<Player>({
    queryKey: ['teamPlayer', teamName],
    queryFn: () => getTeamPlayer(teamName),
    // staleTime: 1000 * 60 * 5,
  });

  console.log('📦 data:', data);
  console.log('📦 hitter:', data?.hitter);
  console.log('📦 pitcher:', data?.pitcher);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data || !data.hitter || !data.pitcher) {
    return <div>선수 데이터를 불러오지 못했습니다.</div>;
  }

  const parsedPlayer = [
    {
      title: '주간 타자',
      name: data.hitter.name,
      statLabel: '타율',
      statValue: data.hitter.value.toFixed(3),
      game: data.hitter.game,
    },
    {
      title: '주간 투수',
      name: data.pitcher.name,
      statLabel: 'ERA',
      statValue: data.pitcher.value.toFixed(2),
      game: data.pitcher.game,
    },
  ];

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">주간 활약 선수</div>
      <CommonButton variant="outlined">선수 명단 보기</CommonButton>
      <div className="grid grid-cols-2 gap-4 max-w-3xl w-full">
        {parsedPlayer.map((record, index) => (
          <FeaturedPlayerCard key={index} {...record} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default TeamPlayer;
