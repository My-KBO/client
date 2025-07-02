import React from 'react';

type MatchRecordCardProps = {
  date: string;
  stadium: string;
  homeTeam: React.ReactNode;
  awayTeam: React.ReactNode;
  homeScore: number;
  awayScore: number;
};

const MatchRecordCard = ({
  date,
  stadium,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}: MatchRecordCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 w-full max-w-xs mx-auto text-center space-y-2">
      {/* 날짜 */}
      <div className="text-sm">{date}</div>

      {/* 위치 */}
      <div className="text-xs">{stadium}</div>

      {/* 매치업 */}
      <div className="text-lg font-semibold">
        {awayTeam} vs {homeTeam}
      </div>

      {/* 점수 */}
      <div className="text-2xl text-kbo-blue">
        {awayScore} : {homeScore}
      </div>
    </div>
  );
};

export default MatchRecordCard;
