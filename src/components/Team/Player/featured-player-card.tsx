import React from 'react';

type FeaturedPlayerCardProps = {
  title: string;
  position: string;
  name: string;
  statLabel: string;
  statValue: string;
};

const FeaturedPlayerCard = ({
  title,
  position,
  name,
  statLabel,
  statValue,
}: FeaturedPlayerCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 text-sm text-gray-700">
      <div className="flex items-center gap-4 ml-2">
        {/* 왼쪽: 타이틀 */}
        <div className="font-semibold min-w-[72px]">{title}</div>

        {/* 오른쪽: 포지션 + 이름/기록 */}
        <div className="flex flex-col gap-1 w-full">
          {/* 포지션 태그 */}
          <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded w-fit">
            {position}
          </span>

          {/* 이름 + 기록 */}
          <div className="flex items-center">
            <span className="font-semibold">{name}</span>
            <span className="text-xs ml-2">
              {statLabel} <span className="font-medium">{statValue}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlayerCard;
