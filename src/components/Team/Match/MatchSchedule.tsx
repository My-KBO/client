import CommonButton from '../CommonButton/CommonButton';
import MatchCard from './MatchCard';
import {
  TeamName,
  teamDisplayNameMap,
} from '../../../utils/team/team-name-map';
import { teamEmblemMap } from '../../../utils/team/team-emblem-map';
import { useEffect, useState } from 'react';
import { getTeamSchedule } from '../../../services/teamService';
import { useQuery } from '@tanstack/react-query';
import { teamLinks } from '../../../utils/team/team-links';

type Match = {
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
};

type TeamScheduleProps = {
  teamName: TeamName;
};

const MatchSchedule = ({ teamName }: TeamScheduleProps) => {
  const {
    data: schedule = [],
    isLoading,
    isError,
  } = useQuery<Match[]>({
    queryKey: ['teamSchedule', teamName], // 쿼리 식별 키
    queryFn: () => getTeamSchedule(teamName), // 데이터 가져오기
    staleTime: 1000 * 60 * 5, // 5분동안 캐시 유지
  });

  if (isError) {
    return (
      <div className="text-center mt-4 text-red-500">
        경기 일정을 불러오는 데 실패했습니다.
      </div>
    );
  }

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

  const teamLink = teamLinks[teamName];

  if (!teamLink) return null; // 유효하지 않은 팀 -> 렌더링X

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">팀 경기 일정</div>
      <CommonButton
        variant="outlined"
        onClick={() => window.open(teamLink.schedule, '_blank')}
      >
        경기 전체 일정
      </CommonButton>
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
