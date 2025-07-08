import React from 'react';

type TeamNewsCardProps = {
  title: string;
  summary: string;
  date: string;
  url: string;
  thumbnail: string;
};

const TeamNewsCard = ({
  title,
  summary,
  date,
  url,
  thumbnail,
}: TeamNewsCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="w-64 mt-4 cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0"
    >
      {/* 썸네일 */}
      <div className="h-28 bg-gray-100 overflow-hidden">
        {thumbnail && ( //썸네일 없는 경우 회색 배경
          <img
            src={thumbnail}
            alt="썸네일"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* 본문 */}
      <div className="p-4 text-sm h-[calc(100%-7rem)] flex flex-col justify-between">
        <div className="space-y-2">
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-gray-600 line-clamp-2">{summary}</div>
        </div>
        <div className="text-xs text-gray-500 mt-2">{date}</div>
      </div>
    </a>
  );
};

export default TeamNewsCard;
