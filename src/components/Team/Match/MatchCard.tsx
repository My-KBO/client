import React from 'react';

type MatchCardProps = {
  date: string;
  time: string;
  stadium: string;
  homeTeam: {
    name: React.ReactNode;
    emblem: string;
  };
  awayTeam: {
    name: React.ReactNode;
    emblem: string;
  };
};

const MatchCard = ({
  date,
  time,
  stadium,
  homeTeam,
  awayTeam,
}: MatchCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mt-6 w-full max-w-xl mx-auto text-center space-y-4">
      {/* 날짜 */}
      <div className="text-sm">{date}</div>

      {/* 팀 정보 */}
      <div className="flex items-center justify-between">
        {/* Away Team */}
        <div className="flex flex-col items-center gap-1">
          <img
            src={awayTeam.emblem}
            alt={`${awayTeam.name} 엠블럼`}
            className="w-12 h-12 object-contain"
          />
          <span className="text-sm font-semibold">{awayTeam.name}</span>
        </div>

        {/* VS */}
        <div className="text-sm text-gray-700 ml-4 mr-4">VS</div>

        {/* Home Team */}
        <div className="flex flex-col items-center gap-1">
          <img
            src={homeTeam.emblem}
            alt={`${homeTeam.name} 엠블럼`}
            className="w-12 h-12 object-contain"
          />
          <span className="text-sm font-semibold">{homeTeam.name}</span>
        </div>
      </div>

      {/* 시간과 장소 */}
      <div className="text-xs text-gray-500">{`${time} | ${stadium}`}</div>
    </div>
  );
};

export default MatchCard;
