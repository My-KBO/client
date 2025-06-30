//테스트용 임시 데이터

import { MatchCardProps } from './MatchCard';

const matchCardData: MatchCardProps[] = [
  {
    homeTeam: '두산\n베어스',
    awayTeam: 'NC\n다이노스',
    homeScore: 3,
    awayScore: 13,
    time: '18:30',
    stadium: '고척',
    status: '종료',
  },
  {
    homeTeam: '두산\n베어스',
    awayTeam: 'NC\n다이노스',
    homeScore: 3,
    awayScore: 13,
    time: '18:30',
    stadium: '고척',
    status: '종료',
  },
  {
    homeTeam: '삼성\n라이온즈',
    awayTeam: 'LG\n트윈스',
    time: '18:30',
    stadium: '고척',
    status: '예정',
  },
  {
    homeTeam: '삼성\n라이온즈',
    awayTeam: 'LG\n트윈스',
    time: '18:30',
    stadium: '고척',
    status: '예정',
  },
  {
    homeTeam: 'KT\n위즈',
    awayTeam: '롯데\n자이언츠',
    time: '18:30',
    stadium: '고척',
    status: '취소',
  },
];

export default matchCardData;
