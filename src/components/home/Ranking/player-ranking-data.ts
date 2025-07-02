export interface PlayerRankingData {
  category: string;
  name: string;
  team: string;
  info: string;
  image: string;
}

export const batterRankingData: PlayerRankingData[] = [
  {
    category: '타율 1위',
    name: '임찬규',
    team: '삼성',
    info: '평균 자책 2.8',
    image: '',
  },
  {
    category: '홈런 1위',
    name: '임찬규',
    team: '삼성',
    info: '평균 자책 2.8',
    image: '',
  },
];

export const pitcherRankingData: PlayerRankingData[] = [
  {
    category: '평균자책점 1위',
    name: '김도영',
    team: '기아',
    info: '평균 자책 2.1',
    image: '',
  },
  {
    category: '승리 1위',
    name: '박세웅',
    team: '롯데',
    info: '12승 3패',
    image: '',
  },
];
