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
    id: 1,
    date: '2025-06-17',
    time: '18:30',
    homeTeam: 'LG 트윈스',
    homeScore: '5',
    awayTeam: '기아 타이거즈',
    awayScore: '3',
    stadium: '잠실야구장',
    note: '종료',
    weather: '맑음',
  },
  {
    id: 2,
    date: '2025-06-17',
    time: '18:30',
    homeTeam: '삼성 라이온즈',
    homeScore: '',
    awayTeam: '두산 베어스',
    awayScore: '',
    stadium: '대구야구장',
    note: '예정',
    weather: '흐림',
  },
  {
    id: 3,
    date: '2025-06-17',
    time: '18:30',
    homeTeam: 'SSG 랜더스',
    homeScore: '2',
    awayTeam: '롯데 자이언츠',
    awayScore: '7',
    stadium: '인천SSG랜더스필드',
    note: '종료',
    weather: '맑음',
  },
];

// 임시 더미 뉴스 데이터
export const tempNews: NewsItem[] = [
  {
    id: 1,
    title: 'LG 트윈스, 기아 타이거즈 상대로 승리하며 1위 수성',
    summary:
      'LG 트윈스가 기아 타이거즈를 5-3으로 꺾고 1위 자리를 지켰습니다. 오지환의 결승타가 승리의 결정적 역할을 했습니다.',
    publisher: '스포츠조선',
    author: '김기자',
    date: '2025.06.17',
  },
  {
    id: 2,
    title: '김도영, 역전 홈런으로 기아 팬들 환호 받아',
    summary:
      '기아 타이거즈 김도영 선수가 8회말 역전 홈런을 쳐서 팀의 승리에 기여했습니다. 정말 최고의 선수입니다!',
    publisher: '기아신문',
    author: '홍길동',
    date: '2025.06.17',
  },
  {
    id: 3,
    title: '롯데 자이언츠, SSG 랜더스 상대로 대승',
    summary:
      '롯데 자이언츠가 SSG 랜더스를 7-2로 대파했습니다. 손아섭의 4안타 활약이 돋보였습니다.',
    publisher: '스포츠동아',
    author: '이기자',
    date: '2025.06.17',
  },
];

// 임시 더미 하이라이트 데이터
export const tempHighlights: HighlightItem[] = [
  {
    id: 1,
    matchup: 'LG vs KIA',
    date: '2025. 06. 17',
    location: '잠실',
    score: '5-3',
  },
  {
    id: 2,
    matchup: '삼성 vs 두산',
    date: '2025. 06. 17',
    location: '대구',
    score: '예정',
  },
  {
    id: 3,
    matchup: 'SSG vs 롯데',
    date: '2025. 06. 17',
    location: '인천',
    score: '2-7',
  },
  {
    id: 4,
    matchup: 'KT vs NC',
    date: '2025. 06. 17',
    location: '수원',
    score: '예정',
  },
  {
    id: 5,
    matchup: '한화 vs 키움',
    date: '2025. 06. 17',
    location: '대전',
    score: '예정',
  },
];
