import CommonButton from '../CommonButton/CommonButton';
import MatchCard from './MatchCard';
import lgLogo from '../../../assets/images/TeamEmblem/lg-twins-emblem.jpg';
import kiaLogo from '../../../assets/images/TeamEmblem/kia-tigers-emblem.png';
import { TeamName, teamDisplayNameMap } from '../../../utils/teamNameMap';
import { teamEmblemMap } from '../../../utils/teamEmblemMap';
import { useEffect, useState } from 'react';
import { getTeamSchedule } from '../../../services/teamService';

type Match = {
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
};

type TemaScheduleProps = {
  teamName: TeamName;
};

const MatchSchedule = ({ teamName }: TemaScheduleProps) => {
  const [schedule, setSchedule] = useState<Match[]>([]); // API 응답 저장용

  useEffect(() => {
    getTeamSchedule(teamName)
      .then((data) => {
        setSchedule(data); // API 데이터 저장
      })
      .catch((err) => {
        console.error('경기 일정 불러오기 실패:', err);
      });
  }, [teamName]);

  const parsedSchedule = schedule.map((match) => ({
    date: match.date,
    time: match.time,
    stadium: match.stadium,
    homeTeam: {
      name: (
        <>
          {match.homeTeam} <br />
          {teamDisplayNameMap[match.homeTeam as TeamName]}
        </>
      ),
      emblem: teamEmblemMap[match.homeTeam as TeamName],
    },
    awayTeam: {
      name: (
        <>
          {match.awayTeam} <br />
          {teamDisplayNameMap[match.awayTeam as TeamName]}
        </>
      ),
      emblem: teamEmblemMap[match.awayTeam as TeamName],
    },
  }));

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">팀 경기 일정</div>
      <CommonButton variant="outlined">경기 전체 일정</CommonButton>
      <div className="grid grid-cols-4 gap-4">
        {parsedSchedule.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default MatchSchedule;
