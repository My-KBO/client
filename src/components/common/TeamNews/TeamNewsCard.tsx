import React from 'react';

type TeamNewsCardProps = {
  title: string;
  summary: string;
  publisher: string;
  author: string;
  date: string;
};

const TeamNewsCard = ({
  title,
  summary,
  publisher,
  author,
  date,
}: TeamNewsCardProps) => {
  return (
    <div className="w-64 mt-4 cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
      <div className="bg-gray-100 h-28" /> {/* 썸네일 */}
      <div className="p-3 text-sm space-y-2">
        <div className="font-semibold line-clamp-2">{title}</div>
        <div className="text-xs text-gray-600 line-clamp-2">{summary}</div>
        <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded w-fit">
          {publisher}
        </span>
        <div className="flex justify-between text-xs">
          <span>{author} 기자</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamNewsCard;
