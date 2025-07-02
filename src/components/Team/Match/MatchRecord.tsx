import { getTeamRecord } from '../../../services/teamService';
import CommonButton from '../CommonButton/CommonButton';
import MatchRecordCard from './MatchRecordCard';
import { TeamName } from '../../../utils/teamNameMap';
import { useEffect, useState } from 'react';

type Match = {
  date: string;
  time: string;
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  stadium: string;
};

type TemaRecordProps = {
  teamName: TeamName;
};

const MatchRecord = ({ teamName }: TemaRecordProps) => {
  const [record, setRecord] = useState<Match[]>([]);

  useEffect(() => {
    getTeamRecord(teamName)
      .then((data) => {
        setRecord(data);
      })
      .catch((err) => {
        console.error('경기 기록 불러오기 실패:', err);
      });
  }, [teamName]);

  const parsedRecord = record.map((match) => ({
    date: match.date,
    time: match.time,
    stadium: match.stadium,
    homeTeam: match.homeTeam,
    homeScore: match.homeScore,
    awayTeam: match.awayTeam,
    awayScore: match.awayScore,
  }));
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">경기 기록</div>
      <CommonButton variant="outlined">자세히 보기</CommonButton>
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
