import React from 'react';
import { teamNameMap } from '../../../utils/team-name-map';
import { getWeatherEmoji } from '../../../utils/weather-emoji';

export type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number | string;
  awayScore?: number | string;
  date: string;
  time: string;
  stadium: string;
  note: string;
  weather?: string;
};

const getDisplayTeamName = (team: string) => teamNameMap[team] || team;

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  date,
  time,
  stadium,
  note,
  weather,
}) => {
  // 점수가 빈 문자열이거나 undefined인 경우 처리
  const hasScore =
    homeScore !== '' &&
    homeScore !== undefined &&
    awayScore !== '' &&
    awayScore !== undefined;

  // 점수 비교를 위한 숫자 변환
  const homeScoreNum =
    !homeScore || isNaN(Number(homeScore)) ? 0 : Number(homeScore);
  const awayScoreNum =
    !awayScore || isNaN(Number(awayScore)) ? 0 : Number(awayScore);

  let homeScoreClass = 'text-2xl';
  let awayScoreClass = 'text-2xl';
  if (hasScore) {
    if (homeScoreNum > awayScoreNum) {
      homeScoreClass = 'text-3xl text-kbo-lightblue';
      awayScoreClass = 'text-2xl';
    } else if (homeScoreNum < awayScoreNum) {
      homeScoreClass = 'text-2xl';
      awayScoreClass = 'text-3xl text-kbo-lightblue';
    } else {
      homeScoreClass = 'text-3xl text-kbo-blue';
      awayScoreClass = 'text-3xl text-kbo-blue';
    }
  }

  // 경기 상태 판단
  const isFinished = note === '-' && hasScore; // 경기 종료: note가 -이고 점수가 있음
  const isCanceled = note !== '-'; // 경기 취소: note가 -가 아님
  const isScheduled = note === '-' && !hasScore; // 경기 예정: note가 -이고 점수가 없음

  return (
    <div
      className={`rounded-lg border w-auto flex flex-col items-center gap-4 py-6 px-0 h-full justify-between ${
        isCanceled ? 'opacity-50' : ''
      } ${isFinished ? 'border-kbo-blue' : 'border-gray-200'} min-w-[220px] max-w-[240px] min-h-[180px] max-h-[320px]'`}
    >
      <div className="text-sm text-gray-900 mb-1">
        {weather && <span className="mr-1">{getWeatherEmoji(weather)}</span>}|{' '}
        {time} | {stadium}
      </div>
      <div className="flex items-center justify-between gap-2 mb-2">
        {isFinished && hasScore ? (
          <>
            {/* 홈팀 */}
            <div className="flex flex-col items-center gap-2">
              <span className="whitespace-pre-line text-center text-kbo-blue font-bold">
                {getDisplayTeamName(homeTeam)}
              </span>
              <span
                className={`font-semibold ${homeScoreClass} text-kbo-blue mt-2`}
              >
                {homeScore}
              </span>
            </div>
            <span className="mx-4 font-bold text-kbo-blue">VS</span>
            {/* 원정팀 */}
            <div className="flex flex-col items-center gap-2">
              <span className="whitespace-pre-line text-center text-kbo-blue font-bold">
                {getDisplayTeamName(awayTeam)}
              </span>
              <span className={`font-semibold ${awayScoreClass}`}>
                {awayScore}
              </span>
            </div>
          </>
        ) : (
          <>
            <span className="whitespace-pre-line text-center font-bold">
              {getDisplayTeamName(homeTeam)}
            </span>
            <span className="mx-2">VS</span>
            <span className="whitespace-pre-line text-center font-bold">
              {getDisplayTeamName(awayTeam)}
            </span>
          </>
        )}
      </div>
      <div className="mt-2 font-normal text-base flex flex-col items-center gap-1">
        {isScheduled && <span className="text-gray-900">경기예정</span>}
        {isFinished && <span className="text-kbo-blue">경기종료</span>}
        {isCanceled && <span className="text-gray-500">{note}</span>}
      </div>
    </div>
  );
};

export default MatchCard;
