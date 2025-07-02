import React from 'react';

const highlights = [
  { matchup: 'LG vs KIA', date: '2025. 06. 17', location: '광주' },
  { matchup: '삼성 vs 두산', date: '2025. 06. 17', location: '대구' },
  { matchup: 'SSG vs 롯데', date: '2025. 06. 17', location: '인천' },
  { matchup: 'KT vs NC', date: '2025. 06. 17', location: '수원' },
  { matchup: '한화 vs 키움', date: '2025. 06. 17', location: '대전' },
];

const HighlightToday = () => {
  return (
    <section className="w-full flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold mb-6">오늘의 하이라이트</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-4/5">
        {highlights.map((highlight, idx) => (
          <div
            key={idx}
            className="w-48 bg-white border border-gray-100 rounded-md overflow-hidden flex-shrink-0"
          >
            <div className="bg-gray-100 h-28" /> {/* 썸네일 자리 */}
            <div className="p-2 text-sm">
              <div className="font-semibold mb-2">{highlight.matchup}</div>
              <div className="text-xs text-gray-500">
                {highlight.date} | {highlight.location}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8 w-full" />
    </section>
  );
};

export default HighlightToday;
