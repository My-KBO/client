import React from 'react';

type FeaturedPlayerCardProps = {
  title: string;
  name: string;
  statLabel: string;
  statValue: string;
  game: number;
};

const FeaturedPlayerCard = ({
  title,
  name,
  statLabel,
  statValue,
  game,
}: FeaturedPlayerCardProps) => {
  // 투수인지 여부 판단
  const isPitcher = statLabel.toLowerCase() === 'era';

  // 경기 수 라벨
  const gameLabel = isPitcher ? `${game} 이닝` : `${game} 경기`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 text-sm text-gray-700">
      <div className="flex items-center gap-4 ml-2">
        {/* 왼쪽: 타이틀 */}
        <div className="font-semibold min-w-[72px] ml-8">{title}</div>

        {/* 오른쪽: 포지션 + 이름/기록 */}
        <div className="flex flex-col gap-1 w-full ml-12">
          {/* 기록*/}
          <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded w-fit">
            <span className="mr-1">{statLabel}</span>
            <span>{statValue}</span>
          </span>

          {/* 이름 + 타수/이닝수 */}
          <div className="flex items-center">
            <div className="font-semibold mr-2">{name}</div>
            <span className="text-xs font-normal">{gameLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlayerCard;
