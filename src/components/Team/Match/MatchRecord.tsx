import { getTeamRecord } from '../../../services/teamService';
import CommonButton from '../CommonButton/CommonButton';
import MatchRecordCard from './MatchRecordCard';
import { TeamName } from '../../../utils/teamNameMap';
import { useQuery } from '@tanstack/react-query';
import { teamLinks } from '../../../utils/teamLinks';

type Record = {
  date: string;
  time: string;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
  stadium: string;
};

type TemaRecordProps = {
  teamName: TeamName;
};

const MatchRecord = ({ teamName }: TemaRecordProps) => {
  const {
    data: record = [],
    isLoading,
    isError,
  } = useQuery<Record[]>({
    queryKey: ['teamRecord', teamName],
    queryFn: () => getTeamRecord(teamName),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) {
    return (
      <div className="text-center mt-4 text-red-500">
        경기 기록을 불러오는 데 실패했습니다.
      </div>
    );
  }

  const parsedRecord = record.map((match) => ({
    date: match.date,
    time: match.time,
    stadium: match.stadium,
    homeTeam: match.homeTeam,
    homeScore: match.homeScore,
    awayTeam: match.awayTeam,
    awayScore: match.awayScore,
  }));

  const teamLink = teamLinks[teamName];

  if (!teamLink) return null; // 유효하지 않은 팀 -> 렌더링X

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">경기 기록</div>
      <CommonButton
        variant="outlined"
        onClick={() => window.open(teamLink.record, '_blank')}
      >
        자세히 보기
      </CommonButton>
      <div className="grid grid-cols-6 gap-4">
        {parsedRecord.slice(0, 6).map((record, index) => (
          <MatchRecordCard key={index} {...record} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default MatchRecord;
