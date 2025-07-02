import api from './api';

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

export const fetchTeamRankings = async (): Promise<TeamRanking[]> => {
  const res = await api.get<TeamRanking[]>('/baseball/rankings');
  return res.data;
};

// Player Ranking 관련 타입 및 API
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

export const fetchTopPlayers = async (): Promise<TopPlayerResponse> => {
  const res = await api.get<TopPlayerResponse>('/baseball/topplayer');
  return res.data;
};

// 오늘의 경기 일정 타입 및 API
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

export const fetchTodayGames = async (): Promise<TodayGame[]> => {
  const res = await api.get<TodayGame[]>('/baseball/games/today');
  return res.data;
};
