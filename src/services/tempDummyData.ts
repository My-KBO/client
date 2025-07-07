// 임시 더미 데이터 (백엔드 서버가 없을 때 사용)
// TODO: 백엔드 서버가 준비되면 이 파일을 삭제하고 baseballAPI.ts에서 실제 API 호출로 변경

export interface TeamRanking {
  rank: number;
  team: string;
  games: number;
  win: number;
  lose: number;
  draw: number;
  winRate: number;
  gameGap: string;
  streak: string;
}

export interface PlayerRankingItem {
  category: string;
  name: string;
  team: string;
  value: string;
}

export interface TopPlayerResponse {
  hitter: PlayerRankingItem[];
  pitcher: PlayerRankingItem[];
}

export interface TodayGame {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
  stadium: string;
  note: string;
  weather: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  publisher: string;
  author: string;
  date: string;
}

export interface HighlightItem {
  id: number;
  matchup: string;
  date: string;
  location: string;
  score?: string;
}

// 임시 더미 팀 순위 데이터
export const tempTeamRankings: TeamRanking[] = [
  {
    rank: 1,
    team: 'LG 트윈스',
    games: 72,
    win: 45,
    lose: 27,
    draw: 0,
    winRate: 0.625,
    gameGap: '-',
    streak: 'W3',
  },
  {
    rank: 2,
    team: 'SSG 랜더스',
    games: 72,
    win: 42,
    lose: 30,
    draw: 0,
    winRate: 0.583,
    gameGap: '3.0',
    streak: 'L1',
  },
  {
    rank: 3,
    team: 'KT 위즈',
    games: 72,
    win: 40,
    lose: 32,
    draw: 0,
    winRate: 0.556,
    gameGap: '5.0',
    streak: 'W2',
  },
  {
    rank: 4,
    team: '삼성 라이온즈',
    games: 72,
    win: 38,
    lose: 34,
    draw: 0,
    winRate: 0.528,
    gameGap: '7.0',
    streak: 'L2',
  },
  {
    rank: 5,
    team: '두산 베어스',
    games: 72,
    win: 36,
    lose: 36,
    draw: 0,
    winRate: 0.5,
    gameGap: '9.0',
    streak: 'W1',
  },
  {
    rank: 6,
    team: '기아 타이거즈',
    games: 72,
    win: 34,
    lose: 38,
    draw: 0,
    winRate: 0.472,
    gameGap: '11.0',
    streak: 'L1',
  },
  {
    rank: 7,
    team: '롯데 자이언츠',
    games: 72,
    win: 32,
    lose: 40,
    draw: 0,
    winRate: 0.444,
    gameGap: '13.0',
    streak: 'W1',
  },
  {
    rank: 8,
    team: 'NC 다이노스',
    games: 72,
    win: 30,
    lose: 42,
    draw: 0,
    winRate: 0.417,
    gameGap: '15.0',
    streak: 'L3',
  },
  {
    rank: 9,
    team: '한화 이글스',
    games: 72,
    win: 28,
    lose: 44,
    draw: 0,
    winRate: 0.389,
    gameGap: '17.0',
    streak: 'L2',
  },
  {
    rank: 10,
    team: '키움 히어로즈',
    games: 72,
    win: 25,
    lose: 47,
    draw: 0,
    winRate: 0.347,
    gameGap: '20.0',
    streak: 'L1',
  },
];

// 임시 더미 선수 랭킹 데이터
export const tempTopPlayers: TopPlayerResponse = {
  hitter: [
    { category: '타율', name: '이정후', team: '키움', value: '0.367' },
    { category: '홈런', name: '박병호', team: 'KT', value: '25개' },
  ],
  pitcher: [
    { category: '승수', name: '양현종', team: '기아', value: '12승' },
    { category: '방어율', name: '김광현', team: 'SSG', value: '2.15' },
  ],
};

// 임시 더미 오늘의 경기 데이터
export const tempTodayGames: TodayGame[] = [
  {
    id: 448,
    date: '07.02(수)',
    time: '18:30',
    homeTeam: '삼성',
    homeScore: '1',
    awayTeam: '두산',
    awayScore: '5',
    stadium: '잠실',
    note: '-',
    weather: '흐림',
  },
  {
    id: 449,
    date: '07.02(수)',
    time: '18:30',
    homeTeam: 'LG',
    homeScore: '',
    awayTeam: '롯데',
    awayScore: '',
    stadium: '사직',
    note: '-',
    weather: '드문드문 구름',
  },
  {
    id: 450,
    date: '07.02(수)',
    time: '18:30',
    homeTeam: '키움',
    homeScore: '',
    awayTeam: 'KT',
    awayScore: '',
    stadium: '수원',
    note: '-',
    weather: '흐림',
  },
  {
    id: 451,
    date: '07.02(수)',
    time: '18:30',
    homeTeam: 'SSG',
    homeScore: '',
    awayTeam: 'KIA',
    awayScore: '',
    stadium: '광주',
    note: '우천취소',
    weather: '구름 많음',
  },
  {
    id: 452,
    date: '07.02(수)',
    time: '18:30',
    homeTeam: 'NC',
    homeScore: '',
    awayTeam: '한화',
    awayScore: '',
    stadium: '대전(신)',
    note: '-',
    weather: '흐림',
  },
];
