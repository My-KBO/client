import React from 'react';

export type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number | string;
  awayScore?: number | string;
  time: string;
  stadium: string;
  status: '예정' | '종료' | '취소';
  weather?: string;
};

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  time,
  stadium,
  status,
  weather,
}) => {
  const isFinished = status === '종료';
  const isCanceled = status === '취소';

  // 점수가 빈 문자열이거나 undefined인 경우 처리
  const hasScore =
    homeScore !== '' &&
    homeScore !== undefined &&
    awayScore !== '' &&
    awayScore !== undefined;

  return (
    <div
      className={`rounded-[8px] border w-auto flex flex-col items-center gap-4 py-4 px-0 h-full justify-between ${
        isCanceled ? 'opacity-50' : ''
      } ${isFinished ? 'border-kbo-blue' : 'border-gray-200'}`}
    >
      <div className="text-[16px] text-gray-900 mb-1">
        {time} | {stadium}
      </div>
      {weather && (
        <div className="text-[12px] text-gray-600">날씨: {weather}</div>
      )}
      <div className="flex items-center justify-center gap-2 mb-2">
        {isFinished && hasScore ? (
          <>
            {/* 홈팀 */}
            <div className="flex flex-col items-center">
              <span className="whitespace-pre-line text-center text-kbo-blue font-bold">
                {homeTeam}
              </span>
              <span className="font-semibold text-[32px] text-kbo-blue mt-2">
                {homeScore}
              </span>
            </div>
            <span className="mx-4 text-[24px] font-bold text-kbo-blue">VS</span>
            {/* 원정팀 */}
            <div className="flex flex-col items-center">
              <span className="whitespace-pre-line text-center text-kbo-blue font-bold">
                {awayTeam}
              </span>
              <span
                className="font-semibold text-[32px]"
                style={{ color: '#19C3FF' }}
              >
                {awayScore}
              </span>
            </div>
          </>
        ) : (
          <>
            <span className="whitespace-pre-line text-center font-bold">
              {homeTeam}
            </span>
            <span className="mx-2">VS</span>
            <span className="whitespace-pre-line text-center font-bold">
              {awayTeam}
            </span>
          </>
        )}
      </div>
      <div className="mt-2 font-normal text-[16px]">
        {status === '예정' && <span className="text-gray-900 ">경기예정</span>}
        {status === '종료' && <span className="text-kbo-blue">경기종료</span>}
        {status === '취소' && <span className="text-gray-500">경기취소</span>}
      </div>
    </div>
  );
};

export default MatchCard;
