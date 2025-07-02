export interface TeamRanking {
  rank: number;
  team: string;
  games: number;
  win: number;
  lose: number;
  draw: number;
  winRate: string;
  diff: string;
  streak: string;
}

const teamRankingData: TeamRanking[] = [
  {
    rank: 1,
    team: 'LG',
    games: 64,
    win: 38,
    lose: 25,
    draw: 1,
    winRate: '0.603',
    diff: '-',
    streak: '1승',
  },
  {
    rank: 2,
    team: '한화',
    games: 64,
    win: 37,
    lose: 27,
    draw: 0,
    winRate: '0.578',
    diff: '1.5',
    streak: '1패',
  },
  {
    rank: 3,
    team: '롯데',
    games: 65,
    win: 34,
    lose: 28,
    draw: 3,
    winRate: '0.548',
    diff: '3.5',
    streak: '2승',
  },
  {
    rank: 4,
    team: '삼성',
    games: 64,
    win: 34,
    lose: 29,
    draw: 1,
    winRate: '0.540',
    diff: '4',
    streak: '1승',
  },
  {
    rank: 5,
    team: 'KT',
    games: 65,
    win: 33,
    lose: 29,
    draw: 3,
    winRate: '0.532',
    diff: '4.5',
    streak: '1패',
  },
  {
    rank: 6,
    team: 'SSG',
    games: 63,
    win: 32,
    lose: 29,
    draw: 2,
    winRate: '0.525',
    diff: '5',
    streak: '1패',
  },
  {
    rank: 7,
    team: 'KIA',
    games: 62,
    win: 31,
    lose: 30,
    draw: 1,
    winRate: '0.508',
    diff: '6',
    streak: '1승',
  },
  {
    rank: 8,
    team: 'NC',
    games: 60,
    win: 26,
    lose: 31,
    draw: 3,
    winRate: '0.456',
    diff: '9',
    streak: '1패',
  },
  {
    rank: 9,
    team: '두산',
    games: 64,
    win: 25,
    lose: 36,
    draw: 3,
    winRate: '0.410',
    diff: '12',
    streak: '2패',
  },
  {
    rank: 10,
    team: '키움',
    games: 67,
    win: 20,
    lose: 46,
    draw: 1,
    winRate: '0.303',
    diff: '19.5',
    streak: '1패',
  },
];

export default teamRankingData;
