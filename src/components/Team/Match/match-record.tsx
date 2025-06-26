import CommonButton from '../CommonButton/common-button';
import MatchRecordCard from './match-record-card';

const matchRecords = [
  {
    date: '6월 17일 (화)',
    location: '광주',
    homeTeam: 'KIA',
    awayTeam: 'LG',
    homeScore: 3,
    awayScore: 1,
  },
  {
    date: '6월 17일 (화)',
    location: '광주',
    homeTeam: 'KIA',
    awayTeam: 'LG',
    homeScore: 3,
    awayScore: 1,
  },
  {
    date: '6월 17일 (화)',
    location: '광주',
    homeTeam: 'KIA',
    awayTeam: 'LG',
    homeScore: 3,
    awayScore: 1,
  },
  {
    date: '6월 17일 (화)',
    location: '광주',
    homeTeam: 'KIA',
    awayTeam: 'LG',
    homeScore: 3,
    awayScore: 1,
  },
  {
    date: '6월 17일 (화)',
    location: '광주',
    homeTeam: 'KIA',
    awayTeam: 'LG',
    homeScore: 3,
    awayScore: 1,
  },
  {
    date: '6월 17일 (화)',
    location: '광주',
    homeTeam: 'KIA',
    awayTeam: 'LG',
    homeScore: 3,
    awayScore: 1,
  },
];

const MatchRecord = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">경기 기록</div>
      <CommonButton variant="outlined">자세히 보기</CommonButton>
      <div className="grid grid-cols-6 gap-4">
        {matchRecords.map((record, index) => (
          <MatchRecordCard key={index} {...record} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default MatchRecord;
