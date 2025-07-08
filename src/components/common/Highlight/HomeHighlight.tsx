import HighlightCard from './HighlightCard';

const homeHighlights = [
  {
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '광주',
  },
  {
    matchup: '삼성 vs 두산',
    date: '2025. 06. 17',
    location: '대구',
  },
  {
    matchup: 'SSG vs 롯데',
    date: '2025. 06. 17',
    location: '인천',
  },
  {
    matchup: 'KT vs NC',
    date: '2025. 06. 17',
    location: '수원',
  },
  {
    matchup: '한화 vs 키움',
    date: '2025. 06. 17',
    location: '대전',
  },
];

const HomeHighlight = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-6 mb-4">오늘의 하이라이트</div>
      {/* <div className="grid grid-cols-5 gap-4">
        {homeHighlights.map((highlight, index) => (
          <HighlightCard key={index} {...highlight} />
        ))}
      </div> */}
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default HomeHighlight;
