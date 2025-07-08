import axios from 'axios';

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

export const fetchTeamRankings = async (): Promise<TeamRanking[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/baseball/rankings`,
  );
  return response.data;
};

export const fetchTopPlayers = async (): Promise<TopPlayerResponse> => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/baseball/topplayer`,
  );
  return response.data;
};

export const fetchTodayGames = async (): Promise<TodayGame[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/baseball/games/today`,
  );
  return response.data;
};
